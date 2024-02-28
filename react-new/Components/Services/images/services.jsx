import React from 'react';
// import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
// import { GiMouse } from "react-icons/gi";
// import { SlFire } from "react-icons/sl";
import service_4 from './images/service_4.jpg'
import service_5 from './images/service_5.jpg'
import service_6 from './images/service_6.jpg'
const Services = () => {
    return (
        <div className='services'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-13 col-lg-10'>
                    <h2 className='title text-center'>WE HELP BRANDS AND MAKE NEW FANS</h2>
                    <p className='text-center col-12 col-lg-11 m-auto'>We provide the exceptional service we’d want to experience ourselves! Let’s make something awesome together.</p>
                    </div>
                </div>
                <div className='row my-5 justify-content-center'>
                    <div className='col-12 col-md-4 col-lg-4 service-cards' id='service-card1'>
                        <div className='service-card' >
                        {/* <HiOutlineSquare3Stack3D /> */}
                        <img className='img-fluid' src={service_4} alt="" />
                        <h3 className='text-center'>Digital Marketing</h3>
                        <p className='text-center'>Pretium lectus quam id leo in vitae turpis. Mattis pellentesque id nibh tortor id.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 service-cards' id='service-card2'>
                         <div className='service-card' >
                         {/* <GiMouse /> */}
                         <img className='img-fluid' src={service_5} alt="" />
                         <h3 className='text-center'>UX, Design and Technology</h3>
                         <p className='text-center'>Nunc consequat interdum varius sit amet mattis vulputate enim nulla. Risus feugiat.</p>
                         </div>
                    </div>
                    <div className='col-12 col-md-4 col-lg-4 service-cards' id='service-card3'>
                        <div className='service-card'>
                        {/* <SlFire /> */}
                        <img className='img-fluid' src={service_6} alt="" />
                            <h3 className='text-center'>Social Media & Performance Marketing</h3>
                            <p className='text-center'>Nisl purus in mollis nunc sed id semper. Rhoncus aenean vel elit scelerisque mauris.</p>
                            </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;
