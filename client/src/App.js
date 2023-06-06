
import './App.css';
import Home from './Components/Home/Home';
import JoinUs from './Components/JoinUs/JoinUs';
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
    {/* <WorkExperience/> */}
    </div>
  );
}

export default App;
