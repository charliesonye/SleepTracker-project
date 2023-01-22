import React, {useState} from 'react'
import EditForm from './EditForm'

function SleepRecord({sleepRecord, recommendations, onHandleUpdate, onHandleDelete}) {
  const [showFullRecord, setShowFullRecord] = useState(false)
  const [showEdit, setShowEdit] = useState(false)
  function toggleView(){
    setShowFullRecord(!showFullRecord)
  }

  function deleteRecord(){
    fetch(`/sleep_records/${sleepRecord.id}`, {
        method: 'DELETE'
    })
    onHandleDelete(sleepRecord.id)

    
  }

  return (
    <div className='sleep-record'>
        
        <button onClick={()=> setShowEdit(!showEdit)} >Edit Sleep Record Date</button>
        <button onClick={deleteRecord}>Delete Sleep Record</button>
        {
            showEdit ? 

            (
                <EditForm 
                    recommendations={recommendations} 
                    sleepRecord={sleepRecord}
                    showEdit={showEdit}
                    setShowEdit={setShowEdit}
                    onHandleUpdate={onHandleUpdate}
                />
            )
            :
            (    showFullRecord ?
                    (
                        <>
                        
                        <h4>Slumber Date: {sleepRecord.date}</h4>
                        <h4>Slumber Started: {sleepRecord.start_sleep}</h4>
                        <h4>Slumber Ended: {sleepRecord.end_sleep}</h4>
                        <h4>Slumber Disruptor: {sleepRecord.disruptor}</h4>
                        <h4>Recommendation 1: {sleepRecord.recommendation_1}</h4>
                        <h4>Recommendation 2: {sleepRecord.recommendation_2}</h4>
                        <button onClick={toggleView}>See Less</button>
                        
                        </>
                    )
                    :
                    (
                        <>
                        
                        <h4>Slumber Date: {sleepRecord.date}</h4>
                        <h4>Slumber Started: {sleepRecord.start_sleep}</h4>
                        <h4>Slumber Ended: {sleepRecord.end_sleep}</h4>
                        <button onClick={toggleView}>See More</button>
                        
                        </>
                    )
            )    
        }
       
    </div>
  )
}

export default SleepRecord;