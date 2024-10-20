import { useEffect, useState } from 'react'
import './App.css'
import projects from './projects.json';

// SVGs
const Chevron = ({ flipped, size, margin, menu, closing }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={`chevron${flipped ? ' flipped' : ''}${menu ? ' menu' : ''}${closing ? ' closing' : ''}`}
      style={{ height: size, width: size, ...(margin ? { margin: `0 ${margin}` } : {}) }}
    >
      {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
      <path
        d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
    </svg>
  )
}

const Github = () => {
  return (
    <a href="https://www.github.com/isaiah0812">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="social-button">
        {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
      </svg>
    </a>
  )
}

const LinkedIn = () => {
  return (
    <a href="https://www.linkedin.com/in/isaiah-bullard-97b881170/">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="social-button">
        {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
      </svg>
    </a>
  )
}

const Music = () => {
  const [ showMsg, setShowMsg ] = useState(false);

  return (
    <a id="music-link" href="https://www.zaemadethis.com">
      {/* {showMsg && <Tooltip message="Wrong site, bud. 🤫😉" />} */}
      <svg id="music-button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="social-button" onMouseEnter={() => setShowMsg(true)} onMouseLeave={() => setShowMsg(false)}>
        {/* !Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc. */}
        <path d="M499.1 6.3c8.1 6 12.9 15.6 12.9 25.7l0 72 0 264c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L448 147 192 223.8 192 432c0 44.2-43 80-96 80s-96-35.8-96-80s43-80 96-80c11.2 0 22 1.6 32 4.6L128 200l0-72c0-14.1 9.3-26.6 22.8-30.7l320-96c9.7-2.9 20.2-1.1 28.3 5z"/>
      </svg>
    </a>
  )
}

// Components
const BackButton = ({ onClick }) => <button className="back-button" onClick={onClick}><Chevron flipped size="0.75rem" margin="0.25rem" />Back</button>

function Project({ project }) {
  return (
    <div className="project-container">
      <div className="project-header"><h2 className="project-title">{project.title}</h2> {project.urls.map((url, ndx) => (
        <span>
          <a href={url[1]}>{url[0]}</a>{ndx !== project.urls.length - 1 && " | "}
        </span>
      ))}</div>
      <hr className="project-divide" />
      <p className="project-description">{project.description}</p>
      <hr className="project-divide" />
      <ul>
        {project.tasks.map(task => <li>{task}</li>)}
      </ul>
      {project.demos.map((demo, ndx) => <img className="project-demo" src={demo} />)}
    </div>
  )
}

function Projects() {
  const [selected, setSelected] = useState(undefined);

  return (
    <div id="project-container">
      {selected && <BackButton onClick={() => setSelected(undefined)} />}
      {projects.map((project, ndx) => 
        <>
          {(!selected) && <button className="section-button" onClick={() => setSelected(project.title)}>{project.title}</button>}
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
    <div id="contact-container">
      <a href="/Resume.pdf" download>Click to download my Resume!</a>
      <a href="mailto:zae@zaemakeswebsites.com">zae@zaemakeswebsites.com</a>
      {rolling ? (
        <>
          <a href="tel:+15122419507">(512) 241-9507</a>
          <div id="roll-container">
            <iframe id="roll" src="http://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </>
      ) : <button id="call-button" onClick={ra}>{callText}</button>}
    </div>
  )
}

function Tooltip({message}) {
  return (
    <span className="tooltip">
      {message}
    </span>
  )
}

// Main Page
function App() {
  const [selected, setSelected] = useState(undefined)
  const [closing, setClosing] = useState(false);

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
    'AI\'s worst nightmare',
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

  const handleBack = () => {
    setClosing(true);
    setTimeout(() => {
      setSelected(undefined);
      setClosing(false);
    }, 1000)
  }

  return (
    <main>
      <div id="title-section">
        <h1 id="title">
          Isaiah Bullard
        </h1>
        <h2 id="job-title">{jobTitles[jobTitle]}</h2>
      </div>
      <div id="content">
        <div id="menu">
          {selected && <BackButton onClick={handleBack} />}
          {menuItems.map((item, ndx) =>
            (!selected || selected[0] === item[0]) && (
              <button className={`section-button${selected && selected[0] === item[0] ? ' selected' : ''}`} key={ndx} onClick={() => setSelected(item)}>{item[0]}</button>
            )
          )}
        </div>
        {selected && (
          <>
            <Chevron size="1.5rem" menu closing={closing} />
            <div id="page-container" className={`${closing ? 'closing' : ''}`}>
              {selected[1]}
            </div>
          </>
        )}
      </div>
      <div id="footer">
        <Github />
        <LinkedIn />
        <Music />
      </div>
    </main>
  )
}

export default App
