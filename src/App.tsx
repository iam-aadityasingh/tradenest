import './index.css';
import Navbar from './components/Navbar/navbar';
import Dashboard from './components/Dashboard/dashboard';
import Footer from './components/Footer/footer';

export default function App() {

  return (
    <div className="App bg-black">
      <Navbar />
      <Dashboard />
      <Footer />
    </div>
  )
}

