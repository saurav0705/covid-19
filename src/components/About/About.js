import React from 'react';
import {useHistory} from 'react-router-dom';

const About = () => {

    let history= useHistory();

    return (<h1 align="center" onClick={()=> window.open('https://github.com/saurav0705','_blank')}>CLICK ON THIS</h1>)
}

export default About;