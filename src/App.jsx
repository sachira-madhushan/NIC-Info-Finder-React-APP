import './App.css'
import Details from './screens/Details/Details'
import Home from './screens/Home/Home'
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
      </Routes>
    </>
  )
}

export default App
