import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
export class Navigation extends Component {
    render() {
        return (
            <Navbar bg="dark" expiend="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-niline p-2 bg-dark text-white" to="/">
                            Home
                        </NavLink>
                        <NavLink className="d-niline p-2 bg-dark text-white" to="/department">
                            Department
                        </NavLink>
                        <NavLink className="d-niline p-2 bg-dark text-white" to="/employee">
                            Employee
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}