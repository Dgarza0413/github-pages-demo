import React from 'react'

const Row = (props) => {
    return (
        <tr>
            <td>{props.name.first}</td>
            <td>{props.gender}</td>
            <td>{props.name.title}</td>
            <td>{props.dob.age}</td>
        </tr>
    )
}

export default Row
