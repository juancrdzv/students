import React, { useContext } from 'react';
import { StoreContext } from "../../contexts/Store";
import Display from './display';
import { useHistory } from "react-router-dom";

const Students = () => {
    const [store,dispatch] = useContext(StoreContext);
    let history = useHistory();

    const selectStudent = (event)=>{
        event.stopPropagation();
        let name = event.currentTarget.getAttribute('name');
        dispatch((store)=>{
            let copyStore = {...store};
            copyStore.currentStudent = name;
            return copyStore;
        });
        history.push(`/student/${name}`);
    };

    const deleteStudent = (event)=>{
        event.stopPropagation();
       
        let name = event.target.getAttribute('name');
        
        dispatch((store) => {
            let copyStore = { ...store };
            for(let i=0;i<copyStore.students.length;i++){
                if(copyStore.students[i].firstname === name){
                    copyStore.students.splice(i,1);
                    break;
                }
            }
            return copyStore;    
        });
    };

    return (<Display selectStudent={selectStudent} store={store} deleteStudent={deleteStudent}></Display>);
};

export default Students;