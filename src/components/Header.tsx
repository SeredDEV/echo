import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            {/* Top Banner */}
            <div
                className="gradient-bg text-white py-3 text-center text-sm font-medium relative z-50 min-h-[44px]"
                style={{ minHeight: '44px' }}
            >
                <div className="container mx-auto px-4 flex items-center justify-center gap-4 h-full">
                    <span>🚛 Envío gratis</span>
                    <span className="hidden sm:inline">•</span>
                    <span>💸 Paga al recibir</span>
                </div>
            </div>

            {/* Main Header */}
            <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center">
                            <a href="index.html" className="flex items-center hover:opacity-80 transition-opacity bg-white rounded-lg">
                                <img
                                    src="assets/logo/logo.png"
                                    alt="Echo Tecnología"
                                    className="h-12 md:h-20 w-auto bg-white"
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
                        <div className="hidden lg:flex items-center gap-1">
                            <a href="index.html" className="group relative px-4 py-2 text-gray-700 font-medium transition-all duration-300">
                                <span className="relative z-10">Inicio</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
                            </a>

                            {/* Altavoces Inteligentes Dropdown */}
                            <div className="group relative">
                                <a href="#altavoces" className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium transition-all duration-300">
                                    <span className="relative z-10">Altavoces Inteligentes</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="py-2">
                                        <a href="#altavoces" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Amazon Alexa</div>
                                            <div className="text-xs text-gray-500">Echo, Echo Dot, Echo Show</div>
                                        </a>
                                        <a href="#altavoces" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Google Home</div>
                                            <div className="text-xs text-gray-500">Nest Audio, Nest Mini</div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Dispositivos Streaming Dropdown */}
                            <div className="group relative">
                                <a href="#streaming" className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium transition-all duration-300">
                                    <span className="relative z-10">Dispositivos Streaming</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="py-2">
                                        <a href="#streaming" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Amazon Fire TV</div>
                                            <div className="text-xs text-gray-500">Fire TV Stick, Fire TV Cube</div>
                                        </a>
                                        <a href="#streaming" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Google Chromecast</div>
                                            <div className="text-xs text-gray-500">Chromecast con Google TV</div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Accesorios Inteligentes Dropdown */}
                            <div className="group relative">
                                <a href="#accesorios" className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium transition-all duration-300">
                                    <span className="relative z-10">Accesorios Inteligentes</span>
                                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
                                </a>
                                <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                                    <div className="py-2">
                                        <a href="#accesorios" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Bombillos Inteligentes</div>
                                            <div className="text-xs text-gray-500">LED RGB, Blanco ajustable</div>
                                        </a>
                                        <a href="#accesorios" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Tomacorrientes</div>
                                            <div className="text-xs text-gray-500">Control remoto, WiFi</div>
                                        </a>
                                        <a href="#accesorios" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Apagadores Inteligentes</div>
                                            <div className="text-xs text-gray-500">Touch, Control por voz</div>
                                        </a>
                                        <a href="#accesorios" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Cintas LED</div>
                                            <div className="text-xs text-gray-500">RGB, Música sincronizada</div>
                                        </a>
                                        <a href="#accesorios" className="block px-4 py-2 text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors">
                                            <div className="font-semibold">Cerraduras Inteligentes</div>
                                            <div className="text-xs text-gray-500">Huella, PIN, App</div>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <a href="about.html" className="group relative px-4 py-2 text-gray-700 font-medium transition-all duration-300">
                                <span className="relative z-10">Sobre nosotros</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                            <a href="contacto.html" className="group relative px-4 py-2 text-gray-700 font-medium transition-all duration-300">
                                <span className="relative z-10">Contacto</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-600 to-accent-600 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        </div>

                        {/* Desktop CTA Icons */}
                        <div className="hidden lg:flex items-center gap-2">
                            <a
                                href="login.html"
                                className="p-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                                aria-label="Iniciar sesión"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                            <a
                                href="carrito.html"
                                className="p-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all duration-300 relative"
                                aria-label="Carrito"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </a>
                        </div>

                        {/* Mobile Right Section */}
                        <div className="flex lg:hidden items-center gap-1">
                            <a
                                href="login.html"
                                className="p-2 text-gray-700 hover:text-primary-600 transition-all duration-300"
                                aria-label="Iniciar sesión"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </a>
                            <a
                                href="carrito.html"
                                className="p-2 text-gray-700 hover:text-primary-600 transition-all duration-300"
                                aria-label="Carrito"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </a>
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 text-gray-700 hover:text-primary-600 transition-all duration-300 ml-1"
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
                    </div>

                    {/* Mobile Menu */}
                    {isMenuOpen && (
                        <div className="lg:hidden mt-4 pb-4 space-y-1.5 animate-slide-up">
                            <a href="index.html" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>
                                </div>
                                <span>Inicio</span>
                            </a>
                            <a href="#altavoces" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                                    </svg>
                                </div>
                                <span>Altavoces Inteligentes</span>
                            </a>
                            <a href="#streaming" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span>Dispositivos Streaming</span>
                            </a>
                            <a href="#accesorios" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>Accesorios Inteligentes</span>
                            </a>
                            <a href="about.html" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <span>Sobre nosotros</span>
                            </a>
                            <a href="contacto.html" className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md">
                                <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <span>Contacto</span>
                            </a>
                        </div>
                    )}
                </nav>
            </header>
        </>
    );
};

export default Header;
