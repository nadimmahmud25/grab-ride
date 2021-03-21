import React, { createContext, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import Login from '../Login/Login';
import Navbar from '../Navbar/Navbar';
import Ride from '../Ride/Ride';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Transport from '../Transport/Transport';
import Destination from '../Destination/Destination';

export const userContex = createContext()
const Home = () => {

    const [loggedInUser, setLoggedInUser] = useState({});

    return (
        <userContex.Provider value ={[loggedInUser, setLoggedInUser]}>
        <Router>
                <Navbar></Navbar>
                <Switch>
                  <Route exact path="/">
                    <Transport/>
                  </Route>

                  <Route  path="/contract/:id">
                    <Destination/>
                  </Route>

                  <Route path="/login">
                    <Login></Login>
                  </Route>

                  <PrivateRoute path="/booking/:id">
                    <Ride/>
                  </PrivateRoute>
                </Switch>
        </Router>
        </userContex.Provider>
    );
};

export default Home;