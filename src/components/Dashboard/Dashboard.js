import React, { useEffect, useState } from 'react';
import Transport from '../Transport/Transport';


const Dashboard = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const [transports, setTransports] = useState([]);
    useEffect(() => {
        fetch('https://api.mocki.io/v1/3732507b')
            .then(res => res.json())
            .then(data => setTransports(data))
    }, [])
    return (
                   
           <div style={style}>
           {
            transports.map(transport => <Transport transport = {transport}></Transport>)
            }
        </div>          
       
    );
};

export default Dashboard;