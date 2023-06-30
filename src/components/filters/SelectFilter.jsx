import { Select } from '@chakra-ui/react'
import { useContext } from 'react'
import { FiltersContext } from '../../context/filters'

export const SelectFilter = () => {
  const { setFilters } = useContext(FiltersContext)

  const handleCategoryChange = (e) => {
    if (e.target.value === '') {
      setFilters(prevState => ({
        ...prevState,
        category: 'all'
      }))
      return
    }

    setFilters(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }

  return (
    <Select
      placeholder='All'
      w='25%'
      onChange={handleCategoryChange}
    >
      <option value='laptops'>Laptops</option>
      <option value='smartphones'>Smartphones</option>
    </Select>
  )
}
