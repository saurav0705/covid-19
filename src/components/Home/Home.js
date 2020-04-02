import React,{useEffect, useState} from 'react';
import {API} from '../../covid-19';
import Pie from '../Pie/Pie';
import Warning from '../Warning/Warning';
const Home = () => {
    const [global,setGlobal] = useState([]);
    const [error,setError] = useState([]);
  useEffect(()=>{
    // console.log(data['global-data']);
    fetch(API['global-data'])
      .then(resp => resp.json())
      .then(resp => {setGlobal(resp['results'][0]);console.log(resp['results'][0]);})
      .catch(err => setError("Network Error"))
  },[])
    return (<>
    {error.length ===0 ?
    <Pie data={global} name={"GLOBAL STATISTICS"}/>:<Warning warning={error}/>}</>)
}

export default Home;