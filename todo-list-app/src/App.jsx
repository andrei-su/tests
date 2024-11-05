import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageLink from './components/ImageLink'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <ImageLink href="https://vite.dev" src={viteLogo} alt="Vite logo" />
        <ImageLink
          href="https://react.dev"
          src={reactLogo}
          alt="React logo"
          className={'react'}
        />
      </div>
      <h1>Vite + Reacts</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
