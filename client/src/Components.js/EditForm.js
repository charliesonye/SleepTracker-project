import React, {useState} from 'react'

function EditForm({recommendations, sleepRecord, showEdit, setShowEdit, onHandleUpdate}) {

    const [date, setDate] = useState('')

    //   function handleChange(e){
    //     setFormData({
    //         ...formData, [e.target.name]: e.target.value
    //     })
    //   }

      function handleSubmit(e){
        e.preventDefault()

        fetch(`/sleep_records/${sleepRecord.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({date: date})
        })
        .then((res)=> res.json())
        .then((data)=> {
            
            onHandleUpdate(data)
            setShowEdit(!showEdit)
        })
        
      }
  return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>Slumber Date: </label>
        <input name='date' type='date' value={date} onChange={(e)=> setDate(e.target.value)}/><br/>
      
        <input type='submit' />

        </form>
    </div>
  )
}

export default EditForm