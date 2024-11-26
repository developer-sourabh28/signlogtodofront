import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Signup from './components/Signup';
import Login from  './components/Login';
import Todo  from './components/TodoList'

function App() {
  return (
      <Router>
        <div className="App"></div>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='/todo' element={<Todo/>}/>
        </Routes>
      </Router>
  );
}

export default App;
