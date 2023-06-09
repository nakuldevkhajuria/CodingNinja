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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevents the default form submission behavior

    // Make the HTTP request
    fetch('/localhost:4000/api/user/register', {
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

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };


  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);

  // const [showCourses1, setShowCourses1] = useState(false);

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
  };

  return (
    <div>
      <div className='work-section'>
        <div className="work-container">
          <div className='work-container-content'>
            <h4>What is your work experience?</h4>
            <span>this will help us recommend the best programs for you.</span>
            <div className="work-content">
              <div className='work-content-box' onClick={handleCardClick1}>
                <div >
                  <img height="130" width="124" alt="card-img-name" src="https://files.codingninjas.com/student-24426.png" />
                  <div> No work <br /> experience
                    {/* <mat-icon _ngcontent-serverapp-c69="" role="img" class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">keyboard_arrow_right</mat-icon> */}
                  </div>
                  <div >Designed as per college <br /> student schedule</div>
                </div>
                {showButton1 && (
                  <button id="showButton" style={{ color: 'green' }} onClick={handleShowForm}>
                    Click to show
                  </button>
                )}

              </div>
              <div className='work-content-box' onClick={handleCardClick2}>
                <div >
                  <img _ngcontent-serverapp-c69="" height="130" width="124" alt="card-img-name" class="m-auto" src="https://files.codingninjas.com/professional-24427.png" />
                  <div> Having work <br /> experience
                    {/* <mat-icon _ngcontent-serverapp-c69="" role="img" class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">keyboard_arrow_right</mat-icon> */}
                  </div>
                  <div >Designed as per college <br /> student schedule</div>

                </div>
                {showButton2 && (
                  <button id="showButton" style={{ color: 'green' }}>
                    Click to show
                  </button>
                )}
              </div>
            </div>

          </div>
        </div>
        <div>
          {showForm && (
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <input
                type='number'
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
              />
              <input
                type='password'
                name="password"
                value={formData.password}
                onChange={handleChange}
              />

              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience