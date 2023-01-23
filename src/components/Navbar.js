import React from "react";
import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink exact to="/projects">Projects</NavLink>
            <NavLink exact to="/projects/new">Add Project</NavLink>
        </nav>
    );
}

export default NavBar;
