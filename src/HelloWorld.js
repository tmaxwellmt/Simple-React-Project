import React from 'react';

//stateless component - display only
function ListItem(props) {
  return (
    <li> {props.name}</li>
  )
}
//stateful component
var HelloWorld = React.createClass({
  makeList: function () {
    var nameList = this.props.anyThingWeWant.map(function (item) {
      return (<ListItem name={item} />);
    });
    return nameList;
  },
  render: function () {
    return (
      <div>
        <ul>
          {this.makeList()}
        </ul>
      </div>
    )
  }
})

export default HelloWorld;
