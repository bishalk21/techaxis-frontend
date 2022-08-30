import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { CustomInOutField } from "../../components/customInOutField/CustomInOutField";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";

export const AdminLogin = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <h3 className="bg-info p-3">Welcome Back</h3>
          <Form onSubmit={handleOnSubmit}>
            <CustomInOutField
              label="Email"
              type="email"
              name="email"
              placeholder="Enter Email"
              required={true}
              onChange={handleOnChange}
            />

            <CustomInOutField
              label="Password"
              type="password"
              name="password"
              placeholder="Enter Password"
              required={true}
              onChange={handleOnChange}
            />
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
