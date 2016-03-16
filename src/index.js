import React from 'react'
import { render } from 'react-dom'

import { Router, Route, Link, IndexRoute } from 'react-router'
import { browserHistory } from 'react-router'

import Layout from './components/Layout'
import Intro from './components/Intro';
import PageNotFound from './components/PageNotFound';

require('../scss/app.scss')

function handleUpdate(){
  window.prerenderReady = true;
}
// Finally, we render a <Router> with some <Route>s.
// It does all the fancy routing stuff for us.
render((
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Intro} />
      <Route path="*" component={PageNotFound} />
    </Route>
  </Router>
), document.getElementById('root'))
