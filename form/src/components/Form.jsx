import React from 'react'
import './Form.css'
import { useState } from 'react';

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState('');
    const [contact, setContact] = useState('');
    const [gender, setGender] = useState('male');

  return (
   <form action="">
    <fieldset className='main'>
    <fieldset className='info f'>
    <legend className='title'>Employee Info</legend>
        <label className='label'>Employee name:
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name' />
        </label>
        <label className='label'>Work Email:
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='example@gmail.com' />
        </label>
        <label className='label'>Contact:
            <input type="text" value={contact} onChange={(e) => setContact(e.target.value)}  />
        </label>
        <label className='label'>Gender:
      <select value={gender} onChange={(e) => setGender(e.target.value)}>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
      </label>
        <label className='label'>Department:
            <input type="text" />
        </label>
        <label className='label'>Designation:
            <input type="text" />
        </label>
    </fieldset>   

    <fieldset className='skill f'>
    <legend className='title'>Skill Set</legend>
        <label className='label'>Specialization:
            <input type="dropdown" />
        </label>
        <label className='label'>Tools:
            <input type="text" />
        </label>
      
    </fieldset>

    <fieldset className='dept f'>
    <legend className='title'>Department Details</legend>
        <label className='label'>Supervisor name:
            <input type="text" />
        </label>
        <label className='label'> Product:
            <input type="text" />
        </label>
       
       
    </fieldset>

    <fieldset className='family f'>
    <legend className='title'>Family Status</legend>
        <label className='label'>Marital Status:
            <input type="text" />
        </label>
        <label className='label'>Number of Dependents:
            <input type="text" />
        </label>
        
    </fieldset> 

    <div className="submit-container">
        <div className="submit">Submit</div>
        
    </div>

    </fieldset>
  
   </form>
  )
}

export default Form