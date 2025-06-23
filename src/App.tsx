import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Inventory from './components/Inventory'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function HomeSections() {
  return (
    <>
      <Hero />
      <About />
      <Inventory />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-gray-100">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomeSections />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
