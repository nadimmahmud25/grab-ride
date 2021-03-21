import React from 'react';
import Transport from '../Transport/Transport';

const Dashboard = () => {
    const style = {
        display: 'flex',
        margin: '40px',
        justifyContent: 'space-between'
    }
    const transports = [
        {   
            id:1,
            transport:"Bike",
            description:"Sajek Valley -is an emerging tourist spot in Bangladesh situated among the hills of the Kasalong range of mountains in Sajek union, Baghaichhari Upazila in Rangamati District. The valley is 1,476 feet above sea level.",
            image:"https://www.motorcyclesdata.com/wp-content/uploads/2019/09/bajaj-pulsar-200.jpg"
        },
        {   
            id:2,
            transport:"Car",
            description:"Sreemangal, The Tea Capital of Bangladesh A large portion of world's highest quality tea is grown here. It is also called the city of 'two leaves and a bud. Sreemangal is famous for nature, forests and wildlife.",
            image:"https://file.mk.co.kr/meet/neds/2020/11/image_readtop_2020_1157245_16050700324427166.jpg"
        },
        {   
            id:3,
            transport:"Bus",
            description:"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. ",
            image:"https://zafigo.com/wp-content/uploads/2015/08/KLHopOnHopOffBus_2.jpg"
        },
        {   
            id:4,
            transport:"Train",
            description:"The Sundarbans is a mangrove area in the delta formed by the confluence of the Ganges, Brahmaputra and Meghna Rivers in the Bay of Bengal. It spans from the Hooghly River in India's state of West Bengal to the Baleswar River in Bangladesh. ",
            image:"https://media2.malaymail.com/uploads/articles/2017/2017-07/20170717_MRT_LEAD_03.jpg"
        }
    ]
    return (
        <div style={style}>
        {
         transports.map(transport => <Transport transport = {transport}></Transport>)
         }
     </div>  
    );
};

export default Dashboard;