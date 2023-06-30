import { Flex } from '@chakra-ui/react'
import { RangeFilter } from './RangeFilter'
import { SelectFilter } from './SelectFilter'

export const Filters = () => {
  return (
    <Flex
      as='section'
      w='80%'
      mx='auto'
      my='3rem'
      align={{ base: 'left', md: 'center' }}
      justify='space-between'
      direction={{ base: 'column', md: 'row' }}
      gridGap={{ base: '1rem', md: '0' }}
    >
      <RangeFilter />
      <SelectFilter />
    </Flex>
  )
}
