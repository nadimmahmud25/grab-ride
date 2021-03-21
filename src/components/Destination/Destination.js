import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import TransportData from '../FakeData/TransportData';
import { userContex } from '../Home/Home';
import ReactMap from './ReactMap';


const Destination = () => {
    const [loggedInUser, setLoggedInUser] =useContext(userContex)

    //Ride Details Data Management....
    const [details, setDetails] = useState({})
    const { id } = useParams()
    useEffect(() => {
        setDetails(TransportData.find(data => data.id === parseInt(id)))
    }, [])
   
    return (
        <div className='backgroundIamge'>
            <div className="container row h-100 d-flex align-items-center justify-content-center px-4">
                <div className="col-md-6">
                    <h4 className='text-center font-width-bold text-light'>Happy  {details.title} Ride</h4><hr/>
                    {
                        
                            <div className="row">
                                <div className="col-md-6 p-1">
                                    <img src={details.image} alt="" height='130'></img>
                                </div>
                                <div className="col-md-6 p-1">
                                    <h3 className='text-green'>{details.title}</h3>
                                    <h3>Person:{details.capacity}</h3>
                                    <div className="row text-green font-weight-bold">
                                        <div className="col-md-6">
                                            <h3>$ {details.fare}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                    }
                    {
                        
                        <div className="row">
                            <div className="col-md-6 p-1">
                                <img src={details.image} alt="" height='130'></img>
                            </div>
                            <div className="col-md-6 p-1">
                                <h3 className='text-green'>{details.title}</h3>
                                <h3>Person:{details.capacity}</h3>
                                <div className="row text-green font-weight-bold">
                                    <div className="col-md-6">
                                        <h3>$ {details.fare}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                }
                {
                        
                        <div className="row">
                            <div className="col-md-6 p-1">
                                <img src={details.image} alt="" height='130'></img>
                            </div>
                            <div className="col-md-6 p-1">
                                <h3 className='text-green'>{details.title}</h3>
                                <h3>Person:{details.capacity}</h3>
                                <div className="row text-green font-weight-bold">
                                    <div className="col-md-6">
                                        <h3>$ {details.fare}</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                }
                </div>
                <div className="col-md-6">
                        <ReactMap> </ReactMap>
                </div>
            </div>
        </div>
    );
};

export default Destination;