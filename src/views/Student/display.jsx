import React from 'react';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./styles.scss";

const Display = ({ student }) => {
    return <> 
    <br></br>
    <Card className="student-card">
        <Container>
            <Row>
                <Col>
                    <Card.Img variant="top" src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png" />
                </Col>
                <Col>
                    <Card.Body>
                        <Card.Title>{student.firstname} {student.lastname}</Card.Title>
                        <Card.Text>
                            <div><span>Street Number/Name: {student.street}</span></div>
                            <div><span>City: {student.city}</span></div>
                            <div><span>Phone number: {student.phone}</span></div>
                            <div><span>Gpa: {student.gpa}</span></div>
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
        </Container>
    </Card>
    </>
};

export default Display;