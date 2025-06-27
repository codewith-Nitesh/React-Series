import Product, { HOF } from "./Product";
import "../index.css";
// import { productData } from "../utils/Constant"
import Skeleton from "./Skeleton";
import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
// named export
export const ProductCard = () => {
  const [listOfProduct, setListOfProduct] = useState([]);
  const [skeleton, setSkeleton] = useState(true);
  const [searchName, setSearchName] = useState("");
  const [tempFilterProduct, setTempFilterProduct] = useState([]);

  const search = () => {
    const filterData = tempFilterProduct.filter((product) => {
      return product.title.toLowerCase().includes(searchName.toLowerCase());
    });
    setListOfProduct(filterData);
  };

  useEffect(() => {
    dataFetch();
    let interval = setInterval(() => {
      console.log("Nitesh");
    }, 1000);
    // way to clean up setInterval in useEffect
    return () => {
      clearInterval(interval);
    };
  }, []);

  async function dataFetch() {
    setTimeout(async () => {
      try {
        let fetchData = await fetch("https://fakestoreapi.com/products");
        let data = await fetchData.json();
        console.log(data);
        setListOfProduct(data);
        setTempFilterProduct(data);
        setSkeleton(false);
      } catch (error) {
        console.log(error.message);
      }
    }, 500);
  }

  //conditional Rendering
  if (skeleton) {
    return <Skeleton />;
  }

  // if(listOfProduct.length === 0){
  //     return(
  //         <Skeleton/>
  //     )
  // }

  const HOFComponent = HOF(Product); // this HOF is a higher order component

  return (
    <div className="product">
      <div>
        <div className="search_container">
          <input
            type="text"
            className="searchbar"
            placeholder="search any item"
            onChange={(e) => setSearchName(e.target.value)}
            value={searchName}
            onKeyDown={(e) => {
              console.log("key down triggered");
              console.log("Key pressed: ", e.key);
              if (e.key === "Enter") {
                search();
              }
            }}
          />
          <button className="search" onClick={search}>
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredProduct = tempFilterProduct.filter(
              (product) =>
                product.rating.rate > 4.0 && product.rating.count > 200
            ); // array destructuring
            setListOfProduct(filteredProduct);
            console.log("top rated");
          }}
          className="filter_button"
        >
          Top Rated Product
        </button>
      </div>
      {/* <Product data={productData[0]}/>
            <Product data={productData[1]}/> */}

      <div className="main_parent_container">
        <div
          className="child_parent_container"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {listOfProduct.map((productdata) => {
            return (
              <NavLink
                key={productdata.id}
                to={`/product/${productdata.id}`}
                className={({ isActive }) => (isActive ? "active_link" : "")}
              >
                {productdata.rating.rate >= 4 ? (
                  <HOFComponent product={productdata} />
                ) : (
                  <Product product={productdata} />
                )}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* <Product title="Shoes" brand="puma" price="350" img="https://m.media-amazon.com/images/I/61bKXOXJvGL._AC_UY1000_.jpg"/>
            <Product title="Hat" brand="Polo" price="250" img="https://m.media-amazon.com/images/I/51ZL+pCxirL._AC_UY1100_.jpg"/>
            <Product title="Nicker" brand="Rebook" price="500" img="https://images.meesho.com/images/products/203632715/syqoj_512.webp"/> */}
      {/* <Product/>
            <Product/>
            <Product/>
            <Product/> */}
    </div>
  );
};

export default ProductCard;
