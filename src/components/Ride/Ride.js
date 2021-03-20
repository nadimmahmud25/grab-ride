import React from 'react';
import { Link, useParams } from 'react-router-dom';
const Ride = () => {
    const fare1 = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>Let's book a {fare1} Room.</h1>
            <p>Want a <Link to="/Dashboard">different Ride?</Link> </p>
        </div>
    );
};

export default Ride;