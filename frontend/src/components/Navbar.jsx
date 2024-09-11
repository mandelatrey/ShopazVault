import { Container, Flex, Text,  HStack, Button, useColorMode } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { GrAddCircle } from "react-icons/gr";
import { WiMoonAltWaxingCrescent6, WiMoonAltWaxingGibbous1 } from "react-icons/wi";


const Navbar = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Container maxW={"1140px"} px={4} py={4}>
      <Flex h={16} 
      alignItems={"center"} 
      justifyContent={"space-between"}
      flexDir={{
        base: "column",
        sm:"row"
      }}>
        <Text
          bgGradient='linear(to-r, cyan.400, blue.500)'
          bgClip="text"
          fontSize={{ base: "22", sm: "28"}}
          fontWeight='black'
          textTransform="letter-case"
          textAlign={"center"}

        >
            <Link to={"/"}>Shopaz Vault </Link>&#129305;
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <GrAddCircle size={17} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            { colorMode === 'light' ? <WiMoonAltWaxingCrescent6  size={20} /> : <WiMoonAltWaxingGibbous1 size={20} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  )
}

export default Navbar