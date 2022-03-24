import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './Details.css'

const Details = ({product}) => {
    console.log(product)
    const {image,description,title,price}=product
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
      <Button  onClick={handleShow}>
        Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <div className='info'>
        <img src={image} alt="" />
        <h4>Price:${price}</h4>
        </div>
        <Modal.Body>{description}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
};

export default Details;