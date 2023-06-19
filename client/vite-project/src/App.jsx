import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Shop from './pages/Site/Shop/Shop'
import Home from './pages/Site/Home/Home'
import Contact from './pages/Site/Contact/Contact'
import About from './pages/Site/About/About'
import Blog from './pages/Site/Blog/Blog'
import Dashboard from './pages/Admin/Dashboard/Dashboard'
import News from './pages/Site/News/News'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>


<Routes>
  <Route element={<Home/>} path='/'/>
  <Route element={<Blog/>} path='/blog'/>
  <Route element={<News/>} path='/news'/>
  <Route element={<Shop/>} path='/shop'/>
  <Route element={<About/>} path='/about'/>
  <Route element={<Contact/>} path='/contact'/>  
  <Route element={<Dashboard/>} path='/admin'/>  
</Routes>

    </>
  )
}

export default App
