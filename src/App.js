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
        <Routes>       
        <Route path="/react-app/" exact element={<Home Reset={Reset}/>}></Route>
        <Route path="/react-app/About" element={<About data={ds}/>}></Route>
        <Route path="/react-app/Form" element={<Form inputs={inputs} setInput={setInput} Reset={Reset}/>}></Route>
        <Route path="/react-app/Temp" exact element={<Temp/>}></Route>
        <Route path="/react-app/Template" element={<Template inputs={inputs}/>}></Route>
        </Routes>
   
      
    </div>
  );
}

export default App;
