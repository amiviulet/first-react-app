import React from 'react';
import ReactDOM from 'react-dom';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";




function App() {
    return <React.Fragment>
        <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/about" component={About}/>
          <Route exact path="/contact" component={Contact}/>
        </Switch>
        </Router>
    </React.Fragment>
}
ReactDOM.render(<App />, document.getElementById('root'));

