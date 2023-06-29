export const initialState = JSON.parse(window.localStorage.getItem('cart')) || []

const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state))
}

export const cartReducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action
  switch (actionType) {
    case 'ADD_TO_CART': {
      const { id } = actionPayload
      const productInCartIndex = state.findIndex(item => item.id === id)

      if (productInCartIndex >= 0) {
        const newState = structuredClone(state)
        newState[productInCartIndex].quantity += 1
        updateLocalStorage(newState)
        return newState
      }

      const newState = [...state, {
        ...action.payload,
        quantity: 1
      }]
      updateLocalStorage(newState)
      return newState
    }

    case 'REMOVE_FROM_CART': {
      const { id } = actionPayload
      const newState = state.filter(item => item.id !== id)
      updateLocalStorage(newState)
      return newState
    }

    case 'CHECK_PRODUCT_': {
      const { id } = actionPayload
      return state.some(item => item.id === id)
    }

    case 'CLEAR_CART': {
      updateLocalStorage([])
      return []
    }
  }

  return state
}
