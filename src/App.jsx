import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import './MainStyles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import BlogDetail from './pages/BlogDetail'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        {/* Header */}
        <Header />

        <Routes>
          <Route path="/thereverter/" element={<Home/>}></Route>
          <Route path="/thereverter/blog-detail/:id" element={<BlogDetail/>}></Route>
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </>
  )
}

export default App
