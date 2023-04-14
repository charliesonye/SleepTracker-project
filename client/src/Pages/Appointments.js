import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import Appointment from '../Components.js/Appointment'
import AddAppointmentForm from '../Components.js/AddAppointmentForm'



 function Appointments() {
  const [appointments, setAppointments] = useState([])

   

  useEffect(()=>{
    fetch('/appointments')
    .then((res)=> res.json())
    .then((data)=> setAppointments(data))
  }, [])

  function addAppointment(newAppointment){
    setAppointments([...appointments, newAppointment])
  }
  
  const appointmentsList = appointments?.map((appointment)=> <Appointment key={appointment.id} appointment={appointment} />)
  return (
    <div>
      <AddAppointmentForm onAddAppointment={addAppointment}/><br/>
      <Link to='/users_therapist'>
        List of Associated Therapists
      </Link>
      <h3><u>Upcoming Appointments</u></h3>
      
      {
        appointmentsList
      }
      
      
    </div>
  )
}

export default Appointments