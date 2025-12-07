import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Cart from './components/Cart'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <div className="min-h-screen">
            <Header />
            <main>
                <Cart />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    </React.StrictMode>,
)
