import React, { useState } from 'react'
import './WorkExperience.css'
const WorkExperience = () => {

  const [showButton1, setShowButton1] = useState(false);
  const [showButton2, setShowButton2] = useState(false);
  const [showCourses1, setShowCourses1] = useState(false);
  
  const handleCardClick1 = () => {
    setShowButton1(true);
    setShowButton2(false);
  };
  const handleCardClick2 = () => {
    setShowButton2(true);
    setShowButton1(false);
  };

  return (
    <div>
      <div className='work-section'>
        <div className="work-container">
          <div className='work-container-content'>
            <h4>What is your work experience?</h4>
            <span>this will help us recommend the best programs for you.</span>
            <div className="work-content">
              <div className='work-content-box'  onClick={handleCardClick1}>
                <div >
                  <img height="130" width="124" alt="card-img-name" src="https://files.codingninjas.com/student-24426.png" />
                  <div> No work <br /> experience
                    {/* <mat-icon _ngcontent-serverapp-c69="" role="img" class="mat-icon notranslate material-icons mat-ligature-font mat-icon-no-color" aria-hidden="true" data-mat-icon-type="font">keyboard_arrow_right</mat-icon> */}
                  </div>
                  <div >Designed as per college <br /> student schedule</div>
                </div>
                {showButton1 && (
        <button id="showButton" style={{ color: 'green' }}>
          Click to show
        </button>
      )}
                
              </div>
              <div className='work-content-box' onClick={handleCardClick2}>
              <div >
              <img _ngcontent-serverapp-c69="" height="130" width="124" alt="card-img-name" class="m-auto" src="https://files.codingninjas.com/professional-24427.png"/>
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
      </div>
    </div>
  )
}

export default WorkExperience