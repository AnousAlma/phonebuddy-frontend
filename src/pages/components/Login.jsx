import { useState } from "react";
import { Button, Input, FormControl, FormErrorMessage, VStack, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { googleProvider } from "../../APIs/firebase";
import { UsersAPI } from "../../APIs/UsersAPI";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const { isOpen, onOpen, onClose } = useDisclosure();

  const validateEmail = (email) => /\S+@\S+\.\S+/.test(email);
  const checkPasswordStrength = (password) => {
    if (password.length < 6) return "Password too short";
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/\d/.test(password)) {
      return "Weak password";
    }
    return "";
  };

  const handleLogin = async () => {
    const emailError = validateEmail(email) ? "" : "Invalid email";
    const passwordError = checkPasswordStrength(password);

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return;
    }

    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password).then(async () => {
        await UsersAPI.login()
            .then((res) => {
              if (res != null) {
                onClose();
              } else {
                console.error("Failed to log in user: " + res);
              }
            })
      })
      .catch((error) => {
        console.error("User was not logged in: " + error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth();
      await signInWithPopup(auth, googleProvider).then(async () => {
        await UsersAPI.login()
            .then((res) => {
              if (res != null) {
                onClose();
              } else {
                console.error("Failed to log in user: " + res);
              }
            })
      })
      .catch((error) => {
        console.error("User was not logged in: " + error);
      });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button onClick={onOpen} variant="outline" colorScheme="pink">Log In</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Log In</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
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
            <Button colorScheme="blue" onClick={handleLogin}>Log In</Button>
            <Button colorScheme="pink" onClick={handleGoogleLogin}>Log In with Google</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
