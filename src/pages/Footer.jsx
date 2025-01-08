import 
{
    Flex,
    Icon,
    Text,
} from '@chakra-ui/react'
import { FaInstagram } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { LuPhone } from "react-icons/lu";
import { MdOutlineChatBubbleOutline } from "react-icons/md";



const Footer = () => {
  return (
    <Flex h="3em" color="white" backgroundColor="#FF006B" alignItems="center" justifyContent="space-between">
        <Text pl={5}>©PhoneBuddy</Text>
        <Flex w="20em" pr={5} justifyContent="space-around">
            <Icon as={LuPhone} w={6} h={6} />
            <Icon as={MdMailOutline} w={6} h={6} />
            <Icon as={MdOutlineChatBubbleOutline} w={6} h={6} />
            <Icon as={FaInstagram} w={6} h={6} />
        </Flex>
    </Flex>
  )
}

export default Footer