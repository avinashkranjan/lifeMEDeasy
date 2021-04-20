
import React, { Suspense,useState } from 'react';
import NavbarItem from './components/NavbarItem';
import Footer from './components/Footer';

import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom'
import Loader from './components/Loader/Loader'
import Login from './components/Login'
import DoctorRegister from './components/DoctorRegister'
import Register from './components/PatientRegister'
import Appointments from './components/Appointments'
import Emergency from './components/Emergency'
import Header from './components/HeaderComponent'
import './App.css'

function App() {
  const[dark,setMode] = useState(false)
    return (
      <div className="App">
        <NavbarItem />
        {/* <Login /> */}
        {/* <Header /> */}
        {/* <DoctorRegister /> */}
        {/* <Register /> */}
        <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Switch>
            <Route
              path="/Login"
              component={Login}

            />
            <Route
              path="/Doctors"
              component={DoctorRegister}

            />
            <Route
              path="/patients"
              component={Register}

            />
            <Route
              path="/appointment"
              component={Appointments}

            />
            <Route
              path="/emergency"
              component={Emergency}

            />

            <Route
              path=""
              component={Header}
            />
          </Switch>
          </Suspense>
        </BrowserRouter>
        <Footer />
      </div>
    );


}

export default App
