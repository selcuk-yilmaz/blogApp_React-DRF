import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from '../pages/Dashboard';
import Register from '../pages/Register';
import Login from '../pages/Login';
import Footer from '../components/footer/Footer';
import Navbar from '../components/navbar/Navbar';
import Profile from '../pages/Profile';
// import About from '../pages/About';
// import BlogDetails from '../pages/BlogDetails';
// import NewBlog from '../pages/NewBlog';
// import UpdateBlog from '../pages/UpdateBlog';
// import UsersBlogs from '../pages/UsersBlogs';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
                {/* <Route path='/dashboard' element={<Dashboard />} /> */}
                {/* <Route path='/about' element={<About />} /> */}
                {/* <Route path='/newblog' element={<PrivateRouter />}>
                    <Route path='' element={<NewBlog />} />
                </Route> */}
                {/* <Route path='/myblogs' element={<PrivateRouter />}>
                    <Route path='' element={<UsersBlogs />} />
                </Route> */}
                {/* <Route path='/details/:str' element={<PrivateRouter />}>
                    <Route path='' element={<BlogDetails />} />
                </Route> */}
                {/* <Route path='/update/:str' element={<PrivateRouter />}>
                    <Route path='' element={<UpdateBlog />} />
                </Route> */}
                <Route path='/profile' element={<PrivateRouter />}>
                    <Route path='' element={<Profile />} />
                </Route>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter