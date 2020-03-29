import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import {API} from '../../covid-19';
import PieComponent from '../Pie/Pie';
import Loading from '../Loading/Loading';

const Code = ({location}) => {
    const [data,setData] = useState([]);
    const [code,setCode] = useState('');
    const [info,setInfo] = useState({});
    useEffect(()=>{
        let {code } = queryString.parse(location.search);
        setCode(code);
        fetch(API['country'].replace("COUNTRY_CODE",code))
        .then(resp => resp.json())
        .then(resp => {setInfo(resp['countrydata'][0]['info']);delete resp['countrydata'][0]['info'];setData(resp['countrydata'][0]);console.log(resp['countrydata'][0])})

    },[])

    return (<>
{data.length !==0 
    ?
    <PieComponent data={data} name={`${info['title']} STATISTICS`}/>:<Loading/>}
    </>)
}

export default Code;