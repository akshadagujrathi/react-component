import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import { useState } from 'react'

const HomeAbout = () => {
    const tabCont = [
        {
            link1:<li><a href="/">User experience design <span> - UI/UX</span></a><span>Delight the user and make it work.</span></li>,
            link2: <li><a href="/">Web and user interface design<span> - Development</span></a><span>Websites, web experiences, ...</span></li>,
            link3: <li><a href="/">Interaction design <span> - Animation</span></a><span>I like to move it move it.</span></li>,
        },
        {
            link1:<li><a href="/">Awwwards.com <span>- Winner</span></a> <span>2019 - 2020</span></li>,
            link2: <li><a href="/">CSS Design Awards <span>- Winner</span></a> <span>2017 - 2018</span></li>,
            link3:  <li><a href="/">Design nominees <span>- site of the day</span></a> <span>2013- 2014</span></li>,
        },
        {
            link1:<li><a href="/">Sr. Front-end Engineer <span>- Google</span></a> <span>2018 - Current</span></li>,
            link2: <li><a href="/">Front-end Engineer  <span>- Microsoft</span></a> <span>2017 - 2018</span></li>,
            link3: <li><a href="/">Software Engineer <span>- Alibaba</span></a> <span>2013- 2014</span></li>,
        },
        {
            link1:<li><a href="/">BE In CSE <span> - SPPU</span></a> <span>2021</span></li>,
            link2: <li><a href="/">Diploma in Computer Science  <span>- MSBTE</span></a> <span>2017</span></li>,
            link3: <li><a href="/">SSC <span>- Nashik</span></a> <span>2013</span></li>,
        },

    ]
    const results = [];
    const [key, setKey] = useState('tab2')
    // {
        tabCont.forEach((tabCont) => {
            results.push(
           
                <TabPanel>
        <div className="single-tab-content">
            <ul className='p-0'>
                {tabCont.link1}

                {tabCont.link2}
                {tabCont.link3}
            </ul>
        </div>
        </TabPanel>

      
            )
        })
    // }
    return (
        <div>
            <section className="home_about">
                <div className="container">
                    <div className='row d-flex'>
                        <div className='col-12 col-md-5'>
                            <img src="https://trydo.rainbowit.net/assets/images/about/about-5.jpg" alt=""></img>
                        </div>
                        <div className='col-12 col-md-7 text-section'>
                            <h2 className="text-left title">About Us</h2>
                            <p className="text-left">There are many variations of passages of Lorem Ipsum available, but the majority have suffered <a href="/">alteration</a> in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum,</p>
                            <Tabs className="Tabs" activeKey={key} onSelect={(k) => setKey(k)}>
        <TabList>
          <Tab eventKey="tab1">Skills</Tab>
          <Tab eventKey="tab2">Awards</Tab>
          <Tab eventKey="tab3">Experience</Tab>
          <Tab eventKey="tab4">Education</Tab>
        </TabList>
        {results}
      </Tabs>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
    
}

export default HomeAbout;
