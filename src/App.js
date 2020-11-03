import React, { Component } from "react";
import Header from "./components/HeaderComponent";
import DoctorLogin from "./components/Doctor/DoctorLogin";
import Register from "./components/PatientRegister";
import DoctorRegister from "./components/Doctor/DoctorRegister";
import NavbarItem from "./components/NavbarItem";
import Footer from "./components/Footer";
import Appointments from "./components/Appointments";
import Emergency from "./components/Emergency";
import Chat from "./components/Chat";
import { BrowserRouter } from "react-router-dom";
import {Route, Switch } from "react-router-dom";
import MapContainer from "./components/showmap.js";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <NavbarItem />
        <BrowserRouter>
          <Switch>
            <Route path="/Doctors" component={DoctorLogin} />
            <Route path="/DoctorsRegistration" component={DoctorRegister} />
            <Route path="/patients" component={Register} />
            <Route path="/appointment" component={Appointments} />
            <Route path="/emergency" component={Emergency} />
            <Route path="/chat" component={Chat} />
            <Route path="/map" component={MapContainer}/>
            <Route path="" component={Header} />
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
