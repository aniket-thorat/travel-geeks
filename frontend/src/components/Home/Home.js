import { useEffect, useState } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import axios from 'axios';
// import ExploreCity from '../ExploreCity/ExploreCity';
import './Home.css'
import { Link } from 'react-router-dom';

function Home(){
    const [data, setData] = useState([]);
    const fetchData = () => {
        return axios.get("http://localhost:8000/home")
            .then((response) => setData(response.data));
    }
    console.log(data);
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div style={{minHeight : "63vh"}}>
        <Container className='mt-5'>
            {
                data.map(m => (
                 
                    <Card className='mt-4'>
                        <Card.Header as="h5">{m.city}</Card.Header>
                        <Card.Body>
                            <Card.Title>User : <i>{m.name}</i></Card.Title>
                            <hr></hr>
                            <Card.Text>
                                <h6>Short Desc:</h6>
                                {m.short.substring(0 , 100)}
                                <br/>
                                <Link to={`/explore/${m.city}`}>Read more</Link>
                                <br/>
                                <Button href={`/explore/${m.city}`} variant="primary">Explore</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </Container>
        </div>
    );
}

export default Home;