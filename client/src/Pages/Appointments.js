import React, {useState, useEffect} from 'react'
import Appointment from '../Components.js/Appointment'
import AddAppointmentForm from '../Components.js/AddAppointmentForm'

 function Appointments() {
  const [appointments, setAppointments] = useState([])

  useEffect(()=>{
    fetch('/appointments')
    .then((res)=> res.json())
    .then((data)=> setAppointments(data))
  }, [appointments])

  function addAppointment(newAppointment){
    setAppointments([...appointments, newAppointment])
  }
  
  const appointmentsList = appointments?.map((appointment)=> <Appointment appointment={appointment} />)
  return (
    <div>
      <AddAppointmentForm onAddAppointment={addAppointment}/><br/>
      
      <h3><u>Upcoming Appointments</u></h3>
      
      {
        appointmentsList
      }
      
      
    </div>
  )
}

export default Appointments