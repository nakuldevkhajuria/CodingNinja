
import { useState } from 'react'
import './Navbar.css'
const Navbar = () => {

    const [isLoggedIn,setIsLoggedIn] = useState(false)
    const [showForm, setShowForm] = useState(false); // State to toggle the form visibility
    const [isBlurred, setIsBlurred] = useState(false); // State variable to control the blur effect

    const handleShowForm = () => {
        setShowForm(true); // Show the form on button click
        setIsBlurred(!isBlurred);
      };
      const handleCloseForm = () => {
        setShowForm(false);
        setIsBlurred(false);
      };
      const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        mobile: '',
        password: ''
      });
    const handleLogout =()=>{
      setIsLoggedIn(false)
    }
      const handleSubmitLogin = (event) => {
        // event.preventDefault(); // Prevents the default form submission behavior
    
        // Make the HTTP request
        // fetch('https://coding-ninja-backend.vercel.app/api/user/login', {
        fetch('http://localhost:4000/api/user/login', {
    
        method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            console.log(data);
            setIsLoggedIn(true)
            console.log(' user is logged in',isLoggedIn)
          })
          .catch((error) => {
            // Handle any errors
                    console.log('it is clear the user is not logged in',isLoggedIn)
    
            console.error(error);
            
    
          });
      };
    
      const handleSubmitRegister = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
    
        // Make the HTTP request
        // fetch('https://coding-ninja-backend.vercel.app/api/user/register', {
          fetch('http://localhost:4000/api/user/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(formData)
        })
          .then((response) => response.json())
          .then((data) => {
            // Handle the response from the server
            console.log(data);
            setShowSuccessAnimation(true);
            // Reset the form data
            setFormData({
              firstname: '',
              lastname: '',
              email: '',
              mobile: '',
              password: ''
            });
            setTimeout(() => {
              setShowSuccessAnimation(false);
            }, 3000); // Change the duration (in milliseconds) as needed
          })
          .catch((error) => {
            // Handle any errors
            console.error(error);
          });
      };
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };
    
      const [showSuccessAnimation, setShowSuccessAnimation] = useState(false);
      //after we click on signup
      const [formToggle,setFormToggle] = useState(true)

      
  const handleFormLogin = ()=>{
    setFormToggle(true)
  
  }
  const handleFormSignup = ()=>{
    setFormToggle(false)
  }
    
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
                    <div id='login-enroll'>
                        { isLoggedIn ?
                             
                         <a href="#work-box">
                         {/* <button className='login-button'> */}
                             <span>MyClassRoon </span>
                         {/* </button> */}
                     </a> :
                      <a >
                      <button className='login-button' onClick={handleShowForm}>
                          <span>Login </span>
                      </button>
                  </a>
                        }

                        <a href="#work-box">
                            <button className='enrol-button'>
                                <span> Enroll Now </span>
                            </button>
                        </a>
                    </div>



                </div>

                <div className='small-navbar-content'>
                    <div className="dropdown">
                        <button className="dropbtn">Dropdown</button>
                        
                        <div className="dropdown-content">
                            <a href="/">Courses</a>
                            <a href="/">Scholorship</a>
                            <a href="/">Practice</a>

                            <a >
                                <button className='login-button' onClick={handleShowForm}>
                                    <span>Login </span>
                                </button>
                            </a>

                            <a href="#work-box">
                                <button className='enrol-button'>
                                    <span> Enroll Now </span>
                                </button>
                            </a>

                        </div>
                    </div>
                    <div className="main-logo">
                        <a href="/">
                            <img
                                alt="Coding Ninjas"
                                src="https://files.codingninjas.in/logo_variants-white-25005.png" />
                        </a>
                    </div>
                    <div>
                        <a href="#work-box">
                            <button className='login-button'>
                                <span>Login </span>
                            </button>
                        </a>
                    </div>
                </div>

            </div>

           { showForm && (
             <div className={`form-container ${isBlurred ? 'blur' : ''}`}>
               <button className="close-form-button" onClick={handleCloseForm}>
            X
          </button>
          <div className="options-container">
        <button className="option-button"  onClick={ handleFormLogin} >Login</button>
        <button className="option-button"  onClick={ handleFormSignup}> Sign Up</button>
      </div>
      { formToggle &&
             <form className="enrollment-form" onSubmit={handleSubmitLogin}>
         
             <input
               className="form-input"
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Email"
               required
             />
             
             <input
               className="form-input"
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Password"
               required
             />
             <button className="form-button" type="submit">Login</button>
           </form>
}
{ !formToggle && showSuccessAnimation && (
  <div className="success-animation">
    <p>You have successfully registered!</p>
  </div>
)}
      { 
      
      !formToggle &&
             <form className="enrollment-form" onSubmit={handleSubmitRegister}>
             <input
               className="form-input"
               type="text"
               name="firstname"
               value={formData.firstname}
               onChange={handleChange}
               placeholder="First Name"
               required
             />
             <input
               className="form-input"
               type="text"
               name="lastname"
               value={formData.lastname}
               onChange={handleChange}
               placeholder="Last Name"
             />
             <input
               className="form-input"
               type="email"
               name="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="Email"
               required
             />
             <input
               className="form-input"
               type="number"
               name="mobile"
               value={formData.mobile}
               onChange={handleChange}
               placeholder="Mobile"
               required
             />
             <input
               className="form-input"
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Password"
               required
             />
             <button className="form-button" type="submit">SignUp</button>
           </form>
}
           </div>
          )}
        </div>
    )
}

export default Navbar