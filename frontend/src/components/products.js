import React from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
function Products(props) {
    return (
        <React.Fragment>
            <div className="row center">
                {props.products.map((prod) => (
                    <div className="card" key={prod._id}>
                        <Link to={`/details/${prod._id}`}>
                            <img src={prod.image} className="medium"></img>
                        </Link>
                        <div className="card-body">
                            <Link to={`/details/${prod._id}`}>
                                <h2>{prod.name}</h2>
                            </Link>
                            <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                            <div className="price">
                                Price $ {prod.price}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </React.Fragment>
    )
}
export default Products;