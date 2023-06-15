import React, { useState } from "react";
import  './JoinUsCourses.css'

const JoinUsCourses = () => {
  const [activeDiv, setActiveDiv] = useState(0);

  const handleHover = (index) => {
    setActiveDiv(index);
  };

  const handleMouseLeave = () => {
    setActiveDiv(-1);
  };
  return (
    <div className="alumni">
      <div
        className={` alum ${activeDiv === 0 ? "expanded" : ""}`}
        onMouseEnter={() => handleHover(0)}
        onMouseLeave={handleMouseLeave}
        style={{ background: "blueviolet" }}
      >
         <div className="image-container-success-1">
          <img
            className="fixed-image"
            src="https://files.codingninjas.in/pareksha-manchanda-9862-1-1-9918-1-10357-17472.webp"
            alt="Fixed Image"
          />
        </div>
        <p>CS novice to Google</p>
        {activeDiv === 0 && (
          <>
            {" "}
            <p>
              Despite being from a tier 3 college, I would like to thank my
              mentors & teachers at Coding Ninjas who helped me land a job at
              Google. Both Parikh sir and Ankush sir are brilliant teachers who
              know how to explain difficult concepts in an easy way.
            </p>
            <div className="detail">
              <p>Pareksha Manchanda</p>
              <p>Software Engineer</p>
              <img src="https://files.codingninjas.com/google-12193.png" alt="google" />
            </div>
          </>
        )}
      </div>
      <div
        className={`alum ${activeDiv === 1 ? "expanded" : ""}`}
        onMouseEnter={() => handleHover(1)}
        onMouseLeave={handleMouseLeave}
        style={{ background: "rgb(101, 23, 173)" }}
      >
         <div className="image-container-success-1">
          <img
            className="fixed-image"
            src="https://files.codingninjas.in/harsh-cn-10510-1-10512-17471.webp"
            alt="Fixed Image"
          />
        </div>
        <p>College dropout to a package of 10 LPA</p>
        {activeDiv === 1 && (
          <>
            {" "}
            <p>
              The experience and knowledge I learned at Coding Ninjas greatly
              sharpened my skills and allowed me to pass the HackerRank and
              technical interview rounds. The placement team coordinated
              everything perfectly and it was unbelievable to get an offer
              letter of 10 LPA. Grateful to Coding Ninjas.
            </p>
            <div className="detail">
              <p>Harsh Agrawal</p>
              <p>Software Engineer</p>
              <img src="https://files.codingninjas.com/avalara-10511.png" alt="avalara" />
            </div>
          </>
        )}
      </div>
      <div
        className={`alum ${activeDiv === 2 ? "expanded" : ""}`}
        onMouseEnter={() => handleHover(2)}
        onMouseLeave={handleMouseLeave}
        style={{ background: "indigo" }}
      >    
       <div className="image-container-success-1">
          <img
            className="fixed-image"
            src="https://files.codingninjas.com/satwika-bhattacharjee-9762-9857.webp"
            alt="Fixed Image"
          />
        </div>     
        <p>Non-CS branch to Top Company</p>
        {activeDiv === 2 && (
          <>
            {" "}
            <p>
              My experience with Coding Ninjas was wonderful. The courses
              strengthened my concepts and helped me in my interviews. The
              faculty was amazing. I would definitely recommend Coding Ninjas.
            </p>
            <div className="detail">
              <p>Satwika Bhattacharjee</p>
              <p>Analyst</p>
              <img src="https://files.codingninjas.in/goldman-sachs-9763.svg" alt="goldman" />
            </div>
          </>
        )}
      </div>
      <div
        className={`alum ${activeDiv === 3 ? "expanded" : ""}`}
        onMouseEnter={() => handleHover(3)}
        onMouseLeave={handleMouseLeave}
        style={{ background: "dodgerblue" }}
      >
         <div className="image-container-success-1">
          <img
            className="fixed-image"
            src="https://files.codingninjas.com/rahul-9626-9859.webp"
            alt="Fixed Image"
          />
        </div>
        <p>Tier-3 college to 6 stars on CodeChef</p>
        {activeDiv === 3 && (
          <>
            {" "}
            <p>
            It has been a crazy ride from being a novice CS student to a 6 star Coder
             and ICPC Regionalist. I would like to thank Coding Ninjas for helping a 
             Tier-3 college student explore such opportunities.
            </p>
            <div className="detail">
              <p>Rahul Lather</p>
              <p>Member of Technical Staff</p>
              <img src="https://files.codingninjas.com/cn-logo-12194.png" alt="codingninjas" />
            </div>
          </>
        )}
      </div>
      <div
        className={`alum ${activeDiv === 4 ? "expanded" : ""}`}
        onMouseEnter={() => handleHover(4)}
        onMouseLeave={handleMouseLeave}
        style={{ background: "blue" }}
      >
         <div className="image-container-success-1">
          <img
            className="fixed-image"
            src="https://files.codingninjas.in/richa-sharma-10960-_1_-17470.webp"
            alt="Fixed Image"
          />
        </div>
        <p>Non Engineer to Investment Bank</p>
        {activeDiv === 4 && (
          <>
            {" "}
            <p>
            Coding Ninjas is one of the best learning platforms. I enrolled into C++ Foundation 
            with Data Structures. The course content was very informative and well 
            structured. The way Ankush Sir and Nidhi Ma'am explain a topic is commendable.
             My approach towards solving a problem completely changed.
            </p>
            <div className="detail">
              <p>Richa Sharma</p>
              <p>SEP Intern</p>
              <img src="https://files.codingninjas.com/jp-morgan-chase-10959.png" alt="jpmorgan" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default JoinUsCourses;