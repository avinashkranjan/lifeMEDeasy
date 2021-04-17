import React, { Suspense,useState } from 'react';
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


function App() {
  const[dark,setMode] = useState(false)
    return (
      <div className={dark ? "App dark-mode": "App"}>
        <NavbarItem />
          <div className="nav">
        
            <label class="switch">
              <input type="checkbox" onChange={()=>setMode(!dark)}/>
              <span class="slider round"></span>
            </label>
          </div>
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

export default App;
