import Header from './components/Header'
import Hero from './components/Hero'
import ProductCarousel from './components/ProductCarousel'
import Categories from './components/Categories'
import Features from './components/Features'
import Footer from './components/Footer'

function App() {
    return (
        <div className="min-h-screen">
            <Header />
            <main>
                <Hero />
                <ProductCarousel />
                <Categories />
                <Features />
            </main>
            <Footer />
        </div>
    )
}

export default App
