import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Service from "./services/service";
import Experience from "./experience/Experience";
import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";
import Footer from './footer/Footer'
import { useState } from "react";
import './App.css'
function App(props) {
  const [dark,setdark]=useState(false);
  console.log(dark)

  return (
    <div className="App"  style={{backgroundColor:dark?"black": '',color:dark?"white" : ''}} >
      {/* style={{backgroundColor:"black",color:"white"}} */}
      <Navbar dark={dark}  setdark={setdark}/>

      <Intro/>
      <Service/>
      <Experience/>
      <Projects/>
      <Contacts/>
      <Footer/>
    </div>
  );
}

export default App;
