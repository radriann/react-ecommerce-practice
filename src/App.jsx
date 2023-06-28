import { chakra } from '@chakra-ui/react'
import { NavbarContainer } from './components/navbar/NavbarContainer'
import { Products } from './components/products/Products'
import { Filters } from './components/filters/Filters'
import { products as initialProducts } from './mocks/products.json'
import { useFilters } from './hooks/useFilters'
import { CartContextProvider } from './context/cart'

function App () {
  const { filterProducts } = useFilters()
  const filteredProducts = filterProducts(initialProducts)

  return (
    <chakra.main
      maxW='100vw'
      minH='100vh'
    >
      <CartContextProvider>
        <NavbarContainer />
        <Filters />
        <Products products={filteredProducts} />
      </CartContextProvider>
    </chakra.main>
  )
}

export default App
