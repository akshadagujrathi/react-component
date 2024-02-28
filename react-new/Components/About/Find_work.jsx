import React from 'react';
import Finding_us from'../About/images/Finding_us.png';
const FindWork = () => {
    return (
        <div className='find-work'>
            <div className='container-fluid'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-12 col-lg-4 findwork-content'>
                        <div className='content'>
                        <h4 className="theme-gradient">Find Your Work Now</h4>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that.</p>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-8 p-0'>
                        <img src={Finding_us} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindWork;
