import logo from './logo.svg';
import './App.css';
import Nav from './Components/Navbar/Navbar.jsx';
import Form from './Components/Form/Form';
import Home from './Components/Home/Home';
import Temp from './Components/Temp/Temp';
import About from './Components/About/About';
import { Routes, Route } from 'react-router-dom';
import Template from './Components/Template/Template';
import { useState } from 'react';
function App() {
  var ds={name:"Andrew Joemon",age:22};
  const [inputs,setInput] =useState({});
  const Reset=(e)=>{
    e.preventDefault();
    setInput("");

}

  return (
    <div className='root1' >
      <Nav Reset={Reset}></Nav>
<<<<<<< HEAD
        <Routes>       
        <Route path="/" exact element={<Home Reset={Reset}/>}></Route>
        <Route path="/About" element={<About data={ds}/>}></Route>
=======
        <Routes>    
        <Route path="/" element={<About data={ds}/>}></Route>

        <Route path="/About" exact element={<Home Reset={Reset}/>}></Route>
>>>>>>> 815b9ca01445b07992ddba29153082254ec00fb2
        <Route path="/Form" element={<Form inputs={inputs} setInput={setInput} Reset={Reset}/>}></Route>
        <Route path="/Temp" exact element={<Temp/>}></Route>
        <Route path="/Template" element={<Template inputs={inputs}/>}></Route>
        </Routes>
   
      
    </div>
  );
}

export default App;
