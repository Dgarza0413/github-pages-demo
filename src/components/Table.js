import React, { Component } from 'react'
import Row from './Row'

const Table = (props) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Title</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
            {
                props.employeeList.map(e => {
                    return <Row {...e} /> 
                    })  
            }
            </tbody>
        </table>
    )
}

export default Table
