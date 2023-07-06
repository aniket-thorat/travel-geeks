import axios from 'axios';
import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function AddExperience() {

  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name + " " + desc + " ");
    console.log("button clicked")

    axios.post("http://localhost:8000/add", { city_name: name, short_desc: desc, img: image })
      .then((res) => {
        console.log("Inside .then block")
      })
      .catch((err) => {
        console.log('Error in CreateBook!');
      });

    navigate('/home', { replace: true })

  }

  return (
    <div className='add-div' style={{ minHeight: "63vh" }}>
      <Container>
        <h1 className='header'>ADD EXPERIENCE</h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>City Name</Form.Label>
            <Form.Control type="name" placeholder="Enter city name" value={name} onChange={(e) => setName(e.target.value)} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Short Description </Form.Label>
            <Form.Control as="textarea" rows={9} placeholder="Enter details about city..." value={desc} onChange={(e) => setDesc(e.target.value)} />
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Upload Photos</Form.Label>
            <Form.Control type="file" value={image} onChange={(e) => setImage(e.target.value)} />
          </Form.Group>
          <Button className='btn' variant="success" type="submit" >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default AddExperience;