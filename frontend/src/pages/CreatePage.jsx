import { Container, VStack, Heading } from "@chakra-ui/react";
import { useState } from "react";

const CreatePage = () => {
    const [newProduct, setNewProduct] = useState({
        name: " ",
        price: " ",
        image: " ",
    });
        
    return (
        <Container maxW={"container.sm"} py={4}>
            <VStack spacing={8}>
                <Heading fontWeight={"light"}>
                    Create new product
                </Heading>
                
            </VStack>
        </Container>
  )
}

export default CreatePage