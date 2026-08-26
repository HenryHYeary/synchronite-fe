import './App.css';
import { Routes, Route } from 'react-router-dom';
import Login from './Login';
import Home from './Home';
import Watched from './Watched';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Login />}/>
        <Route path='/watched' element={<Watched />} />
      </Routes>
    </>
  )
}
