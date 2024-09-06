import { useEffect, useState } from 'react'
import './App.css'
import projects from './projects.json';

const Chevron = ({ flipped, size, margin }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    fill="#f5f4f0"
    className={`chevron${flipped ? ' flipped' : ''}`}
    style={{ height: size, width: size, margin: `0 ${margin}`}}
  >
    {/* <!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
    <path
      d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
  </svg>
)

function BackButton({ onClick }) {
  return (
    <>
      <button id="back-button" onClick={onClick}><Chevron flipped size="0.75rem" margin="0.25rem" />Back</button>
      <br />
    </>
  )
}

function Project({ project }) {
  return (
    <div>
      <h2 className="project-title">{project.title}</h2> | <span>{project.description}</span>
      <br></br>
      {project.urls.map((url, ndx) => (
        <>
          <a href={url[1]}>{url[0]}</a>{ndx !== project.urls.length - 1 && " | "}
        </>
      ))}
      <ul>
        {project.tasks.map(task => <li>{task}</li>)}
      </ul>
      {project.demos.map(demo => <img src={demo} />)}
    </div>
  )
}

function Projects() {
  const [selected, setSelected] = useState(undefined);

  return (
    <div>
      {selected && <BackButton onClick={() => setSelected(undefined)} />}
      {projects.map((project, ndx) => 
        <>
          {(!selected) && <button className="section-button" onClick={() => setSelected(project.title)}>{project.title}</button>}
          {(ndx !== projects.length - 1 && !selected) && <br />}
          {(selected === project.title) && <Project project={project} />}
        </>
      )}
    </div>
  )
}

function Contact() {
  const [ callText, setCallText ] = useState('Call Me!')
  const [ countDown, setCountDown ] = useState(3);
  const [ rolling, setRolling ] = useState(false);

  const ra = () => {
    setCallText(`I'm so sorry...${countDown}`)

    const raTimer = setInterval(() => {
      setCountDown((prev) => {
        if (prev === 0) {
          clearInterval(raTimer);
          setRolling(true);
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
      {rolling ? (
        <>
          <a href="tel:+15122419507">(512) 241-9507</a>
          <iframe width="420" height="345" src="http://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>
        </>
      ) : <button onClick={ra}>{callText}</button>}
    </div>
  )
}

function App() {
  const [selected, setSelected] = useState(undefined)

  const menuItems = [
    ['Projects', <Projects />],
    ['Contact', <Contact />]
  ];

  const jobTitles = [
    'Software Engineer',
    'Web Developer',
    'Computer Scientist',
    'Professional Problem Solver',
    'Computer Man',
    'Rennaisance Man',
    'Dawg',
    'Jack of A Few Trades',
    'Batman',
    'AI, except Human',
    'Vance Refrigeration',
    'Lightning Bender (Technically)',
    'Isaiah Bullard'
  ];

  const [jobTitle, setJobTitle] = useState(0)

  useEffect(() => {
    const titleScroll = setInterval(() => {
      setJobTitle(prev => {
        if (prev === jobTitles.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000)

    return () => clearInterval(titleScroll);
  }, []);

  return (
    <main>
      <h1 id="title">
        Isaiah Bullard:
        <br />
        {jobTitles[jobTitle]}
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
        {selected && (
          <>
            <Chevron size="1.5rem" margin="1.5rem" />
            {selected[1]}
          </>
        )}
      </div>
    </main>
  )
}

export default App
