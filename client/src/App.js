
import './App.css';
import Home from './Components/Home/Home';
import JoinUs from './Components/JoinUs/JoinUs';
// import Ninja from './Components/Ninja/Ninja';
import Platform from './Components/Platform/Platform';

function App() {
  return (
    <div className="App">
    
    <Home/>
    {/* <Ninja/> */}
    <JoinUs />
    <Platform/>
    </div>
  );
}

export default App;
