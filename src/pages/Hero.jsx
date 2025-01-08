import './css/Hero.css'
import {
    Box,
    Button,
    SimpleGrid,
    Text,
} from '@chakra-ui/react'

const Hero = () => {
  return (
    <SimpleGrid columns={[1, null, null, 2]} templateColumns={{base:"100vw", xl:"60vw 40vw", }}>
        <Box w={{sm:"100vw", xl:"60vw"}} textAlign="center" className='left'>
            <Text fontSize={{sm:"5xl", lg:"4xl", xl:"5xl"}}>Find The <span className='pink'>Best</span> Deals</Text>
            <Text fontSize={{sm:"5xl", lg:"4xl", xl:"5xl"}}>For The <span className='pink'>Cheapest</span> Prices</Text>
            <Button 
            bgColor="#BD00FF" color="white" borderRadius="49px" mt="1.5em" size='lg' ml="auto" mr="auto"
            _hover={{ bg: '#a300de' }}
            _active={{
                bg: '#7f00ad',
                transform: 'scale(0.98)',
            }}        
            >Explore The Deals</Button>
        </Box>
        <Box w='100%' className='right' flex={1}>
            <img src='hero-phone.png' className='hero-image' alt='hero' />
        </Box>
    </SimpleGrid>
  )
}

export default Hero