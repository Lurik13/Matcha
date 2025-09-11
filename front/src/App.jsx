import { useState } from 'react'
import jediLogo from './assets/JediLogo.png'
import sithLogo from './assets/SithEmpireLogo.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={sithLogo} className="logo" alt="Sith logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={jediLogo} className="logo" alt="Jedi logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Bah oui, t'as qu'à apprendre l'aurebesh ! Et vite, ptdr...
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
