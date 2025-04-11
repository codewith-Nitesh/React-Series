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

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
// default export
import Navbar from './components/Navbar';
// named export
import { ProductCard } from './components/ProductCard';

const App = () => {
    return (
        <div>
            <Navbar/>
            <ProductCard/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App/>)