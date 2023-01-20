import React, {useState} from 'react'
import SleepRecord from '../Components.js/SleepRecord'

 function SleepRecords({sleepRecords}) {
  console.log(sleepRecords)
  const sleepRecordsList = sleepRecords?.map((sleepRecord)=> <SleepRecord sleepRecord={sleepRecord} />)
  
    return (
    <div>
    <h2><u>Sleep Records</u></h2>
    {
      sleepRecordsList
    }
   
    </div>
  )
}

export default SleepRecords