import React, { useState, useEffect } from 'react';
import { Bar,Line } from 'react-chartjs-2';
import {COLORS,API} from '../../covid-19';

import './Timeline.css';
import Loading from '../Loading/Loading';
const Timeline = ({code}) => {
    const [dataset,setDataset] = useState([]);
    const [data,setData] = useState([]);
    const [labels,setLabels] = useState([]);
    const [active,setActive] = useState(1);
    
    useEffect(()=>{
         fetch(API['full-timeline-country'].replace("COUNTRY_CODE",code))
            .then(resp => resp.json())
            .then(resp => {delete resp['timelineitems'][0]['stat']; setDataset(resp['timelineitems'][0]);structure_data(1,resp['timelineitems'][0]);})
    },[])
    const structure_data = (number,data=dataset) =>{
        
        let labels = Object.keys(data).filter((key,index)=>{
            if(index%number === 0){return true}else{return false}
        })
        let val = labels.map(key => data[key]['total_cases']);
        setData(val);
        setLabels(labels);
        setActive(number);

    }
    function shuffle(array) {
        return  array.sort(() => Math.random() - 0.5);
       }
    const dataSet={
        labels: labels,
        datasets: [{
            label: 'PATIENTS',
            data: data,
            borderColor: shuffle(COLORS)[0],
            pointBorderColor: shuffle(COLORS)[0],
            pointBackgroundColor: shuffle(COLORS)[0],
            pointHoverBackgroundColor: shuffle(COLORS)[0],
            pointHoverBorderColor: shuffle(COLORS)[0],
            pointBorderWidth: 10,
            pointHoverRadius: 10,
            pointHoverBorderWidth: 1,
            pointRadius: 3,
            fill: false,
            borderWidth: 4,
        }],
        
    }
    return (
    
    
    <>
    {dataset.length !==0 ?<>
    <div className="timeline-heading" onClick={()=>structure_data(4)}>TIMELINE GRAPH</div>
    <h1 align="center" className="button-heading">Click below to Change the Time Span</h1>
    <div className="button-container">
        
    {[1,2,5,7,10].map(key => {
        return (
        <div key={key} onClick={()=>structure_data(key)} className={active === key ? "button btn-active":"button"} >{key}</div>
        )
    })}
    </div>
    <div className="timeline-container">
    <Line
        data={dataSet}
        width={100}
        height={50}
        options={{}}
    />
    </div></>: <Loading/>}
    </>

    )

};


export default Timeline;