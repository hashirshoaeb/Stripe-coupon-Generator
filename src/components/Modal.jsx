import React, { useState } from "react";
import { Button, Modal, Form } from 'react-bootstrap';

const Add = ({handleClose, handleSave}) => {
  const [amount_off , setamount_off] = useState(null);
  const [currency, setcurrency] = useState("US");
  const [duration, setduration] = useState("once");
  const [name, setname] = useState(null);
  const [percent_off, setpercent_off] = useState(null);

  const on_amount_off_change =(e)=>{setamount_off(e.target.value === "" ? null : e.target.value );}
  const on_currency_change = (e) => {setcurrency(e.target.value);}
  const on_duration_change = (e)=> {setduration(e.target.value);}
  const on_name_change = (e) => {setname(e.target.value);}
  const on_percent_off_change = (e) => {setpercent_off(e.target.value);}

  const on_save = (e)=>{
    const data = {amount_off, currency, duration, name, percent_off};
    handleSave(data);
  }

  return(
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Stripe Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group >
        <Form.Label>Amount Off</Form.Label>
        <Form.Control type="number" placeholder="null" value={amount_off} onChange={on_amount_off_change} />
        <Form.Text className="text-muted">
          Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer.
        </Form.Text>
      </Form.Group>
      <Form.Group >
        <Form.Label>Currency</Form.Label>
        <Form.Control as="select" value={currency} onChange={on_currency_change} >
          {country_options.map((value, index)=>{
            return <option value={value.value}>{value.label}</option>
          })}          
        </Form.Control>
        <Form.Text className="text-muted">
          If amount_off has been set, the three-letter ISO code for the currency of the amount to take off.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Duration</Form.Label>
        <Form.Control as="select" value={duration} onChange={on_duration_change} >
          <option>once</option>
          <option>repeating</option>
          <option>forever</option>
        </Form.Control> 
      </Form.Group>
      <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Coupon name" value={name} onChange={on_name_change}/>
        <Form.Text className="text-muted">
          Name of the coupon displayed to customers on for instance invoices or receipts.
        </Form.Text>
      </Form.Group>
      <Form.Group >
        <Form.Label>Discount</Form.Label>
        <Form.Control type="number" placeholder="Discount / Precent off" value={percent_off} onChange={on_percent_off_change} />
        <Form.Text className="text-muted">
          Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a £100 invoice £50 instead.
        </Form.Text>
      </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={on_save}>
          Add
        </Button>
      </Modal.Footer>
    </>    
  );
}

export default Add;

const country_options = [
  {value: "AU", label: "Australia (AU)"},
  {value: "AT", label: "Austria (AT)"},
  {value: "BE", label: "Belgium (BE)"},
  {value: "BR", label: "Brazil (BR)"},
  {value: "BG", label: "Bulgaria (BG)"},
  {value: "CA", label: "Canada (CA)"},
  {value: "CY", label: "Cyprus (CY)"},
  {value: "CZ", label: "Czech Republic (CZ)"},
  {value: "DK", label: "Denmark (DK)"},
  {value: "EE", label: "Estonia (EE)"},
  {value: "FI", label: "Finland (FI)"},
  {value: "FR", label: "France (FR)"},
  {value: "DE", label: "Germany (DE)"},
  {value: "GR", label: "Greece (GR)"},
  {value: "HK", label: "Hong Kong (HK)"},
  {value: "HU", label: "Hungary (HU)"},
  {value: "IN", label: "India (IN)"},
  {value: "IE", label: "Ireland (IE)"},
  {value: "IT", label: "Italy (IT)"},
  {value: "JP", label: "Japan (JP)"},
  {value: "LV", label: "Latvia (LV)"},
  {value: "LT", label: "Lithuania (LT)"},
  {value: "LU", label: "Luxembourg (LU)"},
  {value: "MY", label: "Malaysia (MY)"},
  {value: "MT", label: "Malta (MT)"},
  {value: "MX", label: "Mexico (MX)"},
  {value: "NL", label: "Netherlands (NL)"},
  {value: "NZ", label: "New Zealand (NZ)"},
  {value: "NO", label: "Norway (NO)"},
  {value: "PL", label: "Poland (PL)"},
  {value: "PT", label: "Portugal (PT)"},
  {value: "RO", label: "Romania (RO)"},
  {value: "SG", label: "Singapore (SG)"},
  {value: "SK", label: "Slovakia (SK)"},
  {value: "SI", label: "Slovenia (SI)"},
  {value: "ES", label: "Spain (ES)"},
  {value: "SE", label: "Sweden (SE)"},
  {value: "CH", label: "Switzerland (CH)"},
  {value: "GB", label: "United Kingdom (GB)"},
  {value: "US", label: "United States (US)"},
];