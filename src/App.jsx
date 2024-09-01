import { useState } from 'react'
import './App.css'

function BackButton({ onClick }) {
  return (
    <div>
      {/* <img id="chevron" src="chevron-up-solid.svg" /> */}
      <button id="back-button" onClick={onClick}>Back</button>
      <br />
    </div>
  )
}

function Services() {
  return <div>Services</div>
}

function Projects() {
  return <div>Projects</div>
}

function Contact() {
  return <div>Contact</div>
}

function App() {
  const [selected, setSelected] = useState(undefined)

  const menuItems = [
    ['Services', <Services />],
    ['Projects', <Projects />],
    ['Contact', <Contact />]
  ];

  return (
    <main>
      <h1 id="title">
        Isaiah Bullard:
        <br />
        Professional Problem Solver.
      </h1>
      <div id="content">
        <div id="menu">
          {selected && <BackButton onClick={() => setSelected(undefined)} />}

          {menuItems.map((item, ndx) =>
            <>
              {(!selected || selected[0] === item[0]) && (<button className="section-button" key={item[0]} onClick={() => setSelected(item)}>{item[0]}</button>)}
              {((ndx !== menuItems.length - 1 && !selected) && <br />)}
            </>
          )}
        </div>
        {selected && selected[1]}
      </div>
    </main>
  )
}

export default App
