import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailsActions from "../actions/DetailsActions";
import Loading from "../components/loading";
import MessageBox from "../components/MessageBox";
import { NavLink } from "react-router-dom";
import Rating from "../components/Rating";


function DetailsScreen(props) {
    const [qty, setQty] = useState(1);
    const id = props.match.params.id;
    const result = useSelector(state => state.details);
    const { loading, products, error } = result;

    // console.log(result)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(DetailsActions(id))
    }, []);
    const addToCartHandler=()=>{
        props.history.push(`/cart/${id}?qty=${qty}`);
    }
    return (
        <React.Fragment>
            {!loading ? <Loading></Loading> : error === "Network Error" ? <MessageBox variant="danger">{error}</MessageBox> : (<div>
                <NavLink to="/" exact={true} strict><i className="fa fa-home" style={{ color: "gray" }}></i></NavLink>
                <div className="row top">
                    <div className="col-2">
                        {/* <img src={products.image} className="large" alt={products.name}></img> */}
       <img src={products.image} />
           </div>
                   
         <div className="col-1">
          <ul>
                            <li>
                                <h1>{products.name}</h1>
                            </li>
                            <li>
                                <Rating rating={products.rating} numReviews={products.numReviews}></Rating>
                            </li>
                            <li>
                                Price: ${products.price}
                            </li>
                            <li>
                                {products.description}
                            </li>
                        </ul>
                    </div>
                    <div className="col-1">
                        <div className="card card-body">
                            <ul>
                                <li>
                                    <div className="row">
                                        <div>Name</div>
                                        <div>{products.name}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div>Price</div>
                                        <div className="price">$ {products.price}</div>
                                    </div>
                                </li>

                                <li>
                                    <div className="row">
                                        <div>Status</div>
                                        <div>{products.countInStock > 0 ? (<div className="success">In Stock</div>) : (<div className="danger">Out Of Stock</div>)}</div>
                                    </div>
                                </li>
                                {products.countInStock > 0 && (<>
                                    <li>
                                        <div className="row">
                                            <div>Qty</div>
                                            <select value={qty}
                                                onChange={(e) => { setQty(e.target.value) }}>
                                                {[...Array(products.countInStock).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>
                                                            {x + 1}
                                                        </option>
                                                    )
                                                )}

                                            </select>
                                        </div>
                                    </li>

                                    <li>
                                        <button onClick={addToCartHandler} className="primary block">addToCart</button>
                                    </li>
                                </>)}
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <h1>{JSON.stringify(product)}</h1> */}
            </div>)}
        </React.Fragment>
    )
}

export default DetailsScreen;