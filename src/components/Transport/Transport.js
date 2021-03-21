import React, { useState } from 'react';
import '../Home/Home.css';
import TransportData from '../FakeData/TransportData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';
  

const Transport = () => {
  const [transport, setTransport] = useState({
      id:TransportData[0].id,
      title:TransportData[0].title,
      description:TransportData[0].description,
      image:TransportData[0].image
  })
const handleRide = id =>{
  const newPoint= TransportData.find(data => id ===data.id)
  setTransport(newPoint)
}
    return (
      <div className='backgroundIamge container-fluid'>
      <div className="px-5 h-100 row d-flex align-items-center justify-content-center">
                  <div className="col-md-6 pt-5">
                    <h2 className="text-light display-4 font-weight-bold">{transport.title}</h2>
                    <p className=' text-justify text-light'>{transport.description}</p>
                    <Link className="btn btn-warning btn-md" to={'/booking/'+transport.id}>Book Now <FontAwesomeIcon icon={faArrowRight}/></Link>
                </div>

          <div className="col-md-12">
              <div className="row">
              {TransportData.map(data =>
                  <div className="col-md-3">
                      <div onClick={()=>handleRide(data.id)}  className="card btn btn-outline-warning text-white m-0 p-2">
                          <img height='300' className="card-img" src={data.image} alt=""></img>
                          <div className="card-img-overlay d-flex align-items-end ">
                              <h4 className="card-title text-center font-weight-bold d-flex align-items-end">{data.title}</h4>
                          </div>
                      </div>
                  </div>
              )}
              </div>
          </div>
      </div>
  </div>
);
};

export default Transport;