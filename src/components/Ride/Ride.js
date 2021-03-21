import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import TransportData from '../FakeData/TransportData';
import '../Home/Home.css'

const Ride = () => {
    const [transport, setTransport] = useState({})
    const { id } = useParams()
    useEffect(() => {
        setTransport(TransportData.find(data => data.id === parseInt(id)))
    }, [])
    return (
        <div className='backgroundIamge'>
            <div className="w-75 h-100 mx-auto row d-flex align-items-center justify-content-center">
               
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-body">
                            <div className="form-group">
                                <label htmlFor="">Pick From</label>
                                <input type='text' className='form-control' value={transport.locationFrom} ></input>
                            </div>
                            <div className="form-group">
                                <label htmlFor="">Pick To</label>
                                <input type='text' className='form-control' value={transport.locationTo}></input>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">From</label>
                                        <input type='date' className='form-control' required></input>
                                    </div></div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label htmlFor="">To</label>
                                        <input type='date' className='form-control' required ></input>
                                    </div>
                                </div>
                                <Link className="btn btn-block btn-warning text-light" to={'/contract/' + transport.id}>Book Ride</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ride;