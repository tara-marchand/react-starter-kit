var React = require('react');

var VeryFirstDiv = React.createClass ({
  render: function() {
    return (
      <div className="veryFirstDiv">
        <span>Lovely! Here it is - my very first React component!</span>
      </div>
    );
  }
});

module.exports = VeryFirstDiv;
