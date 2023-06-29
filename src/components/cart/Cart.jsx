import { useRef } from 'react'
import { Flex, Button, IconButton, Drawer, DrawerBody, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure } from '@chakra-ui/react'
import { CartItem } from './CartItem'
import { FaCartArrowDown } from 'react-icons/fa'
import { useCart } from '../../hooks/useCart'

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { cart, addToCart, clearCart } = useCart()
  const btnRef = useRef(null)

  return (
    <>
      <IconButton
        ref={btnRef}
        onClick={onOpen}
        icon={<FaCartArrowDown />}
        aria-label='open cart'
      />

      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={btnRef}
        placement='right'
        size='md'
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <Flex
              direction='column'
              align='center'
              justify='center'
            >
              {cart.map(product => (
                <CartItem
                  key={product.id}
                  addToCart={() => addToCart(product)}
                  {...product}
                />
              ))}
            </Flex>
          </DrawerBody>

          <DrawerFooter>
            <Button bgColor='red.600' onClick={clearCart}>Clear Cart</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}
