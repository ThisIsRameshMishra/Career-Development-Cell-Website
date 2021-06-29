import React from 'react';
import {NavLink} from "react-router-dom"; 
const Menu=()=>{
  return(
      <>
       <div className="container-fluid nav bg">
        <div className='row'>
            <div className="col-10 mx-auto">

       
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="#">
            Placement Cell
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeClassName="menu_active"
                 exact className="nav-link active" aria-current="page" to="/">
                  Cell
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/company">
                  Company
                </NavLink>
             </li>
             <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/volunteer">
                  Volunteer
                </NavLink>
             </li>
             <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/student">
                  Student
                </NavLink>
             </li>
             <li className="nav-item">
                <NavLink activeClassName="menu_active" className="nav-link" to="/contact">
                  Contact
                </NavLink>
             </li>
            
            </ul>
            
          </div>
        </div>
      </nav>
      </div>
        </div>
    </div>
      </>
  );
  
}
export default Menu;