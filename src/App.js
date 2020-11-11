import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
// Files
import './App.css';
import List from './components/List';
import Add from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [couponList , setcouponList] = useState([{"id": "25_5OFF","name": "25.5% off",}, {"id": "25_5OFF","name": "25.5% off",}, {"id": "25_5OFF","name": "25.5% off",}]);
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
      <List coupons={couponList}></List> 
    </div>
  );
}

export default App;
