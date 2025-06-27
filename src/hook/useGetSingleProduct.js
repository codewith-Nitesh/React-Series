import React from 'react'
import {useState, useEffect} from 'react'

const useGetSingleProduct = (id) => {
    const[singleProduct, setSingleProduct] = useState(null)

    useEffect(()=>{
        fetchSingleProduct()
    },[])

    const fetchSingleProduct =async ()=>{
    let apiData = await fetch(`https://fakestoreapi.com/products/${id}`)
    let jsonData = await apiData.json();
    setSingleProduct(jsonData)
    }
  return (
    singleProduct
  )
}

export default useGetSingleProduct
