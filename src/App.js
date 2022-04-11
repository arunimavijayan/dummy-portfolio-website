import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";

export default function App(){
  return(
    //tailwind css used in main class
    <main className="text-gray-400 bg-gray-900 body-font"> 
      <Navbar/> 
       <About/>
       <Projects/> 
       <Skills/> 
      {/* <Testimonials/> */}
     <Contact/> 
    </main>
  );
}
//import { render } from '@testing-library/react';
// import React, { Component } from 'react';
// import './App.css' ;
// import * as styles from './styles';
// class App extends Component {
 
//  render(){
//   const  name="arunima"
  
//   return (
//     <div className="App">
//       <div style={styles.styles}>
//         Style
//       </div>
//       react: 
//       {name}
//     <button>click me</button>
//     </div>
//   );
// }}
// console.log(<div/>);
// const appinstance=new App();
// console.log(appinstance);


// export default App;
