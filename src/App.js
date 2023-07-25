import React from 'react';
import './App.css';
import Nav from './components/NavBar';
import Header from './components/Hero';
import About from './components/About';
import Education from './components/Education'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  // edit this variable to change the color theme
  const color = "yellow";
  return (
    <>
      <Nav color={color} />
      <Header color={color} />
      <About color={color} />
      <Education color={color}></Education>
      <Experience color={color} />
      <Projects color={color} />
      <Contact color={color} />
    </>
  );
}

export default App;
