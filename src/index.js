import Nums from './data/numbers';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HelloWorld from './HelloWorld';
import Heading from './heading';
import App from './beverages';
import NumberMapsAndFilters from './NumberMapsAndFilters';
import FoodData from './data/FoodFilter';
import DATA from './data/food';
import UserData from './data/users';
import Gravatars from './Gravatars';
var namesDATA;


ReactDOM.render(
  <div>
    <Heading name = "Tyler"/>
    <NumberMapsAndFilters numbers = {nums} greeting = "Hello"/>
    <HelloWorld anyThingWeWant={ ["Ty", "Carl", "Katie", "Pete", "Max"] } />
    <FoodFilter data = {FoodData}/>
    <Gravatars data ={UserData}/>
    <Beverage />
    <SomeNewCompoenet />
  </div>,

  document.getElementById('root')
);
