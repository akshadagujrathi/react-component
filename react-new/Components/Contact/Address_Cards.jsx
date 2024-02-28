import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const AddressCards = () => {
    return (
        <div className='address-cards'>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='card col-12 col-md-4 col-lg-3' id='address'>
                    <span className='text-center d-block m-auto'><FaLocationDot /></span>
                    <h3 className='text-center'>Address</h3>
                    <p className='text-center'>7 Green Lake Street Crawfordsville, IN 47933</p>
                    </div>
                    <div className='card col-12 col-md-4 col-lg-3' id='email'>
                    <span className='text-center d-block m-auto'><MdEmail /></span>
                    <h3 className='text-center'>Email Us</h3>
                    <p className='text-center'>avadh@gmail.com</p>
                    </div>
                    <div className='card col-12 col-md-4 col-lg-3' id='call'>
                    <span className='text-center d-block m-auto'><IoCall /></span>
                    <h3 className='text-center'>Call Now</h3>
                    <p className='text-center'>+1 800 123 456 789</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddressCards;
