import React, { useState, useEffect } from 'react';
import {API} from '../../covid-19';
import Loading from '../Loading/Loading';
import './Country.css';
import { useHistory } from "react-router-dom";
const Country = () => {
    const [country,setCountry] = useState([]);
    let history = useHistory();
    useEffect(()=>{
        fetch(API['allcountry'])
            .then(resp => resp.json())
            .then(resp => {delete resp['countryitems']['0']['stat'];setCountry(resp['countryitems']['0']);console.log(resp['countryitems']['0'])})
    },[])
    const goToDetails = (code) => {
        history.push(`/code?code=${code}`)

    };

     
    return (<>
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
        }

        </>)
}

export default Country;