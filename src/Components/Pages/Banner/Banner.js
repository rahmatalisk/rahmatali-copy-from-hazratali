import React from 'react';
import myphoto from "../../../Images/Untitled design (15).png"
import './Banner.css'
import facebook from "../../../Images/facebook-f.svg"
import linkdlin from "../../../Images/linkedin-in.svg"
import github from "../../../Images/github.svg"

const Banner = () => {
    return (
        <div className="banner">
            <div className='container  py-5'>
                <div className="row d-flex justify-content-between items-center banner-contents">
                    <div className="col-12 col-md-7 col-lg-6 ">
                        <p className="welcome-text">WELCOME TO MY WORLD</p>
                        <h2 className="my-name">Hi, Im Rahmat</h2>

                        <p className='about-me'>I am a professional web app developer. I expert in HTML, CSS, SCSS, JavsScript, React.js, Node.js, Express.js. I have done more than 250 projects worldwide. I have more than 200+ , 5 star rating in <span className="fiverr-text">Fiverr</span></p>
                        <div className="banner-btn ">
                            <button className="hire-me me-3 ">Hire Me</button>
                            <button className='explore-btn'>Explore</button>
                        </div>

                        <p className='mt-4'>FIND WITH ME</p>

                        <div className="social-group">
                            <div>
                                <img src={facebook} alt="" />
                            </div>
                            <div>
                                <img src={github} alt="" />
                            </div>
                            <div>
                                <img src={linkdlin} alt="" />
                            </div>
                        </div>

                    </div>
                    <div className="col-12 col-lg-3 col-md-5 banner-right mx-auto p-5 pt-0 p-md-0">
                        <img className='img-fluid myphoto p-1 text-center' src={myphoto} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;