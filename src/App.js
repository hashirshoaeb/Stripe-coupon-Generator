import React, {useState} from "react";
import { Modal } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
// Files
// import './App.css';
import List from './components/List';
import Add from "./components/Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [couponList , setcouponList] = useState([{"id": "2_5OFF","name": "25.5% off",}, {"id": "25_OFF","name": "5.5% off",}, {"id": "25_5OFF","name": "25.5% off",}]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSave = (data) => { 
    couponList.push(data); 
    setShowModal(false)
  };
  const handleDelete = (e, id)=>{
    setcouponList(couponList.filter(value => value.id != id));
  };

  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">Stripe Coupon App</h1>  
      </div>
      <div className="m-5"></div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-primary" onClick={handleShow} >Add</div>
      </div>
      <div className="m-5"></div>
      <Modal show={showModal} onHide={handleClose}>
        <Add handleClose={handleClose} handleSave={handleSave}></Add>
      </Modal>
      <List coupons={couponList} handleDelete={handleDelete}></List> 
    </div>
  );
}

export default App;
