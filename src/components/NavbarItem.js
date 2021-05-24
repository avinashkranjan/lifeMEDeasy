import React, { Component } from 'react'
import {

    Navbar,
    NavbarBrand,
    Nav,
    NavbarToggler,
    NavItem,
    NavLink,
} from 'reactstrap'
import { Collapse } from 'reactstrap'
import './Navbar.css'

class NavbarItem extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            isNavOpen: false,
        }
            this.toggleNav = this.toggleNav.bind(this)
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen,
        })
    }

    render() {
        return (
            <div className="nav-outer">
                <React.Fragment>
                    <Navbar dark color="#d81b60" expand="md" className="navbar" >
                        <div className="leftside">
                                <NavbarBrand className="ml-1 head" href="/">lifeMEDeasy</NavbarBrand>
                           
                        </div>
                        <div className="container">
                            <NavbarToggler onClick={this.toggleNav} className="toggle" />
                            <Collapse isOpen={this.state.isNavOpen} navbar >
                             
                              
                                <Nav className="ml-auto Navitem rightside" navbar>
                                    <NavItem active>
                                        <NavLink  href="Doctors" className="links">Doctors </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="patients" className="links"><span className="fa fa-info fa-lg"></span>Patients </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/covidpatient" className="links" ><span className="fa fa-info fa-lg"></span> Covid-19 Patients  </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/covidtest" className="links" ><span className="fa fa-info fa-lg"></span> Covid-19 Tests  </NavLink>
                                    </NavItem>
                                    <NavItem active>

                                        <NavLink href="/emergency" className="links" ><span className="fa fa-info fa-lg"></span> Emergencies</NavLink>
                                    </NavItem>

                                    <NavItem active>
                                        <NavLink href="/appointment" className="links" ><span className="fa fa-info fa-lg"></span> Appointment&apos;s </NavLink>
                                    </NavItem>

                                    <NavItem active>
                                        <NavLink href="/" className="links" ><span className="fa fa-info fa-lg"></span> Let&apos;s Talk </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="#" className="links">
                                            <span className="fa fa-info fa-lg"></span>{' '}
                                            SignIn/SignUp{' '}
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </Collapse>
                        </div>
                    </Navbar>
                </React.Fragment>
            </div>
        )
    }
}

export default NavbarItem
