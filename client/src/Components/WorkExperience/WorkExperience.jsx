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


  const handleSubmitRegister = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Make the HTTP request
    fetch('https://coding-ninja-backend-g5rnui0md-nakuldevkhajuria.vercel.app/api/user/register', {
      // fetch('http://localhost:4000/api/user/register', {
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
  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);

  // const [showCourses1, setShowCourses1] = useState(false);

 
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
      <div className='work-section' >
        <div className="work-container">
          <div className='work-container-content'>
            <h4>What is your work experience?</h4>
            <span>this will help us recommend the best programs for you.</span>
            <div className="work-content">
              <div style={{display:'flex',flexDirection:'column'}}>
              <div className='work-content-box' id='work-box' onClick={handleCardClick1}>
                <div >
                  <img height="130" width="124" alt="card-img-name" src="https://files.codingninjas.com/student-24426.png" />
                  <div> No work <br /> experience
                   
                  </div>
                  <div >Designed as per college <br /> student schedule</div>
                </div>
              

              </div>
              {showButton1 && (
                  <button id="showButton"  onClick={handleShowForm}>
                   Confirm Selection
                  </button>
                )}
                </div>
                <div style={{display:'flex',flexDirection:'column'}}>
              <div className='work-content-box' id='work-box' onClick={handleCardClick2}>
                <div >
                  <img _ngcontent-serverapp-c69="" height="130" width="124" alt="card-img-name" src="https://files.codingninjas.com/professional-24427.png" />
                  <div> Having work <br /> experience
                   
                  </div>
                  <div >Designed as per college <br /> student schedule</div>

                </div>
              
                </div>
                {showButton2 && (
                  <button id="showButton"  onClick={handleShowForm}>
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
        {/* <button className="option-button"  onClick={ handleFormLogin} >Login</button> */}
        <button className="option-button"  onClick={ handleFormSignup}> Sign Up</button>
      </div>
      
{ !formToggle && showSuccessAnimation && (
  <div className="success-animation">
    <p>You have successfully registered!</p>
  </div>
)}
      { 
      
      formToggle &&
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
      </div><div class="all-courses"><img src="https://files.codingninjas.in/faded-expore-section-24216.svg" alt="all courses"/></div>
    </div>
  )
}

export default WorkExperience