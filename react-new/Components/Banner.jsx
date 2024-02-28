import React from 'react';
import "./Banner.css"
import {  Link } from "react-router-dom";

const Banner = (Props) => {
  // if(Props.url){
  //   {Props.url}
  // }
  
  
  return (
    <div>
      <div className="Banner d-flex align-items-center">
        <div className='container'>
          <div className='row d-flex'>
            <div className='col-12 col-md-8'>
            <h1 className="title">{Props.title} <span className='name'>{Props.name}</span> {Props.title2}</h1>
            <p className='col-8 p-0 my-4 mb-5'>{Props.subtitle}</p>
            {/* <a href="/About"><button></button></a> */}
            
            {/* <Link to={Props.url} className="text-white overlay-btn">{Props.link}</Link> */}
            {Props.url && (
        <Link to={Props.url} className="text-white overlay-btn">{Props.link}</Link>
      )}
            </div>
          </div>
        </div>
      
      </div>
      
    </div>
  );
}

export default Banner;
