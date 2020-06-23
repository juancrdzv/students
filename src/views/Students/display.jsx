import React from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import "./styles.scss";

const Display = ({store,deleteStudent,selectStudent})=>{
    return (<>
    <br></br>
    <Table striped bordered hover>
        <caption>Click on a row to see student information</caption>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Street Number/Name</th>
                <th>City</th>
                <th>Phone number</th>
                <th>GPA</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {store.students.map((el, ind) => {
                return <tr name={el.firstname} key={ind} onClick={selectStudent}>
                    <td>{ind}</td>
                    <td>{el.firstname}</td>
                    <td>{el.lastname}</td>
                    <td>{el.street}</td>
                    <td>{el.city}</td>
                    <td>{el.phone}</td>
                    <td>{el.gpa}</td>
                    <td><Button name={el.firstname} id={ind} onClick={deleteStudent} variant="dark">X</Button></td>
                </tr>
            })}
        </tbody>
    </Table>
    </>
    )
}

export default Display;