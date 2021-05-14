
import React, { Suspense } from 'react';
import NavbarItem from './components/NavbarItem';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';

const Login = React.lazy(()=>import("./components/Login"));
const Register = React.lazy(()=>import('./components/PatientRegister'));
const DoctorRegister = React.lazy(()=>import('./components/DoctorRegister'));
const Appointments = React.lazy(()=>import('./components/Appointments'));
const Emergency = React.lazy(()=>import('./components/Emergency'));
const Header = React.lazy(()=>import('./components/HeaderComponent'));
const Covidtest = React.lazy(()=>import('./components/Covidtest'));
const Covidpatient = React.lazy(()=>import('./components/CovidPatient'));


function App() {

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
             exact path="/Login"
              component={Login}

            />
            <Route
             exact path="/Doctors"
              component={DoctorRegister}

            />
            <Route
             exact path="/patients"
              component={Register}

            />
            <Route 
            exact path="/covidpatient"
            component={Covidpatient}
            />
            <Route 
            exact path="/covidtest"
            component={Covidtest}
            />
            <Route
             exact path="/appointment"
              component={Appointments}

            />
            <Route
             exact path="/emergency"
              component={Emergency}

            />

            <Route
             exact path=""
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
