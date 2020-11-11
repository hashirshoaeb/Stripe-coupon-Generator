import React from "react";
import { Button, Modal } from 'react-bootstrap';

const Add = ({handleClose, handleSave}) => {
  return(
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Stripe Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSave}>
          Add
        </Button>
      </Modal.Footer>
    </>    
  );
}

export default Add;