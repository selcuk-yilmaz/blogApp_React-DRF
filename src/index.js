import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ToastContainer } from 'react-toastify';
import BlogContext from './context/BlogContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BlogContext>
      <App />
      <ToastContainer />
    </BlogContext>
  </>
);

