import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import SignupForm from '../Components.js/SignupForm'
import LoginForm from '../Components.js/LoginForm'

 function Login({onLogin}) {
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div>
         
        {
            isLogin ? (
                <>
                <LoginForm onLogin={onLogin}/><br/><br/>
                <Link to='/signup'> 
                
                <button onClick={() =>setIsLogin(false) } >
                Sign up For an account
                </button>
                </Link>

 
                </>
                
            ) :  (
                <>
                <SignupForm onLogin={onLogin} /><br/><br/>
                <Link to='/login'> 
                <button onClick={()=> setIsLogin(true)}>
                    Log in to your account
                </button>
                
                </Link>  
                </>
            )
        }
       
   

    </div>
  )
}

export default Login;