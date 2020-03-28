import React,{useEffect, useState} from 'react';
import {API} from './covid-19';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Pie from './components/Pie/Pie';
import Header from './components/Header/Header';

function App() {
  const [global,setGlobal] = useState([]);
  useEffect(()=>{
    // console.log(data['global-data']);
    fetch(API['global-data'])
      .then(resp => resp.json())
      .then(resp => {setGlobal(resp['results'][0]);console.log(resp['results'][0]);})
  },[])


  return (<>
    <Header/>
    <Router>
      <Route exact path="/">
    <Pie data={global} name={"GLOBAL STATISTICS"}/>
    </Route>
    </Router>
    </>
  );
}

export default App;
