import React from 'react';
import {Link} from 'react-router'
var Nav;

export default Nav = React.createClass({

  getInitialState: function() {
    return {
      show: false,
      isShowing: false,
    }
  },

  handleClick(e) {
    this.setState( { show: !this.state.show })
  },

  render() {

    return (
      <nav className="navbar navbar-light bg-faded">
        <a className="navbar-brand" href="#">
          Brand
        </a>
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" onClick={this.handleClick} to="/buttons">Buttons</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={this.handleClick} to="/type">
              Typography
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={this.handleClick} to="/forms">
              Forms
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={this.handleClick} to="/indicators">
              Indicators
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={this.handleClick} to="/containers">
              Containers
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={this.handleClick} to="/animation">
              Animation
            </Link>
          </li>
        </ul>
      </nav>

    )
  }
})