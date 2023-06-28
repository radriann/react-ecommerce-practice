import { chakra, Box, Image, Heading, Text, Button } from '@chakra-ui/react'
import { useCart } from '../../hooks/useCart'

export const Products = ({ products }) => {
  const { addToCart } = useCart()

  return (
    <chakra.main
      w='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      gap='2rem'
      flexWrap='wrap'
    >
      {products.slice(0, 10).map((product) => (
        <Box
          as='article'
          key={product.id}
          w='320px'
          bgColor='blue.500'
          p='1rem'
          borderRadius='10px'
          h='fit-content'
        >
          <Image w='320px' src={product.thumbnail} alt={product.title} />
          <Box mt='1rem'>
            <Heading as='h3' fontSize='22px'>{product.title}</Heading>
            <Text>{product.price}</Text>
            <Button colorScheme='pink' mt='1rem' onClick={() => addToCart(product)}>Buy</Button>
          </Box>
        </Box>
      ))}
    </chakra.main>
  )
}
