import './index.css';
import { Routes, Route } from 'react-router-dom';
import AuthLayout from './layouts/AuthLayout';
import Dashboard from './pages/Dashboard/dashboard';
import MainLayout from './layouts/MainLayout';
import About from './pages/About/about';
import Contact from './pages/Contact/contact';
import Login from './pages/Login/login';
import Signup from './pages/SignUp/signup';

export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* Auth Pages */}
        <Route
          path="/login"
          element={
            <AuthLayout>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout>
              <Signup />
            </AuthLayout>
          }
        />

        {/* Main Pages */}
        <Route
          path="/dashboard"
          element={
            <MainLayout>
              <Dashboard />
            </MainLayout>
          }
        />
        <Route
          path="/about"
          element={
            <MainLayout>
              <About />
            </MainLayout>
          }
        />
        <Route
          path="/contact"
          element={
            <MainLayout>
              <Contact />
            </MainLayout>
          }
        />
      </Routes>
    </div>
  );
}