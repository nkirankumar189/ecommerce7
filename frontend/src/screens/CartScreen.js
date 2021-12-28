import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../actions/CartActions";
function CartScreen(props) {
  //routin paarameter
  const id = props.match.params.id;
  //query parameter
  const qty = props.location.search ? Number(props.location.search.split("=")[1]) : 1;
  const dispatch = useDispatch();
  const result = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(addToCart(id, qty));
  }, []);

  return (
    <React.Fragment>
      <h1>{JSON.stringify(result)}</h1>
    </React.Fragment>
  )
}
export default CartScreen;