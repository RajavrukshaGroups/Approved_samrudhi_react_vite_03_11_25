import React, { useEffect } from 'react';
import AllRoute from '../router/index.jsx';
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
import './App.css';
import '../../index.css';
//optimization level
const App = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000,
        });
    }, []);

    return (
        <div className="App body_wrap">
            <div className="toast-wrapper">
                <ToastContainer/>
            </div>
                <AllRoute />
        </div>
    );
};

export default App;

