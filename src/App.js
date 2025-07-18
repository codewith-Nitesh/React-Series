//  {
// // <div id='container'>
// //     <h1>I am heading one</h1>
// //     <h2>i am heading 2</h2>
// // </div>
// }

// // const containerDiv = React.createElement('div',{id:'container'},
// // [
// //     React.createElement('h1',{},'i am heading 1'),
// //     React.createElement('h2',{},'i am heading 2')
// // ]
// // );
// // const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(containerDiv);
// const container = React.createElement('div',{className:'Parent'},
//     [React.createElement('div',{className:'child1'},'this is child1')],
//     [React.createElement('div',{className:'child2'},'this is child2')]
// );
// //JSX -> it allows you to write html code inside javascript file
// // JSX -> jsx structure is like JSX|HTML

// const age = 21;
// const jsxHeading = (
// <h1  id="h1">i am heading from JSX</h1>,
// <div className='myclass'>
//     <p id="heading">hy my name is nitesh and my age is {age}</p>
// </div>,
// // to attach javascript code inside JSX use {} curly braces
// {age}
// )

// // browser doesnot understand JSX and so for this situation Babel is used
// // Babel -> transpilation JSX -> convert it into React Element
// // Babel -> a modern javascript compiler
// // JSX is a different thing
// // class based component -> old way of writing react code
// // functional components -> new way to write code

// const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(jsxHeading)

// //components
// // components is nothing its just a normal javascript function
// // component are always render in angular bracket <component/>
// // nested component in which you can use one component into another component using the </> angular bracket
// // you can also call it by {heading()}
// const heading = () =>{
//     return <h1 id="heading">{age}</h1>
// }

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// default export
import Navbar from "./components/Navbar";
// named export
import { ProductCard } from "./components/ProductCard";
import Kid from "./components/Kid";
import Men from "./components/Men";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import Women from "./components/Women";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import { store } from "./store/store";
import FormValidation from "./components/FormValidation";
import ZodValidation from "./components/ZodValidation";
//import About from "./components/About";

// import Grocery from "./components/Grocery";  normal import na krke hm ese laze me dalenge
// lazy is used for making multiple bundlers of application
// variable and the name of component should be same
// in lazy loading we use arrow function with direct return

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </Provider>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
    children: [
      {
        path: "/",
        element: (
          <div>
            <ProductCard />
          </div>
        ),
      },
      {
        path: "/kid",
        element: (
          <div>
            <Kid />
          </div>
        ),
      },
      {
        path: "/About",
        element: (
          <div>
            <Suspense fallback={<h1>loading...</h1>}>
              <About />
            </Suspense>
          </div>
        ),
      },
      {
        path: "/men",
        element: (
          <div>
            <Men />
          </div>
        ),
      },
      {
        path: "/women",
        element: (
          <div>
            <Women />
          </div>
        ),
      },
      {
        path: "/grocery",
        element: (
          <div>
            <Suspense fallback={<h1>loading...</h1>}>
              <Grocery />
            </Suspense>
          </div>
        ),
      },
      {
        path: "/product/:id",
        element: (
          <div>
            <ProductDetail />
          </div>
        ),
      },
      {
        path: "/cart",
        element: (
          <div>
            <Cart />
          </div>
        ),
      },
      {
        path: "form",
        element: (
          <div>
            <FormValidation />
          </div>
        ),
      },
       {
        path: "zod",
        element: (
          <div>
            <ZodValidation/>
          </div>
        ),
      },
    ],
  },
  {
    path: "*",
    element: (
      <div>
        <Error />
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
