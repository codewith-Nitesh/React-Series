import React from "react";

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "./Skeleton";
import useGetSingleProduct from "../hook/useGetSingleProduct";
import { useDispatch } from "react-redux";
import { addTocart } from "../store/counterSlice";
import { removeFromcart } from "../store/counterSlice";
import { clearCartItem } from "../store/counterSlice";

const ProductDetail = () => {
  // const [data, setData] = useState([]);

  //const { id } = useParams();

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   try {
  //     const data = await fetch(`https://fakestoreapi.com/products/${id}`);
  //     const dataFetch = await data.json();
  //     setData(dataFetch);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const dispatch = useDispatch()

  const { id } = useParams();

  const singleProduct = useGetSingleProduct(id)

  if(singleProduct === null){
    return(
      <Skeleton/>
    )
  }

  const handleCart = () =>{
      dispatch(addTocart(singleProduct))
  }

  return (
    <div className="single_product_detail">
      <img className="img" src={singleProduct.image} alt="photo" />
      <h1>{singleProduct.title}</h1>
      <p>{singleProduct.id}</p>
      <span>price : {singleProduct.price}</span>
      <p>{singleProduct.category}</p>
      <p>{singleProduct.rating.rate}</p>
      <p>{singleProduct.description}</p>
         <div  className="add_to_cart">
          <button
            style={{
              padding: "1rem",
              border: "1px solid black",
              fontWeight: "bold",
              borderRadius: "0.3rem",
              backgroundColor: "gray",
              margin: "0.3rem",
            }}
            onClick={handleCart}
          >
            Add To Cart
          </button>
        </div>
    </div>
  );
};

export default ProductDetail;
