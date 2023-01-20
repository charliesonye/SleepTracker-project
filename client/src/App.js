import { Routes, Route, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './App.css';
import Home from './Pages/Home';
import Appointments from './Pages/Appointments';
import SleepTip from './Pages/SleepTip';
import AddSleepTimeForm from './Components.js/AddSleepTimeForm';
import NavBar from './Components.js/NavBar';
import Login from './Pages/Login';
import SleepRecords from './Pages/SleepRecords';


function App() {
  const [user, setUser] = useState(null)
  const [sleepRecords, setSleepRecords] = useState([])
  const navigate = useNavigate()

  useEffect(()=>{
    fetch('/me').then((res)=>{
      if(res.ok){
        res.json().then((user)=> setUser(user))
        
      }
    })
  }, [])

  useEffect(()=>{
    fetch('/sleep_records')
    .then((res)=> res.json())
    .then((data)=>  setSleepRecords(data))
  }, [])

  function addSleepRecord(newRecord){
    setSleepRecords([...sleepRecords, newRecord])
  }

  if(!user) return <Login onLogin={setUser} />
  return (
    <div className="App">
      
        <NavBar setUser={setUser} />
      <header className="App-header">
       <Routes>
        <Route path='/'  element={<Home/>} />
        <Route path='/appointments' element={<Appointments/>} />
        <Route path='/sleep_records' element={
            <SleepRecords sleepRecords={sleepRecords}/>
            } 
        /> 
        <Route path='/sleep_tip' element={<SleepTip/>} />
        <Route path='/add_sleep_time' element={
            <AddSleepTimeForm user = {user} onAddSleepRecord={addSleepRecord} />
            }
        />
       
       </Routes>
       
      </header>
      
    
    </div>
  );
}

export default App;
