import React from "react";
import { Button, Modal, Form } from 'react-bootstrap';

const Add = ({handleClose, handleSave}) => {
  return(
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Stripe Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form.Group >
        <Form.Label>Amount Off</Form.Label>
        <Form.Control type="number" placeholder="0" />
        <Form.Text className="text-muted">
          Amount (in the currency specified) that will be taken off the subtotal of any invoices for this customer.
        </Form.Text>
      </Form.Group>
      <Form.Group >
        <Form.Label>Currency</Form.Label>
        <Form.Control as="select">
          <option value="AU">Australia (AU)</option>
          <option value="AT">Austria (AT)</option>
          <option value="BE">Belgium (BE)</option>
          <option value="BR">Brazil (BR)</option>
          <option value="BG">Bulgaria (BG)</option>
          <option value="CA">Canada (CA)</option>
          <option value="CY">Cyprus (CY)</option>
          <option value="CZ">Czech Republic (CZ)</option>
          <option value="DK">Denmark (DK)</option>
          <option value="EE">Estonia (EE)</option>
          <option value="FI">Finland (FI)</option>
          <option value="FR">France (FR)</option>
          <option value="DE">Germany (DE)</option>
          <option value="GR">Greece (GR)</option>
          <option value="HK">Hong Kong (HK)</option>
          <option value="HU">Hungary (HU)</option>
          <option value="IN">India (IN)</option>
          <option value="IE">Ireland (IE)</option>
          <option value="IT">Italy (IT)</option>
          <option value="JP">Japan (JP)</option>
          <option value="LV">Latvia (LV)</option>
          <option value="LT">Lithuania (LT)</option>
          <option value="LU">Luxembourg (LU)</option>
          <option value="MY">Malaysia (MY)</option>
          <option value="MT">Malta (MT)</option>
          <option value="MX">Mexico (MX)</option>
          <option value="NL">Netherlands (NL)</option>
          <option value="NZ">New Zealand (NZ)</option>
          <option value="NO">Norway (NO)</option>
          <option value="PL">Poland (PL)</option>
          <option value="PT">Portugal (PT)</option>
          <option value="RO">Romania (RO)</option>
          <option value="SG">Singapore (SG)</option>
          <option value="SK">Slovakia (SK)</option>
          <option value="SI">Slovenia (SI)</option>
          <option value="ES">Spain (ES)</option>
          <option value="SE">Sweden (SE)</option>
          <option value="CH">Switzerland (CH)</option>
          <option value="GB">United Kingdom (GB)</option>
          <option value="US">United States (US)</option>
        </Form.Control>
        <Form.Text className="text-muted">
          If amount_off has been set, the three-letter ISO code for the currency of the amount to take off.
        </Form.Text>
      </Form.Group>
      <Form.Group>
        <Form.Label>Duration</Form.Label>
        <Form.Control as="select">
          <option>once</option>
          <option>repeating</option>
          <option>forever</option>
        </Form.Control> 
      </Form.Group>
      <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Coupon name" />
        <Form.Text className="text-muted">
          Name of the coupon displayed to customers on for instance invoices or receipts.
        </Form.Text>
      </Form.Group>
      <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control type="number" placeholder="Discount / Precent off" />
        <Form.Text className="text-muted">
          Percent that will be taken off the subtotal of any invoices for this customer for the duration of the coupon. For example, a coupon with percent_off of 50 will make a £100 invoice £50 instead.
        </Form.Text>
      </Form.Group>
      </Modal.Body>
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