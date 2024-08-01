import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import BlogContext from './context/BlogContext';
import AuthContext from './context/AuthContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <AuthContext>
      <BlogContext>
        <App />
        <ToastContainer />
      </BlogContext>
    </AuthContext>
  </>
);

