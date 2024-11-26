import React, {useState, useEffect} from 'react'
import axios from 'axios';
import{useNavigate} from 'react-router-dom';

export default function TodoList() {

    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [status, setStatus] = useState('');
    const [error, setError] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        getTodo();
    }, []);

   const CreateTodo = async() => {
    try {
        const response = await axios.post('https://signlogtodoback.onrender.com/todo', 
            {title: newTodo},
        {withCredentials : true}
        )
    
        setTodos([...todos, response.data]);
        setNewTodo('');
        alert('Todo added');
    } catch (error) {
        setError('Failed to create todo')
    }
   }

   const getTodo = async() => {
    try {
        const response = await axios.get('http://localhost:8000/todo',
           {withCredentials : true},
        )

        setTodos(response.data);
    } catch (error) {
        setError('Failed to fetch todos')
    }
   }

  return (
    <div>
        <h1>Signup</h1>
        {error && <p style={{color:'red'}}>{error}</p>}
        <input
        type='text'
        value={newTodo}
        placeholder='Enter Todo'
        onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={CreateTodo}>Add Todo</button>
        <ul>
            {todos.map (todo => (
                <li key={todo._id}>
                    {todo.title}
                </li>
            ))}
        </ul>
        
    </div>
  )
}
