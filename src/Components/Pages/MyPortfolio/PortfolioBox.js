import React from 'react';
import './PortfolioBox.css'

const PortfolioBox = () => {
    return (
        <div className="portfolio-content-box">
                <div className="img-content">
                <img className='img-fluid' src="https://i.ibb.co/zJJg1Xv/Untitled-design-1.jpg" alt="Untitled-design-1" />  
                </div>
                <h4 className='web-development-text'>Web Development</h4>  
                <h2>Figma To Responsive React Website</h2>   
        </div>
    );
};

export default PortfolioBox;