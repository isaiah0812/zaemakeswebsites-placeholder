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

function Projects() {
  return <div>Projects</div>
}

function Contact() {
  const [ callText, setCallText ] = useState('Call Me!')
  const [ countDown, setCountDown ] = useState(5);
  const [ rolling, setRolling ] = useState(false);

  const ra = () => {
    setCallText(`I'm so sorry...${countDown}`)

    const raTimer = setInterval(() => {
      setCountDown((prev) => {
        if (prev === 0) {
          clearInterval(raTimer);
          setRolling(true);
          setCallText("I can't have random people calling me.")
          return 0;
        } else {
          setCallText(`I'm so sorry...${prev - 1}`)
          return prev - 1;
        }
      })
    }, 1000)


    return () => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ').focus();
  }
  return (
    <div>
      Email: <a href="mailto:zae@zaemakeswebsites.com">zae@zaemakeswebsites.com</a>
      <br />
      <button onClick={ra}>{callText}</button>
      {rolling && (
        <iframe width="420" height="345" src="http://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>
      )}
    </div>
  )
}

function App() {
  const [selected, setSelected] = useState(undefined)

  const menuItems = [
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
