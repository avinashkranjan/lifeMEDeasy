import React, { Suspense, Component } from 'react'
import NavbarItem from './components/NavbarItem'
import Footer from './components/Footer'
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
const Forget = React.lazy(()=>import('./components/Forget'));


class App extends Component {
  render() {
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
            path="/Forget" 
            component={Forget} 
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


}

export default App
