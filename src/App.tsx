import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Login />}/>
      </Routes>
    </>
  )
}
