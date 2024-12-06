/**
 * Author: carlos Galdona 301271660
 * Date: December 05, 2024
 */

import { Container, Card, Row, Col } from 'react-bootstrap';
import p3 from '../images/webdesign.jpg';
import p4 from '../images/computer.jpg';
function Services() {
    return (
        <>
            {/* Main container with dark background and light text */}
            <div className="App bg-dark text-light">
                <header className="App-header">
                    <Container>
                        {/* Page title */}
                        <h1 className="text-center">Services</h1>
                        <p>Need help with IT?:</p>
                        
                        {/* Row to hold the project cards */}
                        <Row className="justify-content-center">
                            {/* First project card */}
                            <Col md={4} className="d-flex justify-content-center">
                                <Card style={{ width: '20rem' }} className="m-3">
                                <Card.Img variant="top" src={p3} />                               
                                    <Card.Body>
                                        <Card.Title>Web Design</Card.Title>
                                        <Card.Text>
                                            Your vision, my web expertise. Let's create your dream website
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            
                            {/* Second project card */}
                            <Col md={4} className="d-flex justify-content-center">
                                <Card style={{ width: '20rem' }} className="m-3">
                                <Card.Img variant="top" src={p4} />
                                    <Card.Body>
                                        <Card.Title>Computer Maintenance</Card.Title>
                                        <Card.Text>
                                          Keep your tech running smoothly!.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Container>
                </header>
            </div>
        </>
    );
}

export default Services;