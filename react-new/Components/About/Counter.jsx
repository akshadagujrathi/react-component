import React from 'react';
import CountUp from 'react-countup';
const Counter = () => {

    return (
        <div className='counter-section'>
            <div className='container'>
                <h2 className='text-center title'>Our Fun Facts</h2>
                <div className='row'>
                    <div className='counter-div1 col-12 col-md-4'>
                     <h3 className='text-center counter position-relative'><CountUp end={199} /></h3>
                    <p className='text-center'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className='counter-div2 col-12 col-md-4'> 
                    <h3 className='text-center counter position-relative'><CountUp end={575} /></h3>
                    <p className='text-center'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
                    <div className='counter-div2 col-12 col-md-4'> 
                    <h3 className='text-center counter position-relative'><CountUp end={69} /></h3>
                    <p className='text-center'>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those.</p>
                    </div>
          
           </div>
           </div>
        </div>
    );
}

export default Counter;
