import {Card, CardGroup , Container} from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import './ExploreCity.css'

function ExploreCity() {
//to fetch city name from url 
// http://localhost:3000/explore/:name
const {name} = useParams()
console.log(name)


  return (
    <div className='explore-city'>
      <Container>
        <h1 className='header'>EXPLORE CITY </h1>
        <hr/>
        <CardGroup>
          <Card>
          <Container>
            <Card.Img className='img' variant="top" src="https://blogs.himalyantrips.com/wp-content/uploads/2019/03/travel-and-tourism.jpg" />
            <Card.Body>
              <Card.Title>Pune</Card.Title>
            </Card.Body>
            <Card.Footer>
              <small className="text">City Information </small>
            </Card.Footer>
          </Container>
          </Card>
        </CardGroup>
      </Container>
    </div>
  );
}

export default ExploreCity;