import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Country from './components/Country/Country';
import Code from './components/Country-Code/Country-Code';
import Timeline from './components/Timeline/Timeline';
import Landing from './components/Landing/Landing';
import About from './components/About/About';

function App() {


  return (<>
    <div className="bottom">
    
    </div>
    <Router>
    <Header/>
    <Route exact path="/about" component={About}/>
    <Route exact path="/" component={Landing}/>
    <Route exact path="/code" component={Code}/>
    <Route exact path="/global" component={Home}/>
    <Route exact path="/country" component={Country}/>
    </Router>
    </>
  );
}

export default App;
