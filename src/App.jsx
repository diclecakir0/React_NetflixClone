import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MainPage from './pages/MainPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import MovieDetail from './pages/MovieDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/movie/:movie_id' element={<MovieDetail/>} />
      </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
