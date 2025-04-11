import '../index.css'

const Product = ({product}) =>{
    const {id,title,price,description,category,image,rating} = product;
    return(
         <>
         <div className='product_detail'>

        <img className='img' src={image} alt="photo" />
            <h1>{title}</h1>
            <p>{id}</p>
             <span>price : {price}</span>
             <p>{category}</p>
             <p>{rating.rate}</p>
             <p>{description}</p>
         </div>
         </> 
    )
}

export default Product