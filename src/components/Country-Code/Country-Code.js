import React, { useEffect, useState } from 'react';
import queryString from 'query-string';
import {API} from '../../covid-19';
import PieComponent from '../Pie/Pie';
import Loading from '../Loading/Loading';
import Timeline from '../Timeline/Timeline';
import Warning from '../Warning/Warning';

const Code = ({location}) => {
    const [data,setData] = useState([]);
    const [code,setCode] = useState('');
    const [info,setInfo] = useState({});
    const [error,setError] = useState([]);
    useEffect(()=>{
        let {code } = queryString.parse(location.search);
        setCode(code);
        fetch(API['country'].replace("COUNTRY_CODE",code))
        .then(resp => resp.json())
        .then(resp => {setInfo(resp['countrydata'][0]['info']);delete resp['countrydata'][0]['info'];setData(resp['countrydata'][0]);console.log(resp['countrydata'][0])})
        .catch(error => setError("Network Error Occured Refresh Or try Again Later"));

    },[])

    return (<>
    { error.length !==0 ? 
    <>
{data.length !==0 
    ?
    <><PieComponent data={data} name={`${info['title']} STATISTICS`}/><Timeline code={code}/></>:<Loading/>}
    </>:<Warning warning={error}/>}
    </>)
}

export default Code;