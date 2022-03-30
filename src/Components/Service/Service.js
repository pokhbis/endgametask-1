import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './Service.css';
import math from "../../Images/Mathematics.png";
import physics from "../../Images/physics.png";
import chemistry from "../../Images/chemistry.png";
import ict from "../../Images/ict.png";

const Service = () => {
    return (
        <div className='service '>
            <h3 className='service-title py-3'>Our Courses</h3>
            <div className='card'>
            <Row xs={1} md={2} className="g-4">
    <Col className='' >
      <Card className='card-body card-col'>
        <Card.Img variant="top" src={math} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='service-conductor'>
      <small className="text">Course Conductor: Dr Harry</small>
      <Button className='service-btn'>Buy Course</Button>
    </Card.Footer>
      </Card>
    </Col>
    <Col >
      <Card className='card-body'>
        <Card.Img variant="top" src={physics} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='service-conductor'>
      <small className="text">Course Conductor: Dr Harry</small>
      <Button className='service-btn'>Buy Course</Button>
    </Card.Footer>
      </Card>
    </Col>
    <Col >
      <Card className='card-body'>
        <Card.Img variant="top" src={chemistry} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='service-conductor'>
      <small className="text">Course Conductor: Dr Harry</small>
      <Button className='service-btn'>Buy Course</Button>
    </Card.Footer>
      </Card>
    </Col>
    <Col >
      <Card className='card-body'>
        <Card.Img variant="top" src={ict} />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            This is a longer card with supporting text below as a natural
            lead-in to additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
        <Card.Footer className='service-conductor'>
      <small className="text">Course Conductor: Dr Harry</small>
      <Button className='service-btn'>Buy Course</Button>
    </Card.Footer>
      </Card>
    </Col>
  
</Row>
            </div>
     
        </div>
    );
};

export default Service;