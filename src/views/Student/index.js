import React,{useEffect,useContext,useState} from 'react';
import { useParams } from "react-router-dom";
import { StoreContext } from '../../contexts/Store';
import Display from './display';

const Student = ()=>{
    const [store] = useContext(StoreContext);
    let { name } = useParams();
    const [student,setStudent] = useState('');

    useEffect(()=>{
        let st = store.students.filter((el)=> name === el.firstname)[0];
        setStudent(st);
    },[]);

    return (<Display student={student}></Display>);
};

export default Student;