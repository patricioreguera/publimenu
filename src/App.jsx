import { useState , useEffect} from 'react'
import './App.css'
import { getPromoImg } from './getPromoImg'

function App() {
const [loading, setLoading] = useState(true)
const [ url,name ]=getPromoImg()

useEffect(() => {
  setTimeout(() => {
    setLoading(false)
    console.log("cargo el menu")
}, 4000);
}, []);


  return (
    <div className="App">
      {
loading ? 
<>
<h4>{`Se esta cargando el menu de ${name}`}</h4>
<img src={url} alt="none" /> 
</> 
:
<h1>Menu</h1>
      }
   

    </div>
  )
}

export default App
