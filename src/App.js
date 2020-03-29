import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Country from './components/Country/Country';
import Code from './components/Country-Code/Country-Code';

function App() {


  return (<>
    <div className="bottom">
    
    </div>
    <Router>
    <Header/>
    <Route exact path="/" component={Home}/>
    <Route exact path="/code" component={Code}/>
    <Route exact path="/country" component={Country}/>
    </Router>
    </>
  );
}

export default App;
