import React from 'react';
import {  Link } from "react-router-dom";
import Logo from "../images/Logo.png";
import { RiFacebookLine } from "react-icons/ri";
import { RiLinkedinLine } from "react-icons/ri";
import { BiLogoInstagram } from "react-icons/bi";
import { RiTwitterLine } from "react-icons/ri";
import { RxHamburgerMenu } from "react-icons/rx";
import { useEffect, useState } from "react";

const Header = () => {
  
  const [sticky, setSticky] = useState("");

  // on render, set listener
  useEffect(() => {
    console.log("hello");
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    /* Method that will fix header after a specific scrollable */
    const scrollTop = window.scrollY;
    const stickyClass = scrollTop >= 200 ? "is-sticky" : "";
    setSticky(stickyClass);
    console.log(stickyClass);
  };

  const classes = `header-section  d-flex align-items-center ${sticky}`;
    return (
      <div className='bg-dark'>
        <header className={classes}>
        <nav className="container navbar navbar-expand-lg sticky" id="mainHeader">
          <div className='header-logosec col-xxl-3'>
  <a className="navbar-brand" href="/"><img class="img-fluid logo" src={Logo} alt=""/></a>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"><RxHamburgerMenu /></span>
  </button>
  </div>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav m-auto">
      <div className='header-links col-12 col-md-9 d-lg-flex'>
    <li className="nav-item">
            <Link to="/" className='text-white nav-link active'>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/About" className='text-white nav-link'>About</Link>
          </li>
          <li className="nav-item">
            <Link to="/Service" className='text-white nav-link'>Service</Link>
          </li>
          <li className="nav-item">
            <Link to="/Blogs" className='text-white nav-link'>Blogs</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className='text-white nav-link'>Contact</Link>
          </li>
          </div>
          <div className='col-12 col-md-3 d-flex align-items-center header-icons justify-content-end'>
                        <RiFacebookLine />
                        <RiLinkedinLine />
                        <BiLogoInstagram />
                        <RiTwitterLine />
                        </div>
    </ul>
    {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
    
  </div>
</nav>
        </header>
     
</div>
)};

export default Header;
