import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/home';
import Navbar from './Components/Navbar/navbar';
import React, { useEffect } from 'react'
import Services from './Pages/Services/Services'
import Category from './Pages/category';
import Contact from './Pages/ContactUs/Contact';
import Footer from './Components/Footer/Footer';
import Register from './Pages/Admin/Register';
import Login from './Pages/Admin/Login';
import AdminContactDetail from './Pages/Admin/AdminContactDetail';
import ProtectedRoutes from './Components/ProtectedRoute/ProtectedRoutes';
import AdminProject from './Pages/Admin/AdminProject';
import ProjectDetail from './Pages/Admin/ProjectDetail';
import ProjectCategory from './Pages/Admin/ProjectCategory';
import { useSelector } from 'react-redux';
import Loader from './Components/Loader/Loader';
import About from './Pages/AboutUs/About';
import NotFoundPage from './Pages/InvalidPage.js/InvalidPage';
import AdminStat from './Pages/Admin/AdminStat';
import Media from './Pages/Media/Media';
// import { usersVisited } from './Apicalls/UsersApi';
function App() {

  const { loading } = useSelector((state) => state.loaders);

  // useEffect(() => {
  //   // Make a request to the server to track the visit
  //   usersVisited();
  // }, []);

  return (
    <div className='wrapper'>
      {loading && <Loader />}
      <BrowserRouter>
        
        <Routes>
          <Route path='/' element={<><Navbar /><Home /><Footer /></>} />
          <Route path='/Services' element={<><Navbar /><Services /><Footer /></>} />
          <Route path='/Project/:id' element={<><Navbar /><Category /><Footer /></>} />
          <Route path='/Contact' element={<><Navbar /><Contact /><Footer /></>} />
          <Route path='/About' element={<><Navbar /><About /><Footer /></>} />
          <Route path='/Media' element={<><Navbar /><Media /><Footer /></>} />
          <Route path='/Loader' element={<Loader />} />
          <Route path='/RegisterAdmin' element={<Register />} />
          <Route path='/LoginAdmin' element={<Login />} />
          <Route path='/AdminContact' element={<ProtectedRoutes><AdminContactDetail /></ProtectedRoutes>} />
          <Route path='/AdminStat' element={<ProtectedRoutes><AdminStat /></ProtectedRoutes>} />
          <Route path='/AdminProject' element={<ProtectedRoutes><AdminProject /></ProtectedRoutes>} />
          <Route path='/DetailProject' element={<ProtectedRoutes><ProjectDetail /></ProtectedRoutes>} />
          <Route path='/CategoryProject' element={<ProtectedRoutes><ProjectCategory /></ProtectedRoutes>} />
          <Route path="*" element={<NotFoundPage/>} />
        </Routes>

      </BrowserRouter>

    </div>


  );
}

export default App;
