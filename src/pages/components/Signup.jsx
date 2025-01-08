import { useState } from "react";
import { Button, Input, FormControl, FormErrorMessage, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../APIs/firebase";
import { UsersAPI } from "../../APIs/UsersAPI";
import { ObjectID } from "bson-objectid";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validateEmail = (email) => /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const checkPasswordStrength = (password) => {
    if (password.length < 6) return "Password too short";

    return "";
  };

  const handleSignup = async () => {
    const emailError = validateEmail(email) ? "" : "Invalid email";
    const passwordError = checkPasswordStrength(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    try {
      const auth = getAuth();
      await createUserWithEmailAndPassword(auth, email, password).then(async () => {
        const res = await UsersAPI.createUser({
          _id: new ObjectID().toHexString(),
          full_name: name,
          email: email,
          img: null,
        });
        
        if (res != null) {
          onClose();
        }
        else {
          console.error("Failed to create user");
        }
      })
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const auth = getAuth();
      await signInWithPopup(auth, googleProvider).then(async () => {
        const res = await UsersAPI.createUser({
          _id: new ObjectID().toHexString(),
          full_name: name,
          email: email,
          img: null,
        });
        
        if (res != null) {
          onClose();
        }
        else {
          console.error("Failed to create user");
        }
      })
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={onOpen} colorScheme="pink">Sign Up</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign Up</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <FormControl>
                <Input
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.email}>
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormErrorMessage>{errors.email}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.password}>
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FormErrorMessage>{errors.password}</FormErrorMessage>
              </FormControl>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" onClick={handleSignup} mr="auto">Sign Up</Button>
            
            <Button colorScheme="pink" onClick={handleGoogleSignup}>Sign Up with Google</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

