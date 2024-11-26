import React, {useState, useEffect} from 'react'
import axios from 'axios';
import{useNavigate} from 'react-router-dom';

export default function Signup() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

   const CreateUser = async() => {
    try {
        const response = await axios.post('https://signlogtodoback.onrender.com/signup', 
            {name : name, email : email, password : password})
    
        setName('');
        setEmail('');
        setPassword('');
        navigate('/login')
    } catch (error) {
        setError('Failed to create user')
    }
   }

  return (
    <div>
        <h1>Signup</h1>
        <input
        type='text'
        value={name}
        placeholder='Enter Name'
        onChange={(e) => setName(e.target.value)}
        />
        <input
        type='text'
        value={email}
        placeholder='Enter Name'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type='text'
        value={password}
        placeholder='Enter Name'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={CreateUser}>Signup</button>
    </div>
  )
}
