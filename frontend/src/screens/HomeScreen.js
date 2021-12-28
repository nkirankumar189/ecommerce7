import React,{ useEffect } from "react";


//import following hooks
//useSelector
//useDispatch
//useSelector hook used to subscribe the result
//useDispatch hook used to perform the dispatch operation
import { useDispatch,useSelector } from "react-redux";

//import ProductsAction
import { productactions } from "../actions/productactions";

//LoadingBox
import Loading  from "../components/loading";

//import MessageBox
import MessageBox from "../components/MessageBox";


import Products from "../components/products";


function HomeScreen(){
    const result = useSelector(state=>state.products);
    const {loading,products,error} = result;
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(productactions());
    },[]);
    return(
        <React.Fragment>
           {!loading?(<Loading></Loading>):error==="Network Error"?(<MessageBox variant="danger">{error}</MessageBox>):(
                <Products products={products}></Products>
               
           )}
        </React.Fragment>
    )
};

export default HomeScreen;