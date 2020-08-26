import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Dashboard from './components/Dashboard';

function Root() {
  return(
    <Router>
      <Route exact path="/" component={Dashboard} />
    </Router>
  )
}

export default Root;