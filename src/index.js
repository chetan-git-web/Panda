import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from './components/Login';
import ResetPassword from './components/ResetPassword';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import MainPage from './components/MainPage';
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Signup />,
    },
    {
        path: "/resetpassword",
        element: <ResetPassword />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/forgotpassword",
        element: <ForgotPassword/>
    },
    {
        path: "/home",
        element: <MainPage/>
    },


]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={appRouter} />
);

