import axios from 'axios';
import { useState } from 'react';
import {Button ,Form ,Container} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Login.css' 

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') ;
const navigate = useNavigate() ;
const handleClick=(e)=>{
  e.preventDefault();
    setEmail('');
    setPassword('');
    axios
      .post('http://localhost:8000/login', { email: email, password: password })
      .then((res) => {
        console.log("Inside .then block")
      })
      .catch((err) => {
        console.log('Error!');
      });
    navigate('/home', { replace: true })
}

  return (
    <div className='login-div' style={{minHeight : "63vh"}}>
    <Container>
    <h1 className='header'>LOGIN</h1>
    <hr/>
    <Form onSubmit={handleClick}>
        <Form.Group className="mb-3 mt-4" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control value={email} type="email" placeholder="Enter email" onChange={(e)=>setEmail(e.target.value)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control value={password} type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
      </Form.Group>

      <Button className='btn' variant="success" type="submit" >
        Login
      </Button>
    </Form>
    </Container>
    </div>
  );
}

export default Login;