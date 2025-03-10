import { useState } from 'react'
import './App.css'
import UrlShortener from './Component/URLshort'

function App() {
  const [text, setText] = useState(0)

  return (
    <>
      <UrlShortener/>
    </>
  )
}

export default App
