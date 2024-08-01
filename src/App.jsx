import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Contador De Clicks</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Clicks: {count}
        </button>
        <button onClick={() => setCount((count) => count - count)}>
          Reset
          </button>

      </div>
      
    </>
  )
}

export default App
