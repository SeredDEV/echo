import Header from './components/Header'
import Hero from './components/Hero'
import ProductCarousel from './components/ProductCarousel'
import Categories from './components/Categories'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <ProductCarousel />
                <Categories />
                <Features />
                <Contact />
            </main>
            <Footer />
            <FloatingButtons />
        </div>
    )
}

export default App
