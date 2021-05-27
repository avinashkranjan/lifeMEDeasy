import React, { Suspense, useState } from 'react';
import NavbarItem from './components/NavbarItem';
import Footer from './components/Footer';
import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router-dom';
import Loader from './components/Loader/Loader';
import './App.css';
import Scroll from './components/ScrollToTop';
import Cards from './components/Cards';
//import Header from './components/HeaderComponent';

const Login = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/Login')), 3000);
  });
});

const Header = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/HeaderComponent')), 3000);
  })
})

const Register = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/PatientRegister')), 3000);
  });
});
const DoctorRegister = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('./components/DoctorRegister')), 3000);
  });
});
const Appointments = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Appointments')), 3000);
    });
  });
const Emergency = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Emergency')), 3000);
    });
  });
const Forget = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Forget')), 3000);
    });
  });
const Covidtest = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/Covidtest')), 3000);
    });
  });
const Covidpatient = React.lazy(() => {
    return new Promise(resolve => {
      setTimeout(() => resolve(import('./components/CovidPatient')), 3000);
    });
  });

function App() {
 const[dark,setMode] = useState(false) 
    return (
     
      <div className={dark ? "App dark-mode": "App"}>
        <NavbarItem /> 
        <div className="nav2" >
                        <label className="switch" >
                        <input type="checkbox" onChange={()=>setMode(!dark)}/>
                        <span className="slider round"></span>
                        </label>
                        </div>                      
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
            <Route exact path="/" component={Header} />        
            <Route
              path="/Doctors"
              component={DoctorRegister}
            />
            <Route
              path="/patients"
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
            <Route exact path="/tips" component={Cards}/>
          </Switch>
          </Suspense>
        </BrowserRouter>
        <Scroll/>
        <Footer />
      </div>
    );
}

export default App
