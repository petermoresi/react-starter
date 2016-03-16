/**
* Copyright (c) 2015, Peter W Moresi
*/

import React from 'react';
import Header from './Header';

const Layout = React.createClass({
  render() {
    return (
      <div id="main">
        <Header />
        {this.props.children}
      </div>
    )
  }
})

/* Write some great components about what data
* this application displays and how it needs to be
* organized.
*/
export default Layout
