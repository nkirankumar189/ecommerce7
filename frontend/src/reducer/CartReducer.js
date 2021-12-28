import { ADD_ITEM } from "../constants/CartConstants";

const initialState = {
    cartItems: []
}
export const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
            const item = action.data;
            const existedItem = state.cartItems.find((element) => {
                return element._id == item._id
            })
            if (existedItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((element) => {
                        return element._id == item._id ? item : element
                    })
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        default:
            return state;
    }
}