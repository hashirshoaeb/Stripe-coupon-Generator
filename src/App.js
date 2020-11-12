import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
// Files
// import './App.css';
import List from "./components/List";
import Add from "./components/Modal";
import Axios from "axios";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [couponList, setcouponList] = useState([]);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const handleSave = (data) => {
    Axios.post(`${process.env.REACT_APP_API_URL}/api/v1/coupon`,data)
    .then((value)=>{
      setShowModal(false);
      setcouponList([ value.data , ...couponList])
    }).catch((reason)=>{
      console.log(reason);
    });
  };
  const handleDelete = (e, id) => {
    Axios.delete(`${process.env.REACT_APP_API_URL}/api/v1/coupon/${id}`)
    .then((value)=>{
      setcouponList(couponList.filter((value) => value.id !== id));
    }).catch((reason)=>{
      console.log(reason);
    });
  };

  useEffect(() => {
    Axios.get(`${process.env.REACT_APP_API_URL}/api/v1/coupon`)
      .then((value) => {
        setcouponList(value.data.data);
      })
      .catch((reason) => {
        console.log("Bad", reason);
      });
  }, []);

  return (
    <div className="App">
      <div className="jumbotron">
        <h1 className="display-4">Stripe Coupon App</h1>
      </div>
      <div className="m-5"></div>
      <div className="d-flex justify-content-center">
        <div className="btn btn-primary" onClick={handleShow}>
          Add
        </div>
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
