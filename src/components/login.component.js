import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormGroup,
  FormControl,
  FormLabel,
  Form,
} from "react-bootstrap";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function onSubmit(e) {
    e.preventDefault();

    window.location = "/";
  }

  return (
    <div className="Login">
      <Form onSubmit={onSubmit}>
        <FormGroup controlId="email" bsSize="large">
          <FormLabel>Email</FormLabel>
          <FormControl
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </FormGroup>
        <Button block bsSize="large" type="submit" disabled={!validateForm()}>
          Login
        </Button>
        <Link
          to="/signup"
          block
          bsSize="large"
          style={{ display: "flex", justifyContent: "center" }}
        >
          Don't have an account?
        </Link>
      </Form>
    </div>
  );
}
