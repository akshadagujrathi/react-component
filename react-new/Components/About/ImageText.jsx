import React from 'react';
import ImageAbout from './images/ImageAbout.jpg'
const ImageText = () => {
    return (
        <div className='AboutText_img'>
            <div className='container'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-12 col-lg-6'>
                   <img className='img-fluid about-img' src={ImageAbout} alt="" />
                    </div>
                    <div className='col-12 col-md-12 col-lg-6 mt-3'>
                        <h2 className='title'>Know more </h2>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going.</p>
                    <div className='row d-flex'>
                        <div className='col-12 col-md-6 my-4'>
                            <h3 className='title font-weight-bold'>Who we are</h3>
                            <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                        <div className='col-12 col-md-6 my-4'>
                            <h3 className='title font-weight-bold'>Who we are</h3>
                            <p>There are many vtions of passages of Lorem Ipsum available, but the majority have suffered.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImageText;
