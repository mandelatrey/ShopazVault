import {Container, VStack, Text, textDecoration} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    
      <Container>
      <VStack>
        <Text
          fontSize={'38'}
          fontWeight={'bold'}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
          textAlign={"center"}
        >
        Current products
        </Text>

        <Text fontSize={'xl'} textAlign={'center'} fontWeight={'bold'} color={'gray.500'}>
          No products found ⭐ {" "}
          <Link to={'/create'}>
            <Text color={'blue.500'} _hover={{ textDecoration: 'underline'}} >
               Create Product
          </Text>
          </Link>
        </Text>


      </VStack>
      
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </Container>   
  )
}

export default HomePage