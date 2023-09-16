// without using JSX
// Using method createElement(tag,prop,children)
import React from "react";
import ReactDOM from 'react-dom/client';
const withoutJsx = React.createElement('h1', {}, 'I do not use JSX!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(withoutJsx);
export default withoutJsx;