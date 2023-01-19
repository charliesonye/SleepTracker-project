import {useState} from 'react'



 function SignupForm({onLogin}) {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    height: '',
    weight: '',
    username: '',
    password: '',
    passwordConfirmation: ''
  })
  
  const [errors, setErrors] = useState('')


  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()

    const userData = {
      first_name: formData.first_name,
      last_name: formData.last_name,
      height: formData.height,
      weight: formData.weight,
      username: formData.username,
      password: formData.password ,
      password_confirmation: formData.passwordConfirmation
    }

    fetch('/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    }).then((res)=>{
      if(res.ok){
        res.json().then((data)=> onLogin(data) )
        
      }else{
        res.json().then((err)=> setErrors(err.errors))
      }
    })


    }
  
  return (
    <div className='signup-form'>
      <h2><u>Create an account</u></h2>
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
      <input
        name='first_name'
        type='text'
        value={formData.first_name}
        onChange={handleChange}
      /><br/>
       <label>Last Name:</label>
       <input
        name='last_name'
        type='text'
        value={formData.last_name}
        onChange={handleChange}
      /><br/>
       <label>Height:</label>
       <input
        name='height'
        type='number'
        value={formData.height}
        onChange={handleChange}
      /><br/>
       <label>Weight:</label>
       <input
        name='weight'
        type='number'
        value={formData.weight}
        onChange={handleChange}
      /><br/>
       <label>Username:</label>
       <input
        name='username'
        type='text'
        value={formData.username}
        onChange={handleChange}
      /><br/>
       <label>Password:</label>
       <input
        name='password'
        type='password'
        value={formData.password}
        onChange={handleChange}
      /><br/>
       <label>Password Confirmation:</label>
       <input
        name='passwordConfirmation'
        type='password'
        value={formData.passwordConfirmation}
        onChange={handleChange}
      /><br/>
      <input type='submit' />

      </form>
      
    </div>
  )
}

export default SignupForm