import Product from "./Product"
import '../index.css'
import { productData } from "../utils/Constant"

// named export
export const ProductCard = () =>{
    return(
        <div className='product'> 
            {/* <Product data={productData[0]}/>
            <Product data={productData[1]}/> */}
            {
                productData.map((productdata) => {
                    return(
                        <Product key={productdata.id} product={productdata}/>
                    )
                })
            }
            {/* <Product title="Shoes" brand="puma" price="350" img="https://m.media-amazon.com/images/I/61bKXOXJvGL._AC_UY1000_.jpg"/>
            <Product title="Hat" brand="Polo" price="250" img="https://m.media-amazon.com/images/I/51ZL+pCxirL._AC_UY1100_.jpg"/>
            <Product title="Nicker" brand="Rebook" price="500" img="https://images.meesho.com/images/products/203632715/syqoj_512.webp"/> */}
            {/* <Product/>
            <Product/>
            <Product/>
            <Product/> */}
        </div>
    )
}


// export default ProductCard