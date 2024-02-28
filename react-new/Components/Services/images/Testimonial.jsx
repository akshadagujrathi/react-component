import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
export default function SimpleSlider() {
    const people = [
        {
          id: 1,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
          name: 'maria ferguson',
          title: 'office manager',
          quote:
            'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
        },
        {
          id: 2,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
          name: 'john doe',
          title: 'regular guy',
          quote:
            'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
        },
        {
          id: 3,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
          name: 'peter smith',
          title: 'product designer',
          quote:
            'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
        },
        {
          id: 4,
          image:
            'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
          name: 'susan andersen',
          title: 'the boss',
          quote:
            'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
        },
      ];
      
 
    

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    arrows:true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
    // cssEase: 'linear',
    // autoplaySpeed: 0,
  };
  return (
    <div className="testimonial-slider">
    <div className="container">
         <h2 className="title text-center">Client Reviews</h2>
    <>
    <Slider {...settings}>
   
            
      {people.map(({ image, name, title, quote}) => (
      <div className="Testimonials d-flex my-5">
          
             <div className="review mx-3" >
            
                <div className=''><img className='person-img' src={image}  alt={name}/></div>
             
             <div className=" py-3">
             <h4 className="text-center my-1 test-name">{name}</h4>
             <p className="text-center my-1 review-title">{title}</p>
             <p className="text-center mt-4">{quote}</p>
             <FaQuoteRight className="icon" />
             </div>
             
           </div>
         
        </div>
       
    
      
      ))}
      
    </Slider>
    </>
    </div>
    </div>
  );
}