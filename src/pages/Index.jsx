import { Box, Container, VStack, Text, Heading, SimpleGrid, Image, Link, Flex, Input } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Smartphone",
    image: "/images/smartphone.jpg",
    description: "Latest model with advanced features",
  },
  {
    id: 2,
    name: "Laptop",
    image: "/images/laptop.jpg",
    description: "High performance laptop for professionals",
  },
  {
    id: 3,
    name: "Headphones",
    image: "/images/headphones.jpg",
    description: "Noise-cancelling over-ear headphones",
  },
];

const [searchQuery, setSearchQuery] = useState("");
const [filteredProducts, setFilteredProducts] = useState(products);

useEffect(() => {
  setFilteredProducts(
    products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );
}, [searchQuery]);

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="gray.800" color="white" p={4} justifyContent="space-between" alignItems="center">
        <Heading size="md">ElectroShop</Heading>
        <Flex>
          <Link as={RouterLink} to="/" p={2} mx={2}>Home</Link>
          <Link as={RouterLink} to="/products" p={2} mx={2}>Products</Link>
          <Link as={RouterLink} to="/about" p={2} mx={2}>About Us</Link>
          <Link as={RouterLink} to="/contact" p={2} mx={2}>Contact</Link>
        </Flex>
      </Flex>
      <VStack spacing={8} mt={8}>
        <Heading as="h1" size="2xl">Welcome to ElectroShop</Heading>
        <Text fontSize="lg" textAlign="center">Your one-stop shop for the latest electronics</Text>
        <Input
          placeholder="Search for products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          mb={8}
        />
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={8}>
          {filteredProducts.map((product) => (
            <Box key={product.id} borderWidth="1px" borderRadius="lg" overflow="hidden">
              <Image src={product.image} alt={product.name} />
              <Box p={6}>
                <Heading size="md">{product.name}</Heading>
                <Text mt={4}>{product.description}</Text>
              </Box>
            </Box>
          ))}
        </SimpleGrid>
      </VStack>
    </Container>
  );
};

export default Index;