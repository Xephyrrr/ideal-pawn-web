import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom';

const LogIn = () => {
  return(
    <div className = "LoginForm">

      <Form>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="" />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Remember Me" />
        </Form.Group>

          <Button variant="light">Login</Button>

        <Form.Text className="text-muted">
          If you do not have an account


            <NavLink to="/register" activeClassName="active">
             Register
            </NavLink>

        </Form.Text>



      </Form>
    </div>
  );
}
export default LogIn;
