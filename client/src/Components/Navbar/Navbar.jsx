
import { useState } from 'react'
import './Navbar.css'
import WorkExperience from '../WorkExperience/WorkExperience';
const Navbar = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)
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
    const handleLogout = () => {
        setIsLoggedIn(false)
    }
    const handleSubmitLogin = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

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
                console.log(' user is logged in', isLoggedIn)
                handleCloseForm()
            })
            .catch((error) => {
                // Handle any errors
                console.log('it is clear the user is not logged in', isLoggedIn)

                console.error(error);


            });
    };

    const handleSubmitRegister = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior

        // Make the HTTP requests
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
    const [formToggle, setFormToggle] = useState(true)


    const handleFormLogin = () => {
        setFormToggle(true)

    }
    const handleFormSignup = () => {
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
                    <div className='navbar-content-center'>
                        <div className='dropdown'>
                            Courses
                            &nbsp; <img  src="https://files.codingninjas.in/path-9515.svg" alt="dropdown-icon"></img>
                            <div className="dropdown-content" style={{ top: '1.2rem', height: '35rem', width: '45rem' }}>
                              <WorkExperience/>
                                <a href="/">   <button className="profile-option" onClick={handleLogout}>Logout</button></a>

                            </div>
                        </div>
                        <div className='dropdown' >
                            Scholorship<span style={{whiteSpace:'nowrap'}}>Upto 100% Off</span>
                            &nbsp; <img src="https://files.codingninjas.in/path-9515.svg" alt="dropdown-icon"></img>
                            
                        </div>
                        <div className='dropdown'>
                            Community
                            &nbsp; <img _ngcontent-serverapp-c80="" src="https://files.codingninjas.in/path-9515.svg" alt="dropdown-icon"></img>
                      
                        </div>
                        <div className='dropdown'>
                            Practice
                            &nbsp; <img _ngcontent-serverapp-c80="" src="https://files.codingninjas.in/path-9515.svg" alt="dropdown-icon"></img>
                            <div className="dropdown-content" style={{ top: '1.2rem' ,whiteSpace:'nowrap'}}>
                                <a href="/" >Coding Ninja Studio</a>
                                <hr style={{width:'50%'}} />
                                <a href="/" style={{textAlign:'left'}}>   Contest </a>
                                <a href="/" style={{textAlign:'left'}}>   Guided Paths </a>
                                <a href="/" style={{textAlign:'left'}}>   Code Problems </a>
                                <a href="/" style={{textAlign:'left'}}>   Interview Experiences </a>
                                <a href="/" style={{textAlign:'left'}}>   Contest </a>
                                <a href="/" style={{textAlign:'left'}}>   Mock Tests </a>

                            </div>
                        </div>
                        </div>
                    <div >
                        <img
                            alt="Ninjas Career Camp"
                            width="134"
                            height="30"
                            className="nav-image  ng-lazyloaded"
                            src="https://files.codingninjas.in/careercamp-12614.svg" />
                    </div>
                    <div id='login-enroll'>
                        {isLoggedIn ?
                            <div className='after-login'>
                                <a href="/">
                                    {/* <button className='login-button'> */}
                                    <span>My <br />ClassRoom </span>
                                    {/* </button> */}
                                </a>
                                <div className="dropdown">
                                    <button className="dropbtn" style={{ backgroundColor: 'wheat', padding: '3px', borderRadius: '13px', margin: '.4rem' }}> <img className="profile-image" src="https://lh3.googleusercontent.com/a/AAcHTtei2S3-XwJCD5gnP9KatxMROzjRtDmhC0zl3Dm8hg=s96-c" alt="nakul dev khajuria"></img></button>

                                    <div className="dropdown-content">
                                        <a href="/"><button className="profile-option">nakul dev </button></a>
                                        <a href="/">   <button className="profile-option" onClick={handleLogout}>Logout</button></a>

                                    </div>
                                </div>

                            </div>
                            :
                            <a href='#'>
                                <button className='login-button' onClick={handleShowForm}>
                                    <span>Login </span>
                                </button>
                            </a>
                        }

                        <a href="#hell">
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

                            <a href='#'>
                                <button className='login-button' onClick={handleShowForm}>
                                    <span>Login </span>
                                </button>
                            </a>

                          

                        </div>
                    </div>
                    <div className="main-logo">
                        <a href="#">
                            <img
                                alt="Coding Ninjas"
                                src="https://files.codingninjas.in/logo_variants-white-25005.png" />
                        </a>
                    </div>
                  
                </div>

            </div>

            {showForm && (
                <div className={`form-container ${isBlurred ? 'blur' : ''}`}>
                    <button className="close-form-button" onClick={handleCloseForm}>
                        X
                    </button>
                    <div className="options-container">
                        <button className="option-button" onClick={handleFormLogin} >Login</button>
                        <button className="option-button" onClick={handleFormSignup}> Sign Up</button>
                    </div>
                    {formToggle &&
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
                            <button className="form-button" type="submit"  >Login</button>
                        </form>
                    }
                    {!formToggle && showSuccessAnimation && (
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