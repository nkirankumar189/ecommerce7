import {
    DETAILS_LOADING,
    DETAILS_LOADING_FAIL,
    DETAILS_LOADING_SUCCESS
} from "../constants/DetailsConstants";


const intialState = {
    loading: false,
    products: {},
    error: ""
}

export function DetailsReducers(state = intialState, action) {
  
    switch (action.type) {
        case DETAILS_LOADING:
        case DETAILS_LOADING_SUCCESS:
        case DETAILS_LOADING_FAIL:
            return {
                ...state,
                loading: action.loading,
                products: action.products,
                error: action.error
            }
        default:
            return state;

    }
}