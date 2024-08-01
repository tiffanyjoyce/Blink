import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './views/About';
import "./styles/globals.css"
import Content from './views/Content';
import Subscribe from './views/Subscribe';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route children path='/' element={<Home/>}/>
        <Route children path='/about' element={<About/>}/>
        <Route children path='/content' element={<Content/>}/>
        <Route children path='/subscribe' element={<Subscribe/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
