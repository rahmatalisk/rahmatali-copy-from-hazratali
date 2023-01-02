import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';

import './OffCanvas.css'

const OffCanvas = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow} className="me-2">
          {name}
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Menus</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
          <ul class="navbar-nav  mb-2 mb-lg-0 ms-auto ">
                        
                        <li class="nav-item ">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Services</a>
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
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};

function OffCanva() {
    return (
      <>
        {['end'].map((placement, idx) => (
          < OffCanvas key={idx} placement={placement} name={placement} />
        ))}
      </>
    );
  }

export default OffCanva;