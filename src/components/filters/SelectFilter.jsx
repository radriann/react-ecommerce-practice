import { Select } from '@chakra-ui/react'
import { useContext } from 'react'
import { FiltersContext } from '../../context/filters'

export const SelectFilter = () => {
  const { setFilters } = useContext(FiltersContext)

  const handleCategoryChange = (e) => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <Select
      placeholder='Select...'
      w='30%'
      onChange={handleCategoryChange}
    >
      <option value='all'>All</option>
      <option value='laptops'>Laptops</option>
      <option value='smartphones'>Smartphones</option>
    </Select>
  )
}
