import React from 'react'
import {Link} from 'react-router-dom'
import sheep from '../ovelha-sheep.gif'
import SleepChart from '../Pages/SleepChart'


 function Home({sleepRecords}) {
  return (
    <div>
      <h2><u>Slumber Tracking App</u></h2>

      <h4>
        "You can track sleep times, identify patterns for correction purposes and even schedule 
          time with a Cognitive Behaviorial Therapist if additional help is needed."
      </h4>

    <Link to='/add_sleep_time' style={{color: 'red'}}>
      Click here to start adding your sleep data!
    </Link><br/>

    <img src={sheep} alt='Sheep Counter' className='sheep-counter' />
    <SleepChart sleepRecords={sleepRecords} />
    </div>
  )
}

export default Home