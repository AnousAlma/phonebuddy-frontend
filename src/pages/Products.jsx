import { useParams, useNavigate } from "react-router-dom";
import { Box, Text, Image, Button, VStack, HStack, Divider, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import {PhonesAPI} from "../APIs/PhonesAPI";

function Products() {
  const { slug } = useParams();
  const navigate = useNavigate(); // Hook to programmatically navigate
  const [image, setImage] = useState("");
  const [phone, setPhone] = useState("");
  const [brand, setBrand] = useState("");
  const [price, setPrice] = useState("");
  const [upfront, setUpfront] = useState("");
  const [link, setLink] = useState("");

  const boxWidth = useBreakpointValue({ base: "100%", md: "50%" });

  useEffect(() => { 
    PhonesAPI.getPhone(slug).then((phone) => {
      setBrand(phone.brand);
      setImage(phone.image);
      setPhone(phone.phone);
      setPrice(phone.monthly);
      setUpfront(phone.upfront);
      setLink(phone.link);
    });
  }, [slug])


  // Default values if props are not provided
  // if (!image) {
  //   image = "https://images.ctfassets.net/evnrpfa1vdk4/19ppXPEmEtAWZfb8eBcIdJ/94a86c4f021984f4ae87d1ce69363cf4/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__CAEN-copy.png?w=1000&q=100&fm=webp";
  // }
  // if (!phone) {
  //   phone = "iPhone 15 Pro Max";
  // }
  // if (!brand) {
  //   brand = "Apple";
  // }
  // if (!price) {
  //   price = "58.29";
  // }
  // if (!upfront) {
  //   upfront = "0";
  // }

  return (
    <>
      {useBreakpointValue({ base: null, md: <Navbar /> })}
      <Box width="100vw" p={0} mt={10} bg="white" overflow="hidden" position="relative">
        {/* Back Arrow Icon */}
        <IconButton
          icon={<ArrowBackIcon />}
          onClick={() => navigate(-1)}
          aria-label="Go Back"
          position="absolute"
          left={4}
          size="lg"
          variant="ghost"
          colorScheme="pink"
        />

        <HStack
          align="start"
          spacing={0}
          width="100%"
          height="100%"
          flexDirection={{ base: "column", md: "row" }} // Stack on mobile, row on desktop
        >
          {/* Image Section */}
          <Box
            width={boxWidth}
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="white"
            borderBottom={{ base: "1px solid", md: "none" }}
            borderRight={{ base: "none", md: "1px solid" }}
            borderColor="gray.200"
            p={{ base: 4, md: 0 }} // Add padding for mobile
          >
            <Image
              alt={phone}
              src={image}
              objectFit="contain"
              maxWidth="100%"
              height="auto"
              width={{ base: "60%", md: "40%" }} // Bigger image on mobile
            />
          </Box>

          {/* Product Details Section */}
          <VStack
            align="start"
            spacing={5}
            width={boxWidth}
            p={{ base: 6, md: 10 }} // More padding on larger screens
            bg="white"
          >
            <Text fontSize={{ base: "2xl", md: "3xl" }} fontWeight="bold" color="gray.800">
              {phone}
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              Brand: {brand}
            </Text>
            <Divider />
            <Text fontSize={{ base: "xl", md: "2xl" }} fontWeight="bold" color="gray.800">
              ${price}/mo <br /> ${upfront} upfront
            </Text>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              Experience the next level of innovation with the {phone}. Featuring a stunning design and cutting-edge technology.
            </Text>
            <Button colorScheme="pink" size="lg" width="100%" minHeight="48px">
              Add to Cart
            </Button>
            <Button variant="outline" colorScheme="pink" size="lg" width="100%" minHeight="48px" onClick={() => window.open(link)}>
              Buy Now
            </Button>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600">
              <Text as="span" color="gray.800" fontWeight="bold">
                Slug:
              </Text>{" "}
              {slug}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </>
  );
}

export default Products;
