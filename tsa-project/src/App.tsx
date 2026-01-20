import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Layout } from './layout'
import { Home } from './pages/Home'
import { Resources } from './pages/Resources'
import { About } from './pages/About'
import { Contact } from './pages/Contact'
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="resources" element={<Resources/>} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App