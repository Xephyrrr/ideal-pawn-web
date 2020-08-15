
import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const Register = () => {
  return(
    <div className = "registerPage">

      <Form>

        <Form.Group controlId="Name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />

        </Form.Group>

        <Form.Group controlId="Email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email" />
        </Form.Group>

        <Form.Group controlId="Email2">
          <Form.Label>Confirm Email</Form.Label>
          <Form.Control type="email" placeholder="Re-enter Email" />
        </Form.Group>

          <Button variant="light">Submit</Button>

      </Form>
    </div>
  );
}
export default Register;
