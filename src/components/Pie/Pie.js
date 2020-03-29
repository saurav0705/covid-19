import React from 'react';
import { Pie } from 'react-chartjs-2';
import {COLORS} from '../../covid-19';
import Loading from '../Loading/Loading';
import Table from '../Table/Table';
import './Pie.css';

const  PieComponent = ({data , name}) =>{
    delete data['source'];
    function shuffle(array) {
       return  array.sort(() => Math.random() - 0.5);
      }
    const infoCard = ["total_cases","total_new_cases_today","total_new_deaths_today"];
    const requiredPie = ["total_recovered","total_unresolved","total_deaths"];
    const requiredDataPie = requiredPie.map(key => data[key]);
    const dataSet={
        labels: requiredPie.map(req => req.replace(/_/gi," ").toUpperCase()),
        datasets: [{
            label: 'PATIENTS',
            data: requiredDataPie,
            backgroundColor: shuffle(COLORS),
            borderWidth: 1
        }],
        
    }
    return(
        <>
        {
            data.length!==0 ?
            
            <div>
                <h1 align="center" className="main-heading">{name.toUpperCase()}</h1>
            <div className="info-container">
        {infoCard.map(key => { return (
            <div className="info-box">
            <center>
            <div className="heading">{key.replace(/_/gi," ").replace(/today/gi,"").toUpperCase()}</div>
            <div className="heading-content">{data[key]}</div>
            </center>
        </div>
        ) })}
        </div>
        <div className="chart-container">
        <Pie
            data={dataSet}
            width={100}
            height={50}
            options={{}}
        />
        </div>
        <Table data={data}/>
        </div>
        
        :
        <Loading/>}
        </>
    )
}

export default PieComponent;