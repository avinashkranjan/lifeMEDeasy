import React, { Suspense,Component } from 'react';
import NavbarItem from './components/NavbarItem';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';
import Covidpatient from './components/covid-patient';


const Login = React.lazy(()=>import("./components/Login"));
const Register = React.lazy(()=>import('./components/PatientRegister'));
const CovidPatient = React.lazy(()=>import('./components/covid-patient'));
const DoctorRegister = React.lazy(()=>import('./components/DoctorRegister'));
const Appointments = React.lazy(()=>import('./components/Appointments'));
const Emergency = React.lazy(()=>import('./components/Emergency'));
const Header = React.lazy(()=>import('./components/HeaderComponent'));


class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarItem />
        {/* <Login /> */}
        {/* <Header /> */}
        {/* <DoctorRegister /> */}
        {/* <Register /> */}
        {/* < CovidPatient /> */}
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
              path="/covid-patient"
              component={CovidPatient}

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

}

export default App;
