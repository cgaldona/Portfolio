/**
 * Author: carlos Galdona 301271660
 * Date: December 05, 2024
 */
import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import p1 from '../images/snake.png';
import p2 from '../images/signos.jpg';

function Projects() {
    return (
    <>
        <div className="App bg-dark text-light">
            <header className="App-header">
                <Container>
                    <h1 className="text-center">Projects</h1>                    
                    <Row className="justify-content-center">                        
                        <Col md={4} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className="m-3">
                                <Card.Img variant="top" src={p1} />
                                <Card.Body>
                                    <Card.Title>Project 1</Card.Title>
                                    <Card.Text>
                                        It is the famous snake game, It will grow as long as you eat, let's say, food "red cube".
                                    </Card.Text>
                                    <Card.Text>
                                        <a href="https://github.com/cgaldona/canvasgame">Github Link</a>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={4} className="d-flex justify-content-center">
                            <Card style={{ width: '18rem' }} className="m-3">
                                <Card.Img variant="top" src={p2} />
                                <br></br>                                
                                <Card.Body>
                                    <Card.Title>Project 2</Card.Title>
                                    <Card.Text>
                                        Just a multiplication table generator, using JavaScript and CSS
                                    </Card.Text>
                                    <Card.Text>
                                        <a href="https://github.com/cgaldona/multiplicationtable">Github Link</a>
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

export default Projects;