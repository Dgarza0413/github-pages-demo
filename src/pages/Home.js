import React, {useEffect, useState} from 'react'
import Table from '../components/Table';

const Home = () => {
    const [employeeList, setEmployeeList] = useState()

    const calldata = async () => {
        const res = await fetch('https://randomuser.me/api/?results=5')
        const data = await res.json();
        setEmployeeList(data.results);
    }

    useEffect(() => {
        calldata();
    }, [])

    return (
        <Table employeeList={employeeList || []}/>
    )
}

export default Home;
