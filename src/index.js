//import takes place of requires
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import Heading from './heading'

var names = ["Ty", "Carl", "Katie", "Pete", "Max"];

ReactDOM.render(
  <div>
    <Heading />
    <HelloWorld names={names} />,
  </div>,
  document.getElementById('root')
);
