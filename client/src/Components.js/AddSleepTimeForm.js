import React, {useState, useEffect} from 'react'
import {useNavigate} from 'react-router-dom'

function AddSleepTimeForm({user, onAddSleepRecord, recommendations}) {
  
  const [formData, setFormData] = useState({
    date: '',
    disruptor: '',
    recommendation_1: '',
    recommendation_2: '',
    start_sleep: null,
    end_sleep: null,
    user_id: ''

  })
  const navigate = useNavigate()
  

  // useEffect(()=>{

  //   fetch('/recommendations')
  //   .then((res)=> res.json())
  //   .then((data)=> setRecommendations(data))
  // }, [])

  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value}) 
  }

  function handleSubmit(e){
    e.preventDefault()

    const newRecord = {
      date: formData.date,
      disruptor: formData.disruptor,
      recommendation_1: formData.recommendation_1,
      recommendation_2: formData.recommendation_2,
      start_sleep: formData.start_sleep,
      end_sleep: formData.end_sleep,
      user_id: user.id      
    }

    fetch('/sleep_records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecord)
    })
    .then((res)=> res.json())
    .then((data)=> {
      onAddSleepRecord(data)
      navigate('/sleep_records')
    })
  }
  
  return (
    <div>

      <h2><u>Add New Sleep Record</u></h2>
    <form className='add-sleep-form' onSubmit={handleSubmit}>
      <label>Date of Slumber Start: </label>
      <input name='date' type='date' value={formData.date} onChange={handleChange}/><br/>
      
      <label>Beginning of Slumber Time: </label>
      <input name='start_sleep' type='time' value={formData.start_sleep} onChange={handleChange}/><br/>
      
      <label>End of Slumber Time: </label>
      <input name= 'end_sleep' type='time' value={formData.end_sleep} onChange={handleChange}/><br/>
      
      <label> Cause of Sleep Issues: </label>
      <input name= 'disruptor' type= 'text' value={formData.disruptor} onChange={handleChange}/><br/>
      <label>Recommendations 1:</label>
      <select name='recommendation_1' onChange={handleChange}>
      <option value='prompt' > Please Select Recommendation:</option>
        {
          recommendations.map((rec) => (
            
            <option key={rec.id} value={rec.steps} >{rec.steps}</option>
          ))
        }
      </select>
      <label>Recommendations 2:</label>
      <select name='recommendation_2' onChange={handleChange}>
      <option value='prompt' > Please Select Recommendation:</option>
       {
         recommendations.map((rec) => (
           
           <option key={rec.id} value={rec.steps} >{rec.steps}</option>
         ))
       }
     </select><br/>
     <input type='submit' />
    </form>
    </div>
  )
}

export default AddSleepTimeForm