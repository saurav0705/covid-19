import React,{useEffect, useState} from 'react';
import {API} from '../../covid-19';
import Pie from '../Pie/Pie';
const Home = () => {
    const [global,setGlobal] = useState([]);
  useEffect(()=>{
    // console.log(data['global-data']);
    fetch(API['global-data'])
      .then(resp => resp.json())
      .then(resp => {setGlobal(resp['results'][0]);console.log(resp['results'][0]);})
  },[])
    return (<Pie data={global} name={"GLOBAL STATISTICS"}/>)
}

export default Home;