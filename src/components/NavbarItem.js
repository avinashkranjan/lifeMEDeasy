import React, { Component } from 'react';
import {
    Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Button, NavLink
} from 'reactstrap';
import { Collapse } from 'reactstrap';
import './Navbar.css';

class NavbarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,


        };

        this.toggleNav = this.toggleNav.bind(this);


    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }



    render() {
        return (
            <div>
                <React.Fragment>
                    <Navbar dark color="#d81b60" expand="md" className="navbar" >

                        <div className="container">
                            <NavbarBrand className="ml-1">lifeMEDeasy</NavbarBrand>
                            <NavbarToggler onClick={this.toggleNav} />

                            <Collapse isOpen={this.state.isNavOpen} navbar >
                                <Nav navbar className="Navitem">
                                    <NavItem active>
                                        <NavLink href="/">Doctors </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/" ><span className="fa fa-info fa-lg"></span>Patients </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/"  ><span className="fa fa-info fa-lg"></span> Emergencies</NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/"  ><span className="fa fa-info fa-lg"></span> Let's Talk </NavLink>
                                    </NavItem>
                                    <NavItem active>
                                        <NavLink href="/"  ><span className="fa fa-info fa-lg"></span>  </NavLink>
                                    </NavItem>

                                </Nav>

                                <Nav className="ml-auto" navbar>

                                    <NavItem>                                                                                     
                                                <button className="circle" > Login </button>
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


export default NavbarItem;
