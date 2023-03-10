import React from "react";
import "./navbar.css";
import {FiLogOut} from 'react-icons/fi'
import { BrowserRouter as Router,Route,Routes, Link } from "react-router-dom";

const Navbar = () => {
  return (
    
    // <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom navMenu">
    //   <div className="container-fluid">
    //     <div className="logo title">Normal.</div>
    //     <br></br>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarSupportedContent"
    //       aria-controls="navbarSupportedContent"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
    //         <li className="nav-item m-2">
    //           <Link to="/">Home</Link> 
    //         </li>
    //         <li className="nav-item m-2">
    //           <Link to="/jobs">Find Jobs</Link>
    //         </li>
    //         <li className="nav-item m-2">
    //           <Link to="/scheme">Schemes</Link>
    //         </li>

    //         <li className="nav-item m-2">
    //           <Link to="/grievance">Grievance</Link>
    //         </li>

    //         <li className="nav-item m-2">
    //           <Link to="/resume">Resume Maker</Link>
    //         </li>

    //         <li className="nav-item m-2">
    //           <Link to="/chat">ChatBot</Link>
    //         </li>


    //         <li className="nav-item m-2">
    //           <Link to="/blogs">Blogs</Link>
    //         </li>
            
    //       </ul>
    //       <button class="btn btn-primary me-md-2" type="button">
    //       <Link class = "text_b" to="/start">Logout</Link>
    //       </button>
    //       {/* <button class="btn btn-primary me-md-2" type="button">
    //       <Link class = "text_b" to="/login">Login</Link>
    //       </button> */}
    //     </div>
    //   </div>
    // </nav>
    <div className='navbar d-flex'>
        <h2 className='title' style={{color:'rgba(11, 0, 109)'}}>Normal.</h2>
        <div id='navbar_links_div'>  
          <a href="/" style={{textDecoration: 'none', color: 'black'}} id="home_link" className='navbar_links'>Home</a>
          <a href="/jobs" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Find Jobs</a>
          <a href="/scheme" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Schemes</a>
          <a href="/grievance" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Grievance</a>
          <a href="/resume" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Resume Maker</a>
          <a href="/chat" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Chat</a>
          <a href="/blogs" style={{textDecoration: 'none', color: 'black'}} className='navbar_links'>Blogs</a>
          <a href="/start" style={{textDecoration: 'none', color: 'white', width:'max-content', textAlign:'center'}} id='create_acc_btn' className='navbar_links'><FiLogOut/></a>
        </div>
      </div>
  );
};
export default Navbar;