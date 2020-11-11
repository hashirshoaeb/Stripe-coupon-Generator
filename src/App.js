import React, {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import './App.css';
import Add from "./components/Modal";
import { Modal } from "react-bootstrap";


function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSave = () => setShowModal(false);

  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">Stripe Coupon App</h1>  
      </div>
      <div className="m-5"></div>
      <div className="btn btn-primary" onClick={handleShow} >Add</div>
      <div className="m-5"></div>
      <Modal show={showModal} onHide={handleClose}>
        <Add handleClose={handleClose} handleSave={handleSave}></Add>
      </Modal>
    </div>
  );
}

export default App;
