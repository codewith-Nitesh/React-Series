import "../index.css";

const Product = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;
  return (
    <>
      <div className="product_detail ">
        <img className="img" src={image} alt="photo" />
        <h1>{title}</h1>
        <p>{id}</p>
        <span>price : {price}</span>
        <p>{category}</p>
        <p>{rating.rate}</p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default Product;

// higher order component is a function which takes input component as a parameter and return new component after modification

export const HOF = (Product) => {
  return (props) => {
    return (
      <>
        <span className="higher_order">Trending</span>
        <Product {...props} />
      </>
    );
  };
};

// const Component = HOF(Product);
// <Component product={Product}/>
