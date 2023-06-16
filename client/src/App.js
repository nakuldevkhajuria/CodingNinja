
import './App.css';
import AllCourses from './Components/All Courses/AllCourses';
// import { MyForm } from './Components/Form/MyForm';
import Home from './Components/Home/Home';
import JoinUs from './Components/JoinUs/JoinUs';
import JoinUsCourses from './Components/JoinUsCourses/JoinUsCourses';
import News from './Components/News/News';
import OneStop from './Components/OneStop/OneStop';
// import Ninja from './Components/Ninja/Ninja';
import Platform from './Components/Platform/Platform';
import UpcomingEvents from './Components/UpcomingEvents/UpcomingEvents';
import VideoList from './Components/VideoList/VideoList';
import Footer from './Components/Footer1/Footer'
import Footer2 from './Components/Footer2/Footer2'
import Footer3 from './Components/Footer3/Footer3'

import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
    
    <Home/>
    {/* <Ninja/> */}
    <JoinUs />
 
    <Platform/>
    <OneStop/>
    <span id='yes-hai'></span>
    <WorkExperience/>
 <AllCourses/>
 <News/>
 <VideoList/>
 <p style={{fontWeight:'600',color:'#e1e1e3',fontSize:'2rem',margin:'8rem auto 2rem auto'}}>UPCOMING EVENTS</p>
 <UpcomingEvents/>
 <Footer />
 <Footer2 />
 <Footer3 />
    </div>
  );
}

export default App;
