import React from 'react';


var NumberMapsAndFilters = React.createClass({

  }
  render: function() {
    var newNumbers = this.props.numbers.filter(function (item) {
      item > 10;
    }).map(function (item) {
      return (<li>{item}</li>)
    });
    return (
      <div>
        <h1>Hello, {this.props.greeting}  Number mapping and filtering!!</h1>
        <ul>
          {newNumbers}
        </ul>
      </div>
    )
  }
})

export default NumberMapsAndFilters;
