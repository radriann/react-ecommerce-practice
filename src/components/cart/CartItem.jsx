import { Flex, Button, Image, Text, Box, Heading } from '@chakra-ui/react'

export const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <Flex
      w='100%'
      gap='20px'
      py='1rem'
      bgColor='gray.600'
      px='1rem'
      borderRadius='6px'
      my='1rem'
    >
      <Image w='120px' src={thumbnail} />
      <Box>
        <Heading fontSize='22px'>{title}</Heading>
        <Text>Price: {price}</Text>
        <Text>Quantity: {quantity}</Text>
        <Button mt='.5rem' h='30px' onClick={addToCart}>+</Button>
      </Box>
    </Flex>
  )
}
