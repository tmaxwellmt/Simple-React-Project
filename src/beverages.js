import React from 'react';
import {Jumbotron} from 'react-bootstrap';

var Home = function (props) {
  return (
    <div>
      <Jumbotron>
        <h1> {props.title} </h1>
        <h2>we have {props.number} </h2>
      </Jumbotron>
    </div>
  );
}

var App = React.createClass({
  getInitialState: function () {
    return (
      {
        filterVal: null
      }
    )
  },
  onChangeHandler: function (value) {
    console.log(value);
    this.setState({filterVal: value});
  },
  filteredBevs: function () {
    var self = this;
    console.log(this.state.filterVal);
    return this.props.beverages.filter(function (item) {
      if(self.state.filterVal === null) return true;
      return item.category === self.state.filterVal;
    });
  },
  render: function () {
    return (
      <div>
        <Home title={"Look at all these Beverages"} yesr={2017} number={this.props.beverages.length} />
        <BeverageList onChangeHandler={this.onChangeHandler} beverages={this.filteredBevs()} />
      </div>
    )
  }
});

var BeverageList = function (props) {
  var bevList = props.beverages.map(function (item) {
      return (<li>{item.name} {item.price}</li>);
  })
  return (
    <div>
      <h2>All the Beverages</h2>
        <ul>
          {bevList}
        </ul>
        <form>
          <select onChange={(event) => props.onChangeHandler(event.target.value)} >
            <option name="sports drink">sports drink</option>
            <option value="caffeinated">caffeinated</option>
            <option value="alcoholic">alcoholic</option>
            <option value="juice">juice</option>
          </select>
        </form>
    </div>
    )
  };


export default App;
