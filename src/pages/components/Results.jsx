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

  // useEffect(() => {
  //   if (sort === 'price-ascending') {
  //     setPhones([...phones].sort((a, b) => a.monthly - b.monthly));
  //   } else if (sort === 'price-descending') {
  //     setPhones([...phones].sort((a, b) => b.monthly - a.monthly));
  //   }
  // }, [sort]);

  const phoneBoxes = phones.map((phone) => (
    <PhoneBox key={phone._id} id={phone._id} image={phone.image} brand={phone.brand} phone={phone.phone} price={phone.monthly} upfront={phone.upfront} provider={phone.provider} />
  ));

  return (
    <>
      <SimpleGrid
        ref={resultsRef} // Attach ref to the results container
        minChildWidth="15em"
        spacing={{ sm: '5', md: '10' }}
        mt="2em"
        ml="2em"
        mr="2em"
      >
        {phones.length > 0 ? phoneBoxes : <h1>No phones found</h1>}
      </SimpleGrid>
      <Flex justifyContent="center" mt="2em">
        <Button isDisabled={page === 1} onClick={() => handlePageChange(page - 1)}>Previous</Button>
        <Button isDisabled={page === totalPages} onClick={() => handlePageChange(page + 1)} ml="1em">Next</Button>
      </Flex>
    </>
  );
};

export default Results;
