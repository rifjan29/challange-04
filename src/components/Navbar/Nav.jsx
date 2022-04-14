import React from "react";
// import "./Nav.css";
import logo from '../../assets/img/logo.png';


const Nav = () => {
    return (
        <>
          <nav className="navbar navbar-expand-lg navbar-light fixed-top p-3">
            <div className="container">
              <a className="navbar-brand" href="#">
                  <img src={logo} alt="asga" />
              </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarScroll">
                <ul className="navbar-nav ms-lg-auto my-2 my-lg-0 navbar-nav-scroll">
                  <li className="nav-item px-4">
                    <a className="nav-link " aria-current="page" href="#services">Our Services</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link " aria-current="page" href="#why">Why Us</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link " aria-current="page" href="#testimonial">Testimonial</a>
                  </li>
                  <li className="nav-item px-3">
                    <a className="nav-link " aria-current="page" href="#faq">FAQ</a>
                  </li>
                  <li className="nav-item px-3">
                    <button type="submit" className="btn btn-success">Register</button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>  
        </>
    )
}

export default Nav