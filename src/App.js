import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'

function App() {
  const { authIsReady, user } = useAuthContext()

  return (
    <div>
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {
              user && 
              <Route path='/' element={<Home />} />
            }
            {
              !user && 
              <Route path='/' element={<Navigate to="/login" />} />
            }


            {
              user && 
              <Route path='/login' element={<Navigate to="/" />} />
            }
            {
              !user && 
              <Route path='/login' element={<Login />} />
            }


            {
              user && 
              <Route path='/signup' element={<Navigate to="/" />} />
            }
            {
              !user && 
              <Route path='/signup' element={<Signup />} />
            }
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App
