import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import './index.css';

const home_card= () => {
  return (
    <div className='welcome'>
    <Container>
        <Row>
            <Col lg={6}>
                50%
            </Col>
            <Col lg={6}>
                50%
            </Col>
        </Row>
    </Container>
    </div>

  )
}

export default home_card;