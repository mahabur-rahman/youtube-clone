import React, { useState } from "react";
import { Form } from "react-bootstrap";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
  });

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <h1>Contact form</h1>

      <div className="container">
        <div className="row">
          <div className="col-xl-6">
            <Form onSubmit={formSubmit}>
              <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <span>{formData.name}</span>
                <input
                  type="text"
                  placeholder="name"
                  className="form-control"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <input
                  type="email"
                  placeholder="email"
                  className="form-control"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="phone">
                <Form.Label>Phone Number</Form.Label>
                <input
                  type="number"
                  placeholder="Phone"
                  className="form-control"
                  name="phone"
                  value={formData.phone}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <input
                  type="text"
                  placeholder="Address"
                  className="form-control"
                  name="address"
                  value={formData.address}
                  onChange={handleFormChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="message">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="form-control"
                  placeholder="message"
                  name="message"
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </Form.Group>
              {/* submit button */}
              <button type="submit">Submit</button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
