/* eslint-disable react/prop-types */
import { Box, Flex, Text, IconButton, Stack, Collapse, Popover, PopoverTrigger, PopoverContent, useColorModeValue, useDisclosure, Image, Menu, MenuButton, Avatar, MenuList, MenuItem, Button, useColorMode } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, ChevronDownIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {app, firebaseService} from "../utils/firebase";
import Login from "./components/Login"; 
import Signup from "./components/Signup"; 

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [user, setUser] = useState(null);
  const [profilePic, setProfilePic] = useState(null);
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    const auth = getAuth(app);
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        if (currentUser){
        setUser(currentUser);
        if (currentUser.photoURL){
        setProfilePic(new URL(currentUser.photoURL));
      }
      }
    });

    return () => unsubscribe();

  }, []);

  const logout = () => {
    firebaseService.signOutUser().then(() => {
      setUser(null);
      setProfilePic(null);
    });
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={2}
        px={4}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        shadow={"md"}
      >
        <IconButton
          display={{ base: "flex", md: "none" }}
          onClick={onToggle}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          variant={"ghost"}
          aria-label={"Toggle Navigation"}
        />
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Image src="/phonebuddy-logo.svg" alt="PhoneBuddy Logo" boxSize="35px" ml={{base:"auto", md:"0"}}/>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Flex>
        <Stack flex={{ base: 1 }} justify={"flex-end"} direction={"row"} spacing={6}>
          <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
          {user ? (
            // <Image src={profilePic} h="40px" w="40px" borderRadius="full" />
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'sm'}
                  src={
                    profilePic
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem onClick={logout}>Log Out</MenuItem>
                {/* <MenuItem>Link 2</MenuItem> */}
              </MenuList>
            </Menu>
          ) : (
            <>
              <Login />
              <Signup /> 
            </>
          )}
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Box
                as="a"
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{ color: linkHoverColor }}
              >
                {navItem.label}
              </Box>
            </PopoverTrigger>
            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                p={4}
                rounded={"xl"}
                bg={popoverBgColor}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => (
  <Box
    as="a"
    href={href}
    role={"group"}
    p={2}
    rounded={"md"}
    _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
  >
    <Stack direction={"row"} align={"center"}>
      <Box>
        <Text
          transition={"all .3s ease"}
          _groupHover={{ color: "pink.400" }}
          fontWeight={500}
        >
          {label}
        </Text>
        <Text fontSize={"sm"}>{subLabel}</Text>
      </Box>
    </Stack>
  </Box>
);

const MobileNav = () => (
  <Stack bg={useColorModeValue("white", "gray.800")} p={4} display={{ md: "none" }}>
    {NAV_ITEMS.map((navItem) => (
      <MobileNavItem key={navItem.label} {...navItem} />
    ))}
  </Stack>
);

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? "#"}
        justifyContent="space-between"
        alignItems="center"
        _hover={{ textDecoration: "none" }}
      >
        <Text fontWeight={600} color={useColorModeValue("gray.600", "gray.200")}>
          {label}
        </Text>
        {children && (
          <ChevronDownIcon
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle={"solid"} borderColor={useColorModeValue("gray.200", "gray.700")} align={"start"}>
          {children && children.map((child) => (
            <Box key={child.label} py={2} as="a" href={child.href}>
              {child.label}
            </Box>
          ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  // Example Nav Items
  // {
  //   label: 'Inspiration',
  //   children: [
  //     {
  //       label: 'Explore Design Work',
  //       subLabel: 'Trending Design to inspire you',
  //       href: '#',
  //     },
  //     {
  //       label: 'New & Noteworthy',
  //       subLabel: 'Up-and-coming Designers',
  //       href: '#',
  //     },
  //   ],
  // },
];

