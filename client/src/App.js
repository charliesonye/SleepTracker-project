import { Routes, Route, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import './App.css';
// import SleepChart from './Pages/SleepChart';
import Appointments from './Pages/Appointments';
import Home from './Pages/Home';
import AddSleepTimeForm from './Components.js/AddSleepTimeForm';
import NavBar from './Components.js/NavBar';
import Login from './Pages/Login';
import SleepRecords from './Pages/SleepRecords';
import {UserContext} from './Components.js/UserContext'
import UsersTherapist from './Pages/UsersTherapist';


function App() {
  const [user, setUser] = useState(null)
  const [sleepRecords, setSleepRecords] = useState([])
  const [recommendations, setRecommendations] = useState([])
  const [therapists, setTherapists] = useState([])
  const navigate = useNavigate()


  useEffect(()=>{
    fetch('/me').then((res)=>{
      if(res.ok){
        res.json().then((user)=> setUser(user))
        navigate('/')
      }
    })
  }, [])

  

  useEffect(()=>{
    fetch('/sleep_records')
    .then((res)=> res.json())
    .then((data)=>  setSleepRecords(data))
  }, [])

  useEffect(()=>{

    fetch('/recommendations')
    .then((res)=> res.json())
    .then((data)=> setRecommendations(data))
  }, [])

  useEffect(()=>{
    fetch('/users_therapist')
    .then((res)=> res.json())
    .then((data)=> setTherapists(data))
}, [])

  
  function addSleepRecord(newRecord){
    setSleepRecords([...sleepRecords, newRecord])
  }

  function handleUpdateSleepRecord(updatedObj){
    const updatedSleepRecords = sleepRecords.map((sleepRecord) =>{
      if(sleepRecord.id === updatedObj.id){
        return updatedObj
      }else {
        return sleepRecord
      }

      })
  
    setSleepRecords(updatedSleepRecords)
  }

  function handleDeleteSleepRecord(id){
    const newListOfSleepRecords = sleepRecords.filter(record=> record.id !== parseInt(id))
    
    setSleepRecords(newListOfSleepRecords)
  }
  

  if(!user) return <Login onLogin={setUser} />
  return (
    <div className="App">
      
        <NavBar setUser={setUser} />
      <header className="App-header">
      <UserContext.Provider value={user}>
        <Routes>
        


            {/* <Route path='/sleep_chart'  element={<SleepChart />} /> */}
            <Route path='/appointments' element={<Appointments/>} />
            <Route path='/sleep_records' element={
                <SleepRecords 
                  sleepRecords={sleepRecords} 
                  recommendations={recommendations} 
                  onHandleUpdate={handleUpdateSleepRecord}
                  onHandleDelete={handleDeleteSleepRecord}
                />
                } 
            /> 
            <Route path='/users_therapist' element={<UsersTherapist therapists={therapists} />} />
            <Route path='/' element={<Home sleepRecords={sleepRecords} />} />
            <Route path='/add_sleep_time' element={
                <AddSleepTimeForm  onAddSleepRecord={addSleepRecord} recommendations={recommendations} />
                }
            />
        
        
        </Routes>
       </UserContext.Provider>
       
      </header>
      
    
    </div>
  );
}

export default App;



// function hoursBetween(time1, time2) {
//   // Convert the times to date objects
//   const date1 = new Date("1970-01-01 " + time1);
//   const date2 = new Date("1970-01-01 " + time2);

//   // Calculate the difference in milliseconds
//   const difference = date2 - date1;

//   // Convert the difference to hours
//   const hours = difference / 1000 / 60 / 60;

//   return hours;
// }