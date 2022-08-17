import { useState, useEffect, useRef } from 'react'

import Nav from './Components/Nav';

import Main from './Sections/Main';
import About from './Sections/About';
import Skills from './Sections/Skills';
import Projects from './Sections/Projects';
import SideProjects from './Sections/SideProjects';
import Connect from './Sections/Connect';

import './scss/main.scss';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
		<Nav></Nav>
		<Main></Main>
		<About></About>
		<Skills></Skills>
		<Projects></Projects>
		<SideProjects></SideProjects>
		<Connect></Connect>
    </div>
  )
}

export default App
