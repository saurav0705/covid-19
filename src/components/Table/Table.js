import React from 'react';

import './Table.css';
const Table = ({data}) => {
    return (<div className="table-container">

        <table className="data-table">
            <tr>
                <th>UPDATE</th>
                <th>NUMBERS OF PERSONS</th>
            </tr>
            {Object.keys(data).map((key,index) => {
                return (
                    <tr key={index} >
                        <td>{key.replace(/_/gi," ").toUpperCase()}</td>
                        <td>{data[key]}</td>
                    </tr>
                )
            })}
        </table>
    </div>)
}


export default Table;