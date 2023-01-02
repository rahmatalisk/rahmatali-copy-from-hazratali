import React from 'react';
import "./Myskill.css"
import html from '../../../Images/html5.svg'
import css from '../../../Images/css3-alt.svg'
import scss from '../../../Images/sass.svg'
import bootstrap from '../../../Images/bootstrap.svg'
import tailwind from '../../../Images/Tailwind_CSS_Logo.svg.png'
import js from '../../../Images/js.svg'
import node from '../../../Images/node-js.svg'
import react from '../../../Images/react.svg'
import mongodb from '../../../Images/mongodb-icon.svg'
import firebase from '../../../Images/firebase-svgrepo-com.svg'
import matarialui from '../../../Images/material-ui.png'
import express from '../../../Images/express-js-icon.svg'

const MySkill = () => {
    return (
        <div className='my-skill py-5'>
            <div className="container">
                <h1 className="skill-text text-center">My Skills</h1>

                <div className="skills-contents">
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={html} alt="" />
                        <h4 className=''>HTML5</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={css} alt="" />
                        <h4 className=''>CSS3</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={scss} alt="" />
                        <h4 className=''>SCSS</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={bootstrap} alt="" />
                        <h4 className=''>Bootstarp5</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={tailwind} alt="" />
                        <h4 className=''>Tailwind</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={js} alt="" />
                        <h4 className=''>Javascript</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={react} alt="" />
                        <h4 className=''>React</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={node} alt="" />
                        <h4 className=''>Node Js</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={express} alt="" />
                        <h4 className=''>Express</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={firebase} alt="" />
                        <h4 className=''>Firebase</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={matarialui} alt="" />
                        <h4 className=''>MatarialUi</h4>
                    </div>
                    <div className="skill-box">
                        <img className='skill-img mb-2 ' src={mongodb} alt="" />
                        <h4 className=''>Mongo DB</h4>
                    </div>
                   
                </div>
            </div>
        </div>
    );
};

export default MySkill;