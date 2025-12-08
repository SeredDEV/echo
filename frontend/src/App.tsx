import Header from "./components/layout/Header";
import Hero from "./components/home/Hero";
import ProductCarousel from "./components/home/ProductCarousel";
import Categories from "./components/home/Categories";
import Features from "./components/home/Features";
import Footer from "./components/layout/Footer";
import FloatingButtons from "./components/common/FloatingButtons";

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
      <FloatingButtons />
    </div>
  );
}

export default App;
