import { useContext, useState } from 'react'
import {
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  Box,
  Text
} from '@chakra-ui/react'
import { FiltersContext } from '../../context/filters'

export const RangeFilter = () => {
  const { setFilters } = useContext(FiltersContext)
  const [rangeValue, setRangeValue] = useState([120, 230])

  const handleRangeChange = (val) => {
    setRangeValue(val)
    setFilters(prevState => ({
      ...prevState,
      minPrice: val[0]
    }))
  }

  return (
    <Box
      w='50%'
      display='flex'
      gap='20px'
    >
      <RangeSlider
        defaultValue={[120, 230]}
        min={0}
        max={1000}
        step={30}
        onChangeEnd={handleRangeChange}
      >
        <RangeSliderTrack bg='red.100'>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb boxSize={6} index={0} />
        <RangeSliderThumb boxSize={6} index={1} />
      </RangeSlider>
      <Text w='30%'>{rangeValue[0]}$ - {rangeValue[1]}$</Text>
    </Box>
  )
}
