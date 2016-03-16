import React from 'react';
var IntroPage;

export default IntroPage = React.createClass({
  getInitialState: function() {
    return {
      count: 0
    }
  },

  componentDidMount() {
    setInterval( function() {
      this.setState( { count: (this.state.count+1) } );
    }.bind(this), 1000);
  },

  render() {
    return (
      <div className="main">
        {this.state.count} seconds.
      </div>
    );
  }
});
