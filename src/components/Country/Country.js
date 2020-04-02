import React, { useState, useEffect } from 'react';
import {API} from '../../covid-19';
import Loading from '../Loading/Loading';
import './Country.css';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import Warning from '../Warning/Warning';
const Country = () => {
    const [country,setCountry] = useState([]);
    const [error,setError] = useState([]);
    let history = useHistory();
    useEffect(()=>{
        axios.get(API['allcountry'],{headers:{'Access-Control-Allow-Origin':'*'}})
            .then(resp => resp.json())
            .then(resp => {delete resp['countryitems']['0']['stat'];setCountry(resp['countryitems']['0']);console.log(resp['countryitems']['0'])}).catch(err => setError("Network Error occured Refresh Or try again Later"))
    },[])
    const goToDetails = (code) => {
        history.push(`/code?code=${code}`)

    };

     
    return (<>
    { error.length === 0 ?<>
    {country.length ===0 ?
        <Loading/>:
        <div className="grid">
            {Object.keys(country).map(key => {return (
            <div className="grid-tile" onClick={()=>goToDetails(country[key]['code'])}>
                <div>{country[key]['title']}</div>
                <div>
                    <img src={API['map'].replace("country_code",country[key]['code'].toLowerCase())||"/flag.png"}/></div>
            </div>)})}
        
        </div>
        }</>
    : <Warning warning={error}/>}
        

        </>)
}

export default Country;