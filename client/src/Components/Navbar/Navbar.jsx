
import './Navbar.css'
const Navbar = () => {
 
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
                    <a href="#work-box">
                    <button className='login-button'>
                         <span>Login </span>
                       </button>
                       </a>
                  
              <a href="#work-box">
                       <button className='enrol-button'> 
                         <span> Enrol Now </span>
                       </button>
                       </a>
                  
                          
                     
                </div>
            </div>
        </div>
    )
}

export default Navbar