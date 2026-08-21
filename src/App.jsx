import { useState } from 'react'
import { Navbar } from './layout/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
      {/* Sections go here */}
      </main>
    </div>
  )
}

export default App
