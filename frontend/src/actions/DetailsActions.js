import axios from "axios";
import { DETAILS_LOADING, DETAILS_LOADING_FAIL, DETAILS_LOADING_SUCCESS } from "../constants/DetailsConstants";

const DetailsActions = (id) => {
    return async (dispatch) => {
        dispatch({
            type: DETAILS_LOADING,
            loading: false,
            products: {},
            error: ""
        });
        try {
            const { data } = await axios.get(`http://localhost:8080/api/products/${id}`)
          
            dispatch({ type: DETAILS_LOADING_SUCCESS, loading: true, products: data, error: "" })
        } catch (err) {
            dispatch({ type: DETAILS_LOADING_FAIL, loading: true, products: {}, error: err.message })
        }
    }
}
export default DetailsActions;