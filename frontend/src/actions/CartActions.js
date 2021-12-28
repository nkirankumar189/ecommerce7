import axios from "axios";
import { ADD_ITEM } from "../constants/CartConstants";
export const addToCart = (id, qty) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:8080/api/products/${id}`)
            dispatch({
                type: ADD_ITEM,
                data: {
                    "_id": data._id,
                    "name": data.name,
                    "brand": data.brand,
                    "rating": data.rating,
                    "numReviews": data.numReviews,
                    "image": data.image,
                    "description": data.description,
                    "price": data.price,
                    "countInStock": data.countInstock,
                    qty
                }
            })
        } catch (err) {
            console.log(err);
        }
    }
}