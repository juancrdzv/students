import React from 'react';
import Form from 'react-bootstrap/Form';

const Display = ({name,label,onChange,type,value})=>{
    return (<Form.Group>
        <Form.Label>{label}</Form.Label>
        <Form.Control
            value={value}
            onChange={onChange}
            required
            type={type}
            placeholder={label}
            name={name}
        />
        <Form.Control.Feedback type="invalid">
            {`Please type a ${label}`}
        </Form.Control.Feedback>
    </Form.Group>);
};

export default Display;