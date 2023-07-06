import { Button, Form, Container } from 'react-bootstrap';
import './SignupForm.css'
import axios from 'axios'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'


function SignupForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setEmail('');
    setPassword('');
    axios
      .post('http://localhost:8000/signup', { name: name, email: email, password: password })
      .then((res) => {
        console.log("Inside .then block")
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });
    navigate('/home', { replace: true })
  };

  return (
    <div className='signup-div' style={{ minHeight: "63vh" }}>
      <Container>

        <h1 className='header'>SIGNUP</h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control value={name} name='name' type="name" placeholder="Enter name" onChange={(e) => setName(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={email} name='email' type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={password} name='password' type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button className='btn' variant="success" type="submit" >
            SignUp
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default SignupForm;