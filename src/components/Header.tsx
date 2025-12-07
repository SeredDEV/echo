import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Banner */}
            <div className="gradient-bg text-white py-2 text-center text-sm font-medium">
                <div className="container mx-auto px-4 flex items-center justify-center gap-4">
                    <span>🚛 Envío gratis</span>
                    <span className="hidden sm:inline">•</span>
                    <span>💸 Paga al recibir</span>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="index.html" className="flex items-center hover:opacity-80 transition-opacity">
                                <img
                                    src="assets/logo/logo.png"
                                    alt="Echo Tecnología"
                                    className="h-12 md:h-20 w-auto"
                                    style={{ mixBlendMode: 'multiply' }}
                                    onError={(e) => {
                                        e.currentTarget.style.display = 'none';
                                        const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
                                        if (textLogo) textLogo.style.display = 'block';
                                    }}
                                />
                                <h1 className="text-2xl md:text-3xl font-display font-bold text-gradient hidden">
                                    Echo Tecnología
                                </h1>
                            </a>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center gap-2">
                            <a href="index.html" className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50">
                                Inicio
                            </a>
                            <a href="#altavoces" className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50">
                                Altavoces Inteligentes
                            </a>
                            <a href="#streaming" className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50">
                                Dispositivos Streaming
                            </a>
                            <a href="#accesorios" className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50">
                                Accesorios Inteligentes
                            </a>
                            <a href="about.html" className="px-5 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105">
                                Sobre nosotros
                            </a>
                            <a href="#contacto" className="px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-all duration-300 rounded-lg hover:bg-gray-50">
                                Contacto
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <button className="px-4 py-2 text-primary-600 hover:text-primary-700 font-semibold transition-colors">
                                Iniciar sesión
                            </button>
                            <button className="px-5 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Carrito
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                            aria-label="Toggle menu"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 space-y-2 animate-slide-up border-t border-gray-100 pt-4">
                            <a href="index.html" className="block px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-300">
                                Inicio
                            </a>
                            <a href="#altavoces" className="block px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-300">
                                Altavoces Inteligentes
                            </a>
                            <a href="#streaming" className="block px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-300">
                                Dispositivos Streaming
                            </a>
                            <a href="#accesorios" className="block px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-300">
                                Accesorios Inteligentes
                            </a>
                            <a href="about.html" className="block px-4 py-2.5 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-all duration-300 text-center">
                                Sobre nosotros
                            </a>
                            <a href="#contacto" className="block px-4 py-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-50 font-medium rounded-lg transition-all duration-300">
                                Contacto
                            </a>
                            <div className="pt-4 space-y-2 border-t border-gray-100 mt-2">
                                <button className="w-full px-4 py-2.5 text-primary-600 hover:bg-primary-50 font-semibold rounded-lg transition-all duration-300">
                                    Iniciar sesión
                                </button>
                                <button className="w-full px-4 py-2.5 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    Carrito
                                </button>
                            </div>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;
