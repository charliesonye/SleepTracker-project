import React, {useState} from 'react'


function SleepRecord({sleepRecord}) {
  const [showFullRecord, setShowFullRecord] = useState(false)
    
  function toggleView(){
    setShowFullRecord(!showFullRecord)
  }

  return (
    <div>
        {
            showFullRecord ?
                (
                    <>
                    <hr/>
                    <h4>Slumber Date: {sleepRecord.date}</h4>
                    <h4>Slumber Started: {sleepRecord.start_sleep}</h4>
                    <h4>Slumber Ended: {sleepRecord.end_sleep}</h4>
                    <h4>Slumber Disruptor: {sleepRecord.disruptor}</h4>
                    <h4>Recommendation 1: {sleepRecord.recommendation_1}</h4>
                    <h4>Recommendation 2: {sleepRecord.recommendation_2}</h4>
                    <button onClick={toggleView}>See Less</button>
                    <hr/>
                    </>
                )
                :
                (
                    <>
                    <hr/>
                    <h4>Slumber Date: {sleepRecord.date}</h4>
                    <h4>Slumber Started: {sleepRecord.start_sleep}</h4>
                    <h4>Slumber Ended: {sleepRecord.end_sleep}</h4>
                    <button onClick={toggleView}>See More</button>
                    <hr/>
                    </>
                )
        }
       
    </div>
  )
}

export default SleepRecord;