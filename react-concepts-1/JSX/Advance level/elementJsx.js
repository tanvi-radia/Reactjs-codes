// Code using JSX 
import React from "react";
import ReactDOM from 'react-dom/client';

// Printing in jsx
// html content between tags
// const elementJsx = <h1>HTML using JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(elementJsx);
// export default elementJsx;

// Expressions in jsx
// written inside {} braces
// const elementJsx = <h1>React is {5 + 5} times with JSX</h1>
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(elementJsx);
// export default elementJsx;

// Large content of html
// written inside parentheses
const elementJsx = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(elementJsx);
export default elementJsx;