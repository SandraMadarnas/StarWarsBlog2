import React from "react";
import { Link, NavLink } from 'react-router-dom';
import "../styles/layout/navbar.css"
import FavoritesDropwdown from "../components/FavoritesDropdown";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';



const NavBar = () => {

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand><Link to="/"><img src={"/media/logo.png"}/></Link></Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="mx-5">
                        <NavLink to="/">Home</NavLink>  
                    </Navbar.Text>
                    <Navbar.Text>
                        <FavoritesDropwdown />
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}


export default NavBar;