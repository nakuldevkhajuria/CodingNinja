import React, { useState } from 'react'
import './WorkExperience.css'
const WorkExperience = () => {

  const [showForm, setShowForm] = useState(false); // State to toggle the form visibility
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile: '',
    password: ''
  });

  const handleSubmitLogin = (event) => {
    // event.preventDefault(); // Prevents the default form submission behavior

    // Make the HTTP request
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
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  };

  const handleSubmitRegister = (event) => {
    // event.preventDefault(); // Prevents the default form submission behavior

    // Make the HTTP request
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
        handleFormLogin();
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

const [formToggle,setFormToggle] = useState(true)
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);

  // const [showCourses1, setShowCourses1] = useState(false);

  const handleFormLogin = ()=>{
    setFormToggle(true)
  
  }
  const handleFormSignup = ()=>{
    setFormToggle(false)
  
  }
  const handleCardClick1 = () => {
    setShowButton1(true);
    setShowButton2(false);
  };
  const handleCardClick2 = () => {
    setShowButton2(true);
    setShowButton1(false);
  };
  const handleShowForm = () => {
    setShowForm(true); // Show the form on button click
    setIsBlurred(!isBlurred);
  };
  const [isBlurred, setIsBlurred] = useState(false); // State variable to control the blur effect

  const handleCloseForm = () => {
    setShowForm(false);
    setIsBlurred(false);
  };

  return (
    <div>
      <div className='work-section'>
        <div className="work-container">
          <div className='work-container-content'>
            <h4>What is your work experience?</h4>
            <span>this will help us recommend the best programs for you.</span>
            <div className="work-content">
              <div className='work-content-box' id='work-box' onClick={handleCardClick1}>
                <div >
                  <img height="130" width="124" alt="card-img-name" src="https://files.codingninjas.com/student-24426.png" />
                  <div> No work <br /> experience
                   
                  </div>
                  <div >Designed as per college <br /> student schedule</div>
                </div>
              

              </div>
              {showButton1 && (
                  <button id="showButton" style={{ color: 'green' }} onClick={handleShowForm}>
                   Confirm Selection
                  </button>
                )}
              <div className='work-content-box' id='work-box' onClick={handleCardClick2}>
                <div >
                  <img _ngcontent-serverapp-c69="" height="130" width="124" alt="card-img-name" src="https://files.codingninjas.com/professional-24427.png" />
                  <div> Having work <br /> experience
                   
                  </div>
                  <div >Designed as per college <br /> student schedule</div>

                </div>
                {showButton2 && (
                  <button id="showButton" style={{ color: 'green' }} onClick={handleShowForm}>
                        Confirm Selection
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
        <div>
          {showForm && (
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
             />
             
             <input
               className="form-input"
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Password"
             />
             <button className="form-button" type="submit">Login</button>
           </form>
}
      { !formToggle &&
             <form className="enrollment-form" onSubmit={handleSubmitRegister}>
             <input
               className="form-input"
               type="text"
               name="firstname"
               value={formData.firstname}
               onChange={handleChange}
               placeholder="First Name"
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
             />
             <input
               className="form-input"
               type="number"
               name="mobile"
               value={formData.mobile}
               onChange={handleChange}
               placeholder="Mobile"
             />
             <input
               className="form-input"
               type="password"
               name="password"
               value={formData.password}
               onChange={handleChange}
               placeholder="Password"
             />
             <button className="form-button" type="submit">SignUp</button>
           </form>
}
           </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience