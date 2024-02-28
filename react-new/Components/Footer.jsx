import React from 'react';
import {  Link } from "react-router-dom";
import Footer_logo from '../images/Footer_logo.png'
import footer_1 from '../images/footer_1.jpg'
import footer_2 from '../images/footer_2.jpg'
import footer_3 from '../images/footer_3.jpg'
import footer_4 from '../images/footer_4.jpg'
import footer_5 from '../images/footer_5.jpg'
import footer_6 from '../images/footer_6.jpg'
import { RiFacebookLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { RiTwitterLine } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
    return (
        <div>
            <footer>
                <div className="container">
                    <div className='row d-flex m-0'>
                        <div className='col-12 col-md-6 col-lg-4 social-icons'>
                            <img src={Footer_logo} className='footer-logo' alt="" />
                            <p className='text-white text-justify'>Lorem ipsum dolor sit amet, conse ctetur adipiscing elit. Viverra laoreet ultrices donec placerat commodo elementum justo, consequat.</p>
                            <RiFacebookLine />
                        <RiLinkedinLine />
                        <BiLogoInstagram />
                        <RiTwitterLine />
                        </div>
                        <div className='col-12 col-md-6 col-lg-2'>
                            <h2 className='text-white'>Our Services</h2>
                        <ul className='p-0'>
                            <li>
                              
                                <Link to="/About" className='text-white nav-link pl-0'>About</Link>
                            </li>
                            <li>
                        
                                <Link to="/Service" className='text-white nav-link pl-0'>Service</Link>
                            </li>
                            <li>
                        
                        <Link to="/Blogs" className='text-white nav-link pl-0'>Blogs</Link>
                    </li>
                    <li>
                        
                        <Link to="/Contact" className='text-white nav-link pl-0'>Contact</Link>
                    </li>
                        </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3  contact-details'>
                        <h2 className='text-white'>Contact</h2>
                           <ul className='p-0'>
                            <li className='py-2'><p className='text-white'><span><FaLocationDot /></span>68D, Belsion Town 2365 Fna city, LH 3656, USA</p></li>
                            <li className='py-2'> <a href="tel:+1234567890" className='text-white'><span><IoCall /></span> +1 (234) 567-890</a>.</li>
                            <li className='py-2'><a href="mailto:info@example.com" className='text-white'><span><IoIosMail /></span>info@example.com</a>.</li>

                           </ul>
                        </div>
                        <div className='col-12 col-md-6 col-lg-3'>
                        <h2 className='text-white mb-4'>Our Gallery</h2>
                        <div className='footer-imges'>
                            <img className='col-4 img-fluid py-1' src={footer_1} alt=""></img>
                            <img className='col-4 img-fluid py-1' src={footer_2} alt=""></img>
                            <img className='col-4 img-fluid py-1' src={footer_3} alt=""></img>
                            <img className='col-4 img-fluid py-1' src={footer_4} alt=""></img>
                            <img className='col-4 img-fluid py-1' src={footer_5} alt=""></img>
                            <img className='col-4 img-fluid py-1' src={footer_6} alt=""></img>
                        </div>
                        </div>
                    </div>
                    
                </div>
                <hr className='bg-white my-1'></hr>
                    <div className='row py-2'>
                    <p className='text-white m-auto'>Copyright © 2022 Rainbow-Themes. All Rights Reserved.</p>
                    </div>
            </footer>

        </div>
    );
}

export default Footer;
