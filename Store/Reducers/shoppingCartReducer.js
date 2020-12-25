const initialState = { 
    items: []
}

const shoppingCartReducer = (state = initialState, action) => {
    let nextState
    switch(action.type) {
        case 'TOGGLE_ITEM':
            const itemIndex = state.items.findIndex(item => item.id === action.value.id)
            if (itemIndex !== -1) {
                nextState = {
                    ...state,
                    items: state.items.filter(item => item.id !== action.value.id)
                }
            } else {
                nextState = {
                    ...state,
                    items: [ ...state.items, action.value]
                }
            }
            return nextState || state
        default:
            return state
    }
}

export default shoppingCartReducer