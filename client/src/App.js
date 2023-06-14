
import './App.css';
import AllCourses from './Components/All Courses/AllCourses';
// import { MyForm } from './Components/Form/MyForm';
import Home from './Components/Home/Home';
import JoinUs from './Components/JoinUs/JoinUs';
import News from './Components/News/News';
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
    <WorkExperience/>
 <AllCourses/>
 <News/>
    </div>
  );
}

export default App;
