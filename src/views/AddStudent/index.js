import React, { useState, useContext } from 'react';
import Display from './display';
import { StoreContext } from '../../contexts/Store';

const AddStudent = () => {
    const [validated, setValidated] = useState(false);
    const [, dispatch] = useContext(StoreContext);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    const [schema, setSchema] = useState({
        firstname: '',
        lastname: '',
        street: '',
        city: '',
        phone: '',
        gpa: ''
    });

    const change = (event) => {
        let name = event.target.getAttribute('name');
        let value = event.target.value;

        setSchema((schema) => {
            let copySchema = { ...schema };
            copySchema[name] = value;
            return copySchema;
        });
    }

    const handleSubmit = (event) => {
        const form = event.currentTarget;


        event.preventDefault();
        event.stopPropagation();
        if (form.checkValidity()) {
            dispatch((store) => {
                let copyStore = { ...store };
                copyStore.students.push(schema);
                return copyStore;
            });

            setSchema({
                firstname: '',
                lastname: '',
                street: '',
                city: '',
                phone: '',
                gpa: ''
            });

            setShow(true);
            setValidated(false);
        } else {
            setValidated(true);
        }
    };
    return <Display handleClose={handleClose} show={show} schema={schema} change={change} validated={validated} handleSubmit={handleSubmit} />
};

export default AddStudent;