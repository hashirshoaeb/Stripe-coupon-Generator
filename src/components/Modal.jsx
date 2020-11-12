import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Add = ({ handleClose, handleSave }) => {
  const [amount_off, setamount_off] = useState(1);
  const [currency, setcurrency] = useState("US");
  const [duration, setduration] = useState("once");
  const [duration_in_months, setduration_in_months] = useState(1);
  const [name, setname] = useState("");
  const [discount_type, setdiscount_type] = useState("0");
  const [percent_off, setpercent_off] = useState(1);
  const [validated, setValidated] = useState(true);

  const on_amount_off_change = (e) => setamount_off(e.target.value);
  const on_currency_change = (e) => setcurrency(e.target.value);
  const on_duration_change = (e) => setduration(e.target.value);
  const on_name_change = (e) => setname(e.target.value);
  const on_percent_off_change = (e) => setpercent_off(e.target.value);
  const on_discount_type_change = (e) => setdiscount_type(e.target.value);
  const on_duration_in_months_change = (e) =>
    setduration_in_months(e.target.value);

  const on_save = (e) => {
    const form = e.currentTarget;
    console.log(form.checkValidity());
    if (form.checkValidity() === false) setValidated(false);
    else {
      setValidated(true);
      let data = { name, duration };
      if (discount_type === "0") data = { ...data, percent_off };
      else data = { ...data, currency, amount_off };
      if (duration === "repeating") data = { ...data, duration_in_months };
      console.log(data);
      handleSave(data);
    }
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <>
      <Modal.Header closeButton>
        <Modal.Title>Add Stripe Coupon</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="form" noValidate validated={validated} onSubmit={on_save}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Coupon name"
              value={name}
              onChange={on_name_change}
            />
            <Form.Text className="text-muted">
              This will appear on customers' receipts and invoices.
            </Form.Text>
            <Form.Control.Feedback type="invalid">
              Please provide name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Discount Type</Form.Label>
            <Form.Control
              as="select"
              value={discount_type}
              onChange={on_discount_type_change}
            >
              <option value="0">Percentage Discount</option>
              <option value="1">Fixed Amount Discount</option>
            </Form.Control>
          </Form.Group>
          {discount_type === "0" && (
            <Form.Group>
              <Form.Label>Discount</Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder="Discount / Precent off"
                value={percent_off}
                onChange={on_percent_off_change}
              />
              <Form.Text className="text-muted">
                Percent that will be taken off the subtotal of any invoices for
                this customer for the duration of the coupon. For example, a
                coupon with percent_off of 50 will make a £100 invoice £50
                instead.
              </Form.Text>
            </Form.Group>
          )}
          {discount_type === "1" && (
            <Form.Group>
              <Form.Label>Currency</Form.Label>
              <Form.Control
                as="select"
                value={currency}
                onChange={on_currency_change}
              >
                {country_options.map((value) => {
                  return (
                    <option key={value.value} value={value.value}>
                      {value.label}
                    </option>
                  );
                })}
              </Form.Control>
              <Form.Text className="text-muted">
                If amount_off has been set, the three-letter ISO code for the
                currency of the amount to take off.
              </Form.Text>
            </Form.Group>
          )}
          {discount_type === "1" && (
            <Form.Group>
              <Form.Label>Amount Off</Form.Label>
              <Form.Control
                type="number"
                min="0"
                placeholder="1"
                value={amount_off}
                onChange={on_amount_off_change}
              />
              <Form.Text className="text-muted">
                Amount (in the currency specified) that will be taken off the
                subtotal of any invoices for this customer.
              </Form.Text>
            </Form.Group>
          )}
          <Form.Group>
            <Form.Label>Duration</Form.Label>
            <Form.Control
              as="select"
              value={duration}
              onChange={on_duration_change}
            >
              <option value="once">once</option>
              <option value="repeating">repeating</option>
              <option value="forever">forever</option>
            </Form.Control>
          </Form.Group>
          {duration === "repeating" && (
            <Form.Group>
              <Form.Label>Number of Months</Form.Label>
              <Form.Control
                type="number"
                placeholder="1"
                min="1"
                value={duration_in_months}
                onChange={on_duration_in_months_change}
              />
            </Form.Group>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="form">
          Add
        </Button>
      </Modal.Footer>
    </>
  );
};

export default Add;

const country_options = [
  { value: "AU", label: "Australia (AU)" },
  { value: "AT", label: "Austria (AT)" },
  { value: "BE", label: "Belgium (BE)" },
  { value: "BR", label: "Brazil (BR)" },
  { value: "BG", label: "Bulgaria (BG)" },
  { value: "CA", label: "Canada (CA)" },
  { value: "CY", label: "Cyprus (CY)" },
  { value: "CZ", label: "Czech Republic (CZ)" },
  { value: "DK", label: "Denmark (DK)" },
  { value: "EE", label: "Estonia (EE)" },
  { value: "FI", label: "Finland (FI)" },
  { value: "FR", label: "France (FR)" },
  { value: "DE", label: "Germany (DE)" },
  { value: "GR", label: "Greece (GR)" },
  { value: "HK", label: "Hong Kong (HK)" },
  { value: "HU", label: "Hungary (HU)" },
  { value: "IN", label: "India (IN)" },
  { value: "IE", label: "Ireland (IE)" },
  { value: "IT", label: "Italy (IT)" },
  { value: "JP", label: "Japan (JP)" },
  { value: "LV", label: "Latvia (LV)" },
  { value: "LT", label: "Lithuania (LT)" },
  { value: "LU", label: "Luxembourg (LU)" },
  { value: "MY", label: "Malaysia (MY)" },
  { value: "MT", label: "Malta (MT)" },
  { value: "MX", label: "Mexico (MX)" },
  { value: "NL", label: "Netherlands (NL)" },
  { value: "NZ", label: "New Zealand (NZ)" },
  { value: "NO", label: "Norway (NO)" },
  { value: "PL", label: "Poland (PL)" },
  { value: "PT", label: "Portugal (PT)" },
  { value: "RO", label: "Romania (RO)" },
  { value: "SG", label: "Singapore (SG)" },
  { value: "SK", label: "Slovakia (SK)" },
  { value: "SI", label: "Slovenia (SI)" },
  { value: "ES", label: "Spain (ES)" },
  { value: "SE", label: "Sweden (SE)" },
  { value: "CH", label: "Switzerland (CH)" },
  { value: "GB", label: "United Kingdom (GB)" },
  { value: "US", label: "United States (US)" },
];
