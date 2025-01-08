import {
  Box,
  Image,
  Text,
} from "@chakra-ui/react"
import "./css/Results.css"
import PropTypes from 'prop-types';

const PhoneBox = ({image, brand, phone, price, upfront, id, provider}) => {

  function capitalize(string) {
    const words = string.split(' ');
    for (let i = 0; i < words.length; i++) {
      if (words[i] === "iphone"){
        words[i] = "iPhone";
      }
      else {
      words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);}
    }
    return words.join(' ');
  }

  return (
    <Box width="15em"
      borderRadius="20px"
      _hover={{boxShadow: '0 0 10px #000000'}}
      p={4}
      ml="auto"
      mr="auto"
      onClick={() => window.location.href = '/products/' + id}
    >
      <Image alt="Phone" maxH="100%" maxW="100%"
      src={image}/>
      <Text fontSize="md" mt="2em">{capitalize(brand)}</Text>
      <Text fontSize="xl" fontWeight="bold">{capitalize(phone)}</Text>
      <Text fontSize="lg" color="gray.800" mb="0">Provider: {provider}</Text>
      <Text fontSize="2xl" fontWeight="bold" mt="0.2em">${price}/mo</Text>
      <Text fontSize="md"><span className='bold'>${upfront}</span> upfront</Text>
    </Box>
  )
}

PhoneBox.propTypes = {
  image: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  upfront: PropTypes.string.isRequired,
}

export default PhoneBox