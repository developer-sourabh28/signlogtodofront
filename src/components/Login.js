import React, {useState, useEffect} from 'react'
import axios from 'axios';
import{useNavigate} from 'react-router-dom';

export default function Login() {

    const [user, setUser] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

   const LoginUser = async() => {
    try {

        const response = await axios.post('https://signlogtodoback.onrender.com/login', 
            {email, password})

         setUser([...user, response.data]);    
        setEmail('');
        setPassword('');
        alert('User logged in');
        navigate('/todo')
    } catch (error) {
        setError('Failed to login user');
        console.log(error);
    }
   }

  return (
    <div>
        <h1>Signup</h1>
        {error && <p style={{color:'red'}}>{error}</p>}
        <input
        type='text'
        value={email}
        placeholder='Enter email'
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
        type='text'
        value={password}
        placeholder='Enter password'
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={LoginUser}>Login</button>
    </div>
  )
}
