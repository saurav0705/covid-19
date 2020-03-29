import React from 'react';
import {description,prevention,symptoms} from '../../covid-19';

import './Landing.css';
const Landing = () => {

    return(<div className="landing-container">
        <h1 className="landing-heading" align="center">
            <img src="/covid.png" className="landing-image" height="50px"/>
            Cornovirus AKA COVID-19</h1>
            
        <div className="description">{description}</div>
        <div className="content-container">
        <h3 className="content-heading">Preventions</h3>
        <div className="point-container">
        {prevention.map(point => <div className="point">{point}</div>)}
        </div>
        </div>
        <div className="content-container">
        <h3 className="content-heading">Symptons</h3>
        <div className="point-container">
        {symptoms.map(point => <div className="point">{point}</div>)}
        </div>
        </div>

        </div>
    )
}

export default Landing;