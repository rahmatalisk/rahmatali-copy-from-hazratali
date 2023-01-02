import React from 'react';
import './MyPortfolio.css'
import PortfolioBox from './PortfolioBox';

const MyPortfolio = () => {
    return (
        <div className='portfolio py-5'>
            <div className="container">
                <h1 className='text-center portfolio-text'>My Portfolio</h1>

                <div className="portfolio-contents">
                   
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                    <PortfolioBox></PortfolioBox>
                  
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;