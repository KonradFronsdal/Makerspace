import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.tsx'
import Wiki from './pages/Wiki.tsx'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/wiki' element={<Wiki />} />
    </Routes>
  )
}

export default App
