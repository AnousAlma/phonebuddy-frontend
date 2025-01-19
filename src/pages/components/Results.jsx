import { SimpleGrid, Button, Flex } from '@chakra-ui/react';
import PhoneBox from './PhoneBox';
import { useEffect, useState, useRef } from 'react';
import { PhonesAPI } from '../../APIs/PhonesAPI';

const Results = ({ filter, sort, setMessage }) => {
  const [phones, setPhones] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const resultsRef = useRef(null); // Ref for the results container

  const loadPhones = async () => {
    const response = await PhonesAPI.getPhones({ ...filter, page, limit: 20, sort });
    setPhones(response.phones);
    setMessage(response.message)
    setTotalPages(response.totalPages); // Assuming backend sends total pages.
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' }); 
    }
  };

  useEffect(() => {
    loadPhones();
  }, [filter, page, sort]);

  useEffect(() => {
    setPage(1);
  }, [filter, sort]);


  const phoneBoxes = phones.map((phone) => (
    <PhoneBox key={phone._id} id={phone._id} image={phone.image} brand={phone.brand} phone={phone.phone} price={phone.monthly} upfront={phone.upfront} provider={phone.provider} />
  ));

  return (
    <>
      <SimpleGrid
        ref={resultsRef} // Attach ref to the results container
        scrollMarginTop={'9em'} // Scroll margin to prevent the fixed header from overlapping the results
        minChildWidth="15em"
        spacing={{ sm: '5', md: '10' }}
        mt="2em"
        ml="2em"
        mr="2em"
      >
        {phones.length > 0 ? phoneBoxes : <h1>No phones found</h1>}
        {/* <PhoneBox key={0} id={0} image="https://images.ctfassets.net/evnrpfa1vdk4/19ppXPEmEtAWZfb8eBcIdJ/94a86c4f021984f4ae87d1ce69363cf4/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__CAEN-copy.png?w=324&q=80&fm=webp" 
        brand={"apple"} phone={"iPhone 15 Pro Max to the Max!"} price={"21.50"} upfront={"300"} provider={"Kootelus"} /> */}
      </SimpleGrid>
      <Flex justifyContent="center" mt="2em">
        <Button isDisabled={page === 1} onClick={() => handlePageChange(page - 1)}>Previous</Button>
        <Button isDisabled={page === totalPages} onClick={() => handlePageChange(page + 1)} ml="1em">Next</Button>
      </Flex>
    </>
  );
};

export default Results;
