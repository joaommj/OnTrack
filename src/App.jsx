import './App.css'
import { Route, Routes } from 'react-router-dom'
import NavBar from './pages/NavBar'
import Footer from './pages/Footer'
import HomePage from './pages/HomePage'
import CreateBike from './pages/CreateBike'
import BicycleDetail from './pages/BicycleDetail'
import NotFoundPage from './pages/NotFoundPage'
import AboutPage from './pages/AboutPage'
import Mountain from './pages/Mountain'
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/details/:bicycleId" element={<BicycleDetail />} />
        <Route path="/create" element={<CreateBike />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/mountain" element={<Mountain/>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
