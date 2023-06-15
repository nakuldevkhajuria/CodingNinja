
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


import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
    
    <Home/>
    {/* <Ninja/> */}
    <JoinUs />
 
    <Platform/>
    {/* <OneStop/> */}
    <WorkExperience/>
 <AllCourses/>
 {/* <News/> */}
    </div>
  );
}

export default App;
