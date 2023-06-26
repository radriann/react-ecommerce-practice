import { chakra, Box, Image, Heading, Text } from '@chakra-ui/react'

export const Products = ({ products }) => {
  return (
    <chakra.main
      w='100%'
      display='flex'
      justifyContent='center'
      alignItems='center'
      gap='10px'
      flexWrap='wrap'
    >
      {products.slice(0, 10).map((product) => (
        <Box
          as='article'
          key={product.id}
        >
          <Image src={product.thumbnail} alt={product.title} />
          <Box>
            <Heading as='h3' fontSize='22px'>{product.title}</Heading>
            <Text>{product.price}</Text>
          </Box>
        </Box>
      ))}
    </chakra.main>
  )
}
