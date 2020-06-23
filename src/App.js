import React, { useState } from 'react';
import { NavBar } from "./components"
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import { AddStudent, Student, Students } from "./views";
import { students } from './mock';
import { StoreContext } from './contexts/Store';

const App = () => {
    const [store, dispatch] = useState({ currentStudent: null, students });
    return (
        <StoreContext.Provider value={[store,dispatch]}>
            <Router>
                <NavBar />
                <Switch>
                    <Route path="/students">
                        <Students />
                    </Route>
                    <Route path="/student/:name">
                        <Student />
                    </Route>
                    <Route path="/">
                        <AddStudent />
                    </Route>
                </Switch>
            </Router>
        </StoreContext.Provider>);
};

export default App;