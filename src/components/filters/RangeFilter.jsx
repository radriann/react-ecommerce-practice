import { useContext, useId } from 'react'
import { chakra } from '@chakra-ui/react'
import { FiltersContext } from '../../context/filters'

export const RangeFilter = () => {
  const { setFilters, filters } = useContext(FiltersContext)

  const minPriceFilterId = useId()

  const handleChangeMinPrice = (event) => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: event.target.value
    }))
  }

  return (
    <chakra.div>
      <chakra.label htmlFor={minPriceFilterId} mr='.5rem'>Price:</chakra.label>
      <chakra.input
        w='50%'
        id={minPriceFilterId}
        type='range'
        min='0'
        max='1000'
        onChange={handleChangeMinPrice}
        value={filters.minPrice}
        borderRadius='base'
        h='8px'
        bg='gray.200'
        appearance='none'
        outline='none'
        opacity='0.7'
        _hover={{ opacity: '1' }}
        _focus={{ boxShadow: 'outline' }}
        _disabled={{ opacity: '0.4', cursor: 'not-allowed' }}
        css={{
          '&::-webkit-slider-thumb': {
            appearance: 'none',
            width: '16px',
            height: '16px',
            borderRadius: '100%',
            background: '#5481eb',
            cursor: 'pointer'
          }
        }}
      />
      <chakra.span mx='1rem'>${filters.minPrice}</chakra.span>
    </chakra.div>
  )
}
