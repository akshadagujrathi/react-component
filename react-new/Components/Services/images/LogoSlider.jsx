import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
    const brandData = [
        {
          id: 1,
          image: require('./images/brand_1.png')
        },
        {
          id: 2,
          image: require('./images/brand_2.png')
        },
        {
          id: 3,
          image: require('./images/brand_3.png')
        },
        {
          id: 4,
          image: require('./images/brand_4.png')
        },
        {
          id: 5,
          image: require('./images/brand_5.png')
        },
        {
            id: 6,
            image: require('./images/brand_6.png'),
            
          }
    ]
 
    

  var settings = {
    dots: false,
    infinite: true,
    speed: 7000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay:true,
    cssEase: 'linear',
    autoplaySpeed: 0,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="logo-slider">
    <div className="container-fluid">
         {/* <h2 className="title text-center">Our Brand</h2> */}
    <>
    <Slider {...settings}>
   
            
      {brandData.map(({image}) => (
      <div className="brand-slides d-flex my-5">
          
             <div className="brand mx-3" >
            
                <div className='brand-img'><img src={image} alt=""/></div>
             
             
           </div>
         
        </div>
       
    
      
      ))}
      
    </Slider>
    </>
    </div>
    </div>
  );
}