import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import "./styles/globals.css"

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route children path='/' element={<Home/>}/>
      </Routes>
    </>
  );
}

export default App;
