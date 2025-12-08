import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Login from './components/Login'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import './index.css'

import { CartProvider } from './context/CartContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <CartProvider>
            <div className="min-h-screen">
                <Header />
                <main>
                    <Login />
                </main>
                <Footer />
                <FloatingButtons />
            </div>
        </CartProvider>
    </React.StrictMode>,
)
