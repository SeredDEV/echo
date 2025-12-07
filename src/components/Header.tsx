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
            <header className="bg-white shadow-md sticky top-0 z-50">
                <nav className="container mx-auto px-4 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="#inicio" className="flex items-center">
                                <img
                                    src="assets/logo/logo.png"
                                    alt="Echo Tecnología"
                                    className="h-12 md:h-20 w-auto"
                                    style={{ mixBlendMode: 'multiply' }}
                                    onError={(e) => {
                                        // Si la imagen no existe, mostrar texto
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
                        <div className="hidden lg:flex items-center space-x-8">
                            <a href="index.html" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                                Inicio
                            </a>
                            <a href="about.html" className="bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                Sobre nosotros
                            </a>
                            <a href="#altavoces" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                                Altavoces Inteligentes
                            </a>
                            <a href="#streaming" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                                Dispositivos Streaming
                            </a>
                            <a href="#accesorios" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                                Accesorios Inteligentes
                            </a>
                            <a href="#contacto" className="text-gray-700 hover:text-primary-600 font-medium transition-colors">
                                Contacto
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button className="text-primary-600 hover:text-primary-700 font-medium transition-colors">
                                Iniciar sesión
                            </button>
                            <button className="btn-primary">
                                🛒 Carrito
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
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
                        <div className="lg:hidden mt-4 pb-4 space-y-3 animate-slide-up">
                            <a href="index.html" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                                Inicio
                            </a>
                            <a href="about.html" className="block bg-primary-500 hover:bg-primary-600 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                                Sobre nosotros
                            </a>
                            <a href="#altavoces" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                                Altavoces Inteligentes
                            </a>
                            <a href="#streaming" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                                Dispositivos Streaming
                            </a>
                            <a href="#accesorios" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                                Accesorios Inteligentes
                            </a>
                            <a href="#contacto" className="block text-gray-700 hover:text-primary-600 font-medium py-2 transition-colors">
                                Contacto
                            </a>
                            <div className="pt-4 space-y-2">
                                <button className="w-full text-primary-600 hover:text-primary-700 font-medium py-2 transition-colors">
                                    Iniciar sesión
                                </button>
                                <button className="w-full btn-primary">
                                    🛒 Carrito
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
