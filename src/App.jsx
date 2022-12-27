import { useState } from 'react'
import './App.css'
import { Ads } from './components/Ads'
import { Menu } from './components/Menu'

export default function App() {
  const [loading, setLoading] = useState(true)

  return (
    <div className="App">
      {
        loading ?
       <Ads setLoading = { setLoading }/> :
       <Menu/>
      }
    </div>
  )
}

