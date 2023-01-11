import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Pages/Home';
import Appointments from './Pages/Appointments';
import SleepTip from './Pages/SleepTip';
import AddSleepTimeForm from './Components.js/AddSleepTimeForm';
import NavBar from './Components.js/NavBar';
import Login from './Pages/Login';
import Signup from './Pages/Signup';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
      <header className="App-header">
       <Routes>
        <Route path='/'  element={<Home/>}></Route>
        <Route path='/appts' element={<Appointments/>}></Route>
        <Route path='/sleep_tip' element={<SleepTip/>}></Route>
        <Route path='/add_sleep_time' element={<AddSleepTimeForm/>}></Route>
       </Routes>
       
      </header>
      </Router>
    
    </div>
  );
}

export default App;
