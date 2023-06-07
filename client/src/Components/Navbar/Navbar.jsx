import React, { useEffect } from 'react'
import './Navbar.css'
const Navbar = () => {
    useEffect(() => {
        fetch('http://localhost:4000/')
          .then(response => response.json())
          .then(data => {
            // Handle the response data
            console.log(data);
          })
          .catch(error => {
            // Handle any errors
            console.error(error);
          });
      }, []);
    return (
        <div className='navbar-section'>
            <div className="navbar-container">
                <div className="navbar-content">
                    <div className="main-logo">
                        <a href="/">
                            <img
                                alt="Coding Ninjas"
                                src="https://files.codingninjas.in/logo_variants-white-25005.png" />
                        </a>
                    </div>
                    <div>Courses</div>
                    <div>Scholarship</div>
                    <div>Community</div>
                    <div>Practice</div>
                    <div >
                        <img
                            alt="Ninjas Career Camp"
                            width="134"
                            height="30"
                            className="nav-image  ng-lazyloaded"
                            src="https://files.codingninjas.in/careercamp-12614.svg" />
                    </div>
               
                    <button className='login-button'>
                         <span>Login </span>
                       </button>
                       
                  
              
                       <button className='enrol-button'>
                         <span> Enrol Now </span>
                       </button>
                      
                  
                          
                     
                </div>
            </div>
        </div>
    )
}

export default Navbar