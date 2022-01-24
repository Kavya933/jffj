import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link,NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-dark">
        <div className="container">    
        <NavLink className="navbar-brand" to="/"><h3 className = "logo">Kav<span>Ya</span></h3></NavLink>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon ={faBars} style ={{ color:"#fff"}}/>
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <NavLink className="nav-link"  to="/"exact activeclassname="active">Home <span className="sr-only"></span></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact activeclassname="active">about</NavLink>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/education" exact activeclassname="active">education</Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/skill" exact activeclassname="active">skill</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/project" exact activeclassname="active">projects</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact activeclassname="active">contact</NavLink>
            </li>
           
          </ul>
        </div>
        </div>
      </nav>
    )
}

export default Navbar
