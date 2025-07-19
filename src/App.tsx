import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Dashboard from './pages/Dashboard/dashboard';
import Footer from './components/Footer/footer';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';

export default function App() {

  return (
    <div className="App bg-black">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

