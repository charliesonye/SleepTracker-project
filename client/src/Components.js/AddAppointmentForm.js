import React, {useState} from 'react'

 function AddAppointmentForm({onAddAppointment}) {
  const [formData, setFormData] = useState({
    appointmentNotes: '',
    date: '',
    time: ''
  })

  function handleChange(e){
    
    setFormData({
        ...formData, [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    const newAppointment = {
        appointment_notes: formData.appointmentNotes,
        date: formData.date,
        time: formData.time
    }

    fetch('/appointments', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(newAppointment)
    })
    .then((res)=>res.json())
    .then((data)=> {
        onAddAppointment(data)
        setFormData({
            appointmentNotes: '',
            date: '',
            time: ''
        })
    })
  }
  
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <h3>Schedule New Appointment</h3>
            <label>Appointment Notes/Reason</label>
            <input name='appointmentNotes' type='text' value={formData.appointmentNotes} onChange={handleChange}/><br/>
            <label>Date: </label>
            <input name='date' type='date' value={formData.date} onChange={handleChange} /><br/>
            <label>Time: </label>
            <input name='time' type='time' value={formData.time} onChange={handleChange} /><br/>
            <input type='submit' />
        </form>
    </div>
  )
}

export default AddAppointmentForm