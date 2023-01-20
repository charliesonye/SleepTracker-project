import React from 'react'

function Appointment({appointment}) {
 
    return (
    <div>
        <hr/>
        <u>Appointment with:</u> <b>{appointment?.therapist?.name}</b><br/>
        <u>Date:</u> <b>{appointment.date}</b><br/>
        <u>Time:</u> <b>{appointment.time}</b> 
        
    </div>
  )
}

export default Appointment