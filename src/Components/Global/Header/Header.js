import React from 'react';

import myphoto from "../../../Images/Untitled design (15).png"
import './Header.css'
const Header = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-white sticky-top">
            <div class="container bg-white">
                <div className="navbar-brand bg-white">
                    <a class="bg-white" href="#"><img src={myphoto} alt="" className="logo bg-white" /></a>
                    
                </div>
                <span className='d-inline-block mx-auto m-lg-0 rahmat'>RAHMAT ALI</span>

                <button class="toggle-btn d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">

                    <span class="navbar-toggler-icon "> </span>
                </button>
                <div class="collapse navbar-collapse bg-white " id="navbarText">
                    <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto bg-white ">
                        
                        <li class="nav-item bg-white">
                            <a class="nav-link active bg-white" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active bg-white" href="#">Services</a>
                        </li>
                        <li class="nav-item ">
                            <a class="nav-link active" href="#">Portfolio</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active " href="#">Contact</a>
                        </li>
                        <li class="nav-item login-item">
                            <button className='login-btn'>Login</button>
                        </li>
                    </ul>
                    
                </div>

                
            </div>
        </nav>
    );
};

export default Header;