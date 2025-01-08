import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Radio, 
  RadioGroup,
  Stack,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'

const Filters = ({values, setValues}) => {

  // const [offersValue, setOfferssValue] = useState('1')
  // const [availabilityValue, setAvailabilityValue] = useState('1')
  // const [conditionValue, setConditionValue] = useState('1')
  // const [phoneValue, setPhoneValue] = useState('1')

  const setBrandsValue = (e) => {
    setValues({...values, brands: e})
  }

  const setProvidersValue = (e) => {
    setValues({...values, providers: e})
  }

  return (
    <Accordion w="90%" allowToggle>
      <AccordionItem borderColor="white">
        <h2>
          <AccordionButton borderColor="#FF006B" borderBottomWidth="2px" borderRadius="1px" borderTop="0px">
            <Box flex='1' textAlign='left' pt={2}>
              <Text fontSize="xl">Brands</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            <RadioGroup  onChange={(e) => setBrandsValue(e)} value={values.brands} colorScheme='pink'>
              <Stack direction='column'>
                <Radio value='all' pt={1}><Text fontSize="1.2rem">All</Text></Radio>
                <Radio value='apple' pt={1}><Text fontSize="1.2rem">Apple</Text></Radio>
                <Radio value='samsung' pt={1}><Text fontSize="1.2rem">Samsung</Text></Radio>
                <Radio value='google' pt={1}><Text fontSize="1.2rem">Google</Text></Radio>
              </Stack>
            </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
      
      <AccordionItem borderColor="white">
        <h2>
          <AccordionButton borderColor="#FF006B" borderBottomWidth="2px" borderRadius="1px" borderTop="0px">
            <Box flex='1' textAlign='left' pt={2}>
              <Text fontSize="xl">Provider</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            <RadioGroup  onChange={(e) => setProvidersValue(e)} value={values.providers} colorScheme='pink'>
              <Stack direction='column'>
                <Radio value='all' pt={1}><Text fontSize="1.2rem">All</Text></Radio>
                <Radio value='telus' pt={1}><Text fontSize="1.2rem">Telus</Text></Radio>
                <Radio value='freedom mobile' pt={1}><Text fontSize="1.2rem">Freedom</Text></Radio>
                <Radio value='Koodo' pt={1}><Text fontSize="1.2rem">Koodo</Text></Radio>
              </Stack>
            </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
{/*       
      <AccordionItem borderColor="white">
        <h2>
          <AccordionButton borderColor="#FF006B" borderBottomWidth="2px" borderRadius="1px" borderTop="0px">
            <Box flex='1' textAlign='left' pt={2}>
              <Text fontSize="xl">Availability</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            <RadioGroup  onChange={setAvailabilityValue} value={availabilityValue} colorScheme='pink'>
              <Stack direction='column'>
                <Radio value='1' pt={1}><Text fontSize="1.2rem">All</Text></Radio>
                <Radio value='2' pt={1}><Text fontSize="1.2rem">Coming Soon</Text></Radio>
                <Radio value='3' pt={1}><Text fontSize="1.2rem">Pre-Register</Text></Radio>
                <Radio value='4' pt={1}><Text fontSize="1.2rem">Pre-Order</Text></Radio>
                <Radio value='5' pt={1}><Text fontSize="1.2rem">Online Only</Text></Radio>
                <Radio value='6' pt={1}><Text fontSize="1.2rem">Last Chance</Text></Radio>
              </Stack>
            </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
      
      <AccordionItem borderColor="white">
        <h2>
          <AccordionButton borderColor="#FF006B" borderBottomWidth="2px" borderRadius="1px" borderTop="0px">
            <Box flex='1' textAlign='left' pt={2}>
              <Text fontSize="xl">Condition</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            <RadioGroup  onChange={setConditionValue} value={conditionValue} colorScheme='pink'>
              <Stack direction='column'>
                <Radio value='1' pt={1}><Text fontSize="1.2rem">All</Text></Radio>
                <Radio value='2' pt={1}><Text fontSize="1.2rem">New</Text></Radio>
                <Radio value='3' pt={1}><Text fontSize="1.2rem">Certified Pre-Owner</Text></Radio>
              </Stack>
            </RadioGroup>
        </AccordionPanel>
      </AccordionItem>
      
      <AccordionItem borderColor="white">
        <h2>
          <AccordionButton borderColor="#FF006B" borderBottomWidth="2px" borderRadius="1px" borderTop="0px">
            <Box flex='1' textAlign='left' pt={2}>
              <Text fontSize="xl">Type of Phone</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
            <RadioGroup  onChange={setPhoneValue} value={phoneValue} colorScheme='pink'>
              <Stack direction='column'>
                <Radio value='1' pt={1}><Text fontSize="1.2rem">All</Text></Radio>
                <Radio value='2' pt={1}><Text fontSize="1.2rem">Smartphones</Text></Radio>
                <Radio value='3' pt={1}><Text fontSize="1.2rem">5G Ready</Text></Radio>
                <Radio value='4' pt={1}><Text fontSize="1.2rem">Basic Cell Phone (Talk and Text)</Text></Radio>
                <Radio value='5' pt={1}><Text fontSize="1.2rem">Bring Your Own Device</Text></Radio>
              </Stack>
            </RadioGroup>
        </AccordionPanel>
      </AccordionItem> */}
    </Accordion>
    
  )
}

export default Filters