import React, {useState} from 'react'


function LoginForm({onLogin}) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })
  const [errors, setErrors] = useState([])

  

  function handleChange(e){
    setFormData({
      ...formData, [e.target.name]: e.target.value
    })
  }

  function handleLogin(e){
    e.preventDefault()

    const userData = {
      username: formData.username,
      password: formData.password
    }

    fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(userData)
    }).then((res)=>{
        if(res.ok){res.json().then((data)=> {
        onLogin(data)
      
        })
          }else{
            res.json().then((errs)=> setErrors(errs.errors))
          }
      })
  }
  
  return (
    <div>
      <h2><u>Log in to your account</u></h2>
      <form onSubmit={handleLogin}>
        <label>Username</label>
        <input name='username' type='text' value={formData.username} onChange={handleChange}/><br/>
        <label>Password</label>
        <input name='password' type='password' value={formData.password} onChange={handleChange}/><br/>
        <input type='submit' />
      </form>
      {
        errors.map((error)=> (
          <li key={error}>{error}</li>
        ))
      }
    </div>
  )
}

export default LoginForm