import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form,
} from "react-bootstrap";
import { useFormFields } from "../lib/hookLib";
import "./Login.css";

export default function SignUp() {
  const [fields, handleFieldChange] = useFormFields({
    email: "",
    password: "",
    confirmPassword: "",
    confirmationCode: "",
  });

  const history = useHistory();

  function validateForm() {
    return (
      fields.email.length > 0 &&
      fields.password.length > 0 &&
      fields.password === fields.confirmPassword
    );
  }
  function onSubmit(e) {
    e.preventDefault();

    window.location = "/login";
  }

  return (
    <div className="Login">
      <Form onSubmit={onSubmit}>
        <FormGroup controlId="email">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={fields.email}
            onChange={handleFieldChange}
            placeholder="Email"
          />
        </FormGroup>
        <FormGroup controlId="password">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={fields.password}
            onChange={handleFieldChange}
            placeholder="Password"
          />
        </FormGroup>
        <FormGroup controlId="confirmPassword">
          <FormLabel>Confirm Password</FormLabel>
          <FormControl
            type="password"
            value={fields.confirmPassword}
            onChange={handleFieldChange}
            placeholder="Confirm Password"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit" disabled={!validateForm()}>
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
