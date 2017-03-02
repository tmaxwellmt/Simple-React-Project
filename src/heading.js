import React from 'react';
import {Jumbotron} from 'react-bootstrap';

//stateless componenet (dumb)
var Heading = function (props) {
  return (
    <Jumbotron>
      <h1> {props.name} am Awesome</h1>
    </Jumbotron>
  )};

export default Heading;

// Smart Component
//var SmartComp = React.createClass({
//  loadData(){
//
//  },
//  render() {
//    return ()
    // has to return something.
//  }
// });
