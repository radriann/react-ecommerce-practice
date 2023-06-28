import { chakra, Box, Heading } from '@chakra-ui/react'
import { Cart } from '../Cart'

export const NavbarContainer = () => {
  return (
    <chakra.header
      w='90%'
      mx='auto'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
      py='2rem'
    >
      <Box>
        <Heading fontSize='28px'>
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
