import React, {useState, useContext, useEffect} from 'react'
import { UserContext } from '../Components.js/UserContext'

function UsersTherapist({therapists}) {
    const user = useContext(UserContext)
    
    function getUnique(array){
        let uniqueArray = [];
        
       
        for(let i = 0; i < array.length; i++){
            if(uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
        return uniqueArray;
    }

    const therapistsList = therapists?.map((therapist)=> therapist.name)
    const uniqueTherapistList = getUnique(therapistsList)
   
  return (
    <div>
        <h3><u>{`${user.first_name} Therapists`}</u></h3>
        {
            uniqueTherapistList.map((therapist)=> <li>{therapist}`</li>)
        }
    </div>
  )
}

export default UsersTherapist