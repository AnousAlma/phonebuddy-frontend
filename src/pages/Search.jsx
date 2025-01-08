import {useState} from 'react'
import {
    Flex,
    Box,
    Heading,
    Text,
    Select,
    SimpleGrid,
} from '@chakra-ui/react'
import Filters from './components/Filters'
import Results from './components/Results'


const Search = () => {

  const [sortValue, setSortValue] = useState('featured')
  const [values, setValues] = useState({
    brands: 'all',
    providers: 'all',
    // offers: 'all',
    // availability: 'all',
    // condition: 'all',
    // phone: 'all'
  })
  const [message, setMessage] = useState('')

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setSortValue(selectedValue);
};
  return (
    <SimpleGrid columns={[1, 2]} templateColumns={{base:"100vw", md:"30vw 70vw"}} mt={{base:"2.5em" , md:"4em"}} h="100%">
        <Box pl="2em" mt={{base:"0em" , md:"1.75em"}} w={{sm:"100vw", md:"30vw"}}>
            <Heading fontSize="2xl" w="30vw" >Filter By</Heading>
            <Box w={{base:"90%", md:"100%"}} h="4px" mt="0.5em" bgColor="#BD00FF" borderRadius="5px"/>
            <Filters values={values} setValues={setValues}/>
        </Box>
        <Box w={{sm:"100vw", md:"auto"}}>
            <Flex flexDir={{base:"column-reverse", md:"row"}} justifyContent={{base:"space-around", md:"space-between"}} mt={{base:"2.5em", md:"0em"}}>
                <Text textAlign={{base:"center", md:"start"}} fontSize="xl" fontWeight="bold" mt={{base:6, md:0}} ml={{base:0, md:"2em"}}>{message}</Text>
                <Box mr="2em" ml={{base:"2em", md:0}} mt={{base:"0em", md:"1.5em"}}>
                  <Text fontSize="large" fontWeight="bold">Sort By:</Text>
                  <Select value={sortValue} onChange={handleSelectChange} borderColor="black" borderRadius="10px" h="2.5em">
                    <option value='featured'>Featured</option>
                    <option value='price-ascending'>Price: Ascending</option>
                    <option value='price-descending'>Price: Descending</option>
                  </Select>
                </Box>
            </Flex>
            <Results filter={values} sort={sortValue} setMessage={setMessage}/>
        </Box>
    </SimpleGrid>
  )
}

export default Search