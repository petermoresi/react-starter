import React from 'react';
var Header;

export default Header = React.createClass({

  getInitialState: function() {
    return {
      showMenu: false
    }
  },

  handleClick(e) {
    this.setState( { showMenu: !this.state.showMenu })
  },

  render() {
    return (
      <div className="container">
        {this.props.children}
      </div>
    );
  }
});
