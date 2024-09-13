import {Container, VStack, Text, SimpleGrid }  from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { useProductStore } from '../store/product';
import { useEffect } from 'react';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const { fetchProducts, products } = useProductStore();
  useEffect(()=> {
    fetchProducts();
  }, [fetchProducts]);
  console.log('products', products);

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
          <SimpleGrid columns={{
            base:3, md: 2, lg: 3
          }}
          spacing={10}
          width={'full'}>
            {products.map((product) => {
              <ProductCard key={product.id} product={product}/>
            })}


          </SimpleGrid>
        </Text>


      </VStack>
      
      <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
      <script noModule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
    </Container>   
  )
}

export default HomePage