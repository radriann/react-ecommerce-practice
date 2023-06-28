import { Flex, Image, Text, Box, Heading, Button, Icon, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, ModalFooter } from '@chakra-ui/react'
import { FaCartArrowDown } from 'react-icons/fa'
import { useCart } from '../hooks/useCart'

const CartItem = ({ thumbnail, price, title, quantity, addToCart }) => {
  return (
    <Flex
      w='100%'
      gap='20px'
      py='1rem'
    >
      <Image w='120px' src={thumbnail} />
      <Box>
        <Heading fontSize='22px'>{title}</Heading>
        <Text>{price}</Text>
        <Text>{quantity}</Text>
        <Button onClick={addToCart}>+</Button>
      </Box>
    </Flex>
  )
}

export const Cart = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { clearCart, cart, addToCart } = useCart()

  return (
    <>
      <Button onClick={onOpen}>
        <Icon as={FaCartArrowDown} />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} overflowY='auto'>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Cart</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
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
          </ModalBody>

          <ModalFooter>
            <Button bgColor='red.600' onClick={clearCart}>Clear Cart</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

    </>
  )
}
