import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Input } from '../../components';
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Display = ({ validated, handleSubmit, change, schema, show, handleClose }) => {

    return <>
        <Container>
            <br></br>
            <Row>
                <Col>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Input value={schema.firstname} type={'text'} onChange={change} name={'firstname'} label={'First Name'}></Input>
                        <Input value={schema.lastname} type={'text'} onChange={change} name={'lastname'} label={'Last Name'}></Input>
                        <Input value={schema.street} type={'text'} onChange={change} name={'street'} label={'Street Number/Name'}></Input>
                        <Input value={schema.city} type={'text'} onChange={change} name={'city'} label={'City'}></Input>
                        <Input value={schema.phone} type={'number'} onChange={change} name={'phone'} label={'Phone number'}></Input>
                        <Input value={schema.gpa} type={'number'} onChange={change} name={'gpa'} label={'GPA'}></Input>
                        <Button type="submit">Submit</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Student added</Modal.Title>
            </Modal.Header>
            <Modal.Body>Student has been added</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    </>
};

export default Display;