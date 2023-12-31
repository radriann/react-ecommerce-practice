import { chakra, Box, Image, Heading, Text, Button } from '@chakra-ui/react'
import { useCart } from '../../hooks/useCart'

export const Products = ({ products }) => {
  const { addToCart, removeFromCart, cart } = useCart()

  const checkProductInCart = product => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <chakra.main
      w='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      gap='2rem'
      flexWrap='wrap'
      p='1rem'
    >
      {products.slice(0, 10).map(product => {
        const isProductInCart = checkProductInCart(product)
        return (
          <Box
            as='article'
            key={product.id}
            w='350px'
            bgColor='blue.800'
            p='1rem'
            borderRadius='10px'
            h='fit-content'
          >
            <Image mx='auto' w='320px' borderRadius='12px' src={product.thumbnail} alt={product.title} />
            <Box mt='1rem' px='.8rem'>
              <Heading as='h3' fontSize='25px'>{product.title}</Heading>
              <Text>Price: {product.price}$</Text>
              <Button
                color='white'
                mt='1rem'
                bgColor={isProductInCart ? 'red.600' : 'green.400'}
                onClick={() => {
                  isProductInCart
                    ? removeFromCart(product)
                    : addToCart(product)
                }}
              >
                {
                isProductInCart
                  ? 'Delete'
                  : 'Buy'
              }
              </Button>
            </Box>
          </Box>
        )
      })}
    </chakra.main>
  )
}
