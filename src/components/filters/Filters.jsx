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
      align='center'
      justify='space-between'
    >
      <RangeFilter />
      <SelectFilter />
    </Flex>
  )
}
