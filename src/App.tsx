import './index.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import Dashboard from './pages/Dashboard/dashboard';
import Footer from './components/Footer/footer';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Login from './pages/Login/login';
import Signup from './pages/SignUp/signup';

export default function App() {
  return (
    <div className="App bg-black min-h-screen">
      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      <Footer />
    </div>
  );
}