import './App.css'
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Doctor from './pages/Doctor';
import Login from './pages/Login';
import MyAppointments from './pages/MyAppointments';
import MyProfile from './pages/MyProfile';
import Appointement from './pages/Appointement';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <Router>
      <div className='mx-4 sm:mx-[5%]'>
        <Header/>
        <Routes>
          {/* Remove `exact` here */}
          {/* <Route path='/' element={<Header />} /> */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/doctor' element={<Doctor />} />
          <Route path='/doctor/:speciality' element={<Doctor />} />
          <Route path='/login' element={<Login />} />
          <Route path='/appointment/:docId' element={<Appointement />} />
          <Route path='/my-appointments' element={<MyAppointments />} />
          <Route path='/my-profile' element={<MyProfile />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  )
}

export default App; 
