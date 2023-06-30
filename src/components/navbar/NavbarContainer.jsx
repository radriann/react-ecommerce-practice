import { chakra, Box, Heading } from '@chakra-ui/react'
import { Cart } from '../cart/Cart'

export const NavbarContainer = () => {
  return (
    <chakra.header
      w='100%'
      mx='auto'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      py='2rem'
      px={{ base: '1rem', md: '2rem' }}
      bg='blue.800'
    >
      <Box>
        <Heading fontSize={{ base: '22px', md: '28px' }}>
          <chakra.span color='blue.500'>
            React {' '}
          </chakra.span>
          Ecommerce
        </Heading>
      </Box>

      <Cart />

    </chakra.header>
  )
}
