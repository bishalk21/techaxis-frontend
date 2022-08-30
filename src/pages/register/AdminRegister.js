import React, { useState } from "react";
import { Alert, Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomInOutField } from "../../components/customInOutField/CustomInOutField";
import { Footer } from "../../components/footer/Footer";
import { Header } from "../../components/header/Header";
import { insertAdmin } from "../../helper/axioshelper";

export const AdminRegister = () => {
  const [form, setForm] = useState({});
  const [response, setResponse] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Passwords do not match");
    }
    const result = await insertAdmin(rest);
    setResponse(result);
  };

  const fields = [
    {
      label: "First Name *",
      type: "text",
      name: "fName",
      placeholder: "Enter First Name",
      required: true,
    },
    {
      label: "Last Name *",
      type: "text",
      name: "lName",
      placeholder: "Enter Last Name",
      required: true,
    },
    {
      label: "Email *",
      type: "email",
      name: "email",
      placeholder: "Enter Email",
      required: true,
    },
    {
      label: "phone",
      type: "text",
      name: "phone",
      placeholder: "Enter Phone",
    },
    {
      label: "DOB",
      type: "date",
      name: "dob",
    },
    {
      label: "Address",
      type: "text",
      name: "address",
      placeholder: "Enter Address",
    },
    {
      label: "Password *",
      type: "password",
      name: "password",
      placeholder: "Enter Password",
      required: true,
    },
    {
      label: "Confirm Password *",
      type: "password",
      name: "confirmPassword",
      placeholder: "Enter Confirm Password",
      required: true,
    },
  ];

  return (
    <div>
      <Header />
      <Container className="page-main">
        <div className="form">
          <Form onSubmit={handleOnSubmit}>
            <h1 className="text-center bg-info p-3 br-5">Sign Up</h1>
            <small>
              Welcome to TechAxis. Please fill the form below to create an
              account.
            </small>
            {response.message && (
              <Alert
                variant={response.status === "success" ? "success" : "danger"}
              >
                {" "}
                {response.message}{" "}
              </Alert>
            )}
            <hr />
            {fields.map((item, i) => (
              <CustomInOutField {...item} key={i} onChange={handleOnChange} />
            ))}
            <Button variant="primary" type="submit">
              Sign Up{" "}
            </Button>{" "}
            {/* Already have account */}
            <div className="text-end">
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </div>
          </Form>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
