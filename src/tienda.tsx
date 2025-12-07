import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Shop from './components/Shop';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Header />
        <Shop />
        <Footer />
        <FloatingButtons />
    </React.StrictMode>
);
