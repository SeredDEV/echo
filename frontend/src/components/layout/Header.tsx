import { useState } from "react";
import { Link } from "react-router-dom";
import BannerOfertasHeader from "../common/BannerOfertasHeader";
import { useCart } from "../../context/CartContext";

const Header = () => {
  const { totalItems } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobileSubmenu, setMobileSubmenu] = useState<string | null>(null);

  return (
    <>
      {/* Top Banner Dinámico */}
      <BannerOfertasHeader />

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link
                to="/"
                className="flex items-center hover:opacity-80 transition-opacity bg-white rounded-lg"
              >
                <img
                  src="/assets/logo/logo.png"
                  alt="Echo Tecnología"
                  className="h-12 md:h-20 w-auto bg-white"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const textLogo = e.currentTarget
                      .nextElementSibling as HTMLElement;
                    if (textLogo) textLogo.style.display = "block";
                  }}
                />
                <h1 className="text-2xl md:text-3xl font-display font-bold text-gradient hidden">
                  Echo Tecnología
                </h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className="group relative px-4 py-2 text-gray-700 font-medium transition-all duration-300"
              >
                <span className="relative z-10">Inicio</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0FA6D1] group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Altavoces Inteligentes Dropdown */}
              <div className="group relative">
                <Link
                  to="/tienda?categoria=altavoces"
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium transition-all duration-300"
                >
                  <span className="relative z-10">Altavoces Inteligentes</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0FA6D1] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <div className="absolute left-0 mt-2 w-[400px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/tienda?categoria=altavoces&marca=Amazon"
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0FA6D1] to-[#5EA4CF] rounded-2xl flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center">
                          Amazon Alexa
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-1">
                          Echo, Echo Dot, Echo Show
                        </div>
                      </Link>
                      <Link
                        to="/tienda?categoria=altavoces&marca=Google"
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center">
                          Google Home
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-1">
                          Nest Audio, Nest Mini
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dispositivos Streaming Dropdown */}
              <div className="group relative">
                <Link
                  to="/tienda?categoria=streaming"
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium transition-all duration-300"
                >
                  <span className="relative z-10">Dispositivos Streaming</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0FA6D1] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <div className="absolute left-0 mt-2 w-[400px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <div className="p-6">
                    <div className="grid grid-cols-2 gap-4">
                      <Link
                        to="/tienda?categoria=streaming&marca=Amazon"
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center">
                          Amazon Fire TV
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-1">
                          Fire TV Stick, Fire TV Cube
                        </div>
                      </Link>
                      <Link
                        to="/tienda?categoria=streaming&marca=Google"
                        className="flex flex-col items-center p-4 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-20 h-20 bg-gradient-to-br from-[#0FA6D1] to-[#5EA4CF] rounded-2xl flex items-center justify-center mb-3 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-10 h-10 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center">
                          Google Chromecast
                        </div>
                        <div className="text-xs text-gray-500 text-center mt-1">
                          Chromecast con Google TV
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Accesorios Inteligentes Dropdown */}
              <div className="group relative">
                <Link
                  to="/tienda?categoria=accesorios"
                  className="flex items-center gap-1 px-4 py-2 text-gray-700 font-medium transition-all duration-300"
                >
                  <span className="relative z-10">Accesorios Inteligentes</span>
                  <svg
                    className="w-4 h-4 transition-transform group-hover:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0FA6D1] group-hover:w-full transition-all duration-300"></span>
                </Link>
                <div className="absolute left-0 mt-2 w-[500px] bg-white rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 border border-gray-100">
                  <div className="p-6">
                    <div className="grid grid-cols-3 gap-3">
                      <Link
                        to="/tienda?categoria=accesorios&subcategoria=Bombillos"
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center text-sm">
                          Bombillos
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          LED RGB
                        </div>
                      </Link>
                      <Link
                        to="/tienda?categoria=accesorios&subcategoria=Tomacorrientes"
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center text-sm">
                          Tomacorrientes
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          WiFi
                        </div>
                      </Link>
                      <Link
                        to="/tienda?categoria=accesorios&subcategoria=Apagadores"
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#94D6EA] to-[#4DE2E5] rounded-xl flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center text-sm">
                          Apagadores
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          Touch
                        </div>
                      </Link>
                      <Link
                        to="/tienda?categoria=accesorios&subcategoria=Cintas LED"
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#4DE2E5] to-[#0FA6D1] rounded-xl flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                            />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center text-sm">
                          Cintas LED
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          RGB
                        </div>
                      </Link>
                      <Link
                        to="/tienda?categoria=accesorios&subcategoria=Cerraduras"
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-900 rounded-xl flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center text-sm">
                          Cerraduras
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          Huella
                        </div>
                      </Link>
                      <Link
                        to="/tienda?categoria=accesorios&subcategoria=Cámaras"
                        className="flex flex-col items-center p-3 rounded-lg hover:bg-[#0FA6D1]/5 transition-all group/item"
                      >
                        <div className="w-16 h-16 bg-gradient-to-br from-[#0FA6D1] to-[#0d8bb5] rounded-xl flex items-center justify-center mb-2 group-hover/item:scale-110 transition-transform">
                          <svg
                            className="w-8 h-8 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                            />
                          </svg>
                        </div>
                        <div className="font-semibold text-gray-900 text-center text-sm">
                          Cámaras
                        </div>
                        <div className="text-xs text-gray-500 text-center">
                          Seguridad
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link
                to="/about"
                className="group relative px-4 py-2 text-gray-700 font-medium transition-all duration-300"
              >
                <span className="relative z-10">Sobre nosotros</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0FA6D1] group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/contacto"
                className="group relative px-4 py-2 text-gray-700 font-medium transition-all duration-300"
              >
                <span className="relative z-10">Contacto</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0FA6D1] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Desktop CTA Icons */}
            <div className="hidden lg:flex items-center gap-2">
              <Link
                to="/login"
                className="p-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all duration-300"
                aria-label="Iniciar sesión"
              >
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              <Link
                to="/carrito"
                className="p-2.5 text-gray-700 hover:text-primary-600 hover:bg-gray-100 rounded-lg transition-all duration-300 relative group"
                aria-label="Carrito"
              >
                <div className="relative">
                  <svg
                    className="w-7 h-7 group-hover:scale-110 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce-subtle">
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>
            </div>

            {/* Mobile Right Section */}
            <div className="flex lg:hidden items-center gap-1">
              <Link
                to="/login"
                className="p-2 text-gray-700 hover:text-primary-600 transition-all duration-300"
                aria-label="Iniciar sesión"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>
              <Link
                to="/carrito"
                className="p-2 text-gray-700 hover:text-primary-600 transition-all duration-300 relative group"
                aria-label="Carrito"
              >
                <div className="relative">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full shadow-md animate-bounce-subtle">
                      {totalItems}
                    </span>
                  )}
                </div>
              </Link>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary-600 transition-all duration-300 ml-1"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 animate-slide-up">
              {!mobileSubmenu ? (
                <div className="space-y-1.5">
                  <Link
                    to="/"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                        />
                      </svg>
                    </div>
                    <span>Inicio</span>
                  </Link>

                  <button
                    onClick={() => setMobileSubmenu("altavoces")}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                          />
                        </svg>
                      </div>
                      <span>Altavoces Inteligentes</span>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => setMobileSubmenu("streaming")}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </div>
                      <span>Dispositivos Streaming</span>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <button
                    onClick={() => setMobileSubmenu("accesorios")}
                    className="w-full flex items-center justify-between px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-primary-600"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span>Accesorios Inteligentes</span>
                    </div>
                    <svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </button>

                  <Link
                    to="/about"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <span>Sobre nosotros</span>
                  </Link>

                  <Link
                    to="/contacto"
                    className="flex items-center gap-3 px-4 py-3 text-gray-800 hover:text-primary-600 bg-white hover:bg-gray-50 font-medium rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <div className="w-9 h-9 bg-primary-50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <span>Contacto</span>
                  </Link>
                </div>
              ) : (
                <div className="space-y-3">
                  {/* Back Button */}
                  <button
                    onClick={() => setMobileSubmenu(null)}
                    className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium transition-colors"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                    <span>Volver</span>
                  </button>

                  {/* Submenu Title */}
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-lg font-bold text-gray-900">
                      {mobileSubmenu === "altavoces" &&
                        "Altavoces Inteligentes"}
                      {mobileSubmenu === "streaming" &&
                        "Dispositivos Streaming"}
                      {mobileSubmenu === "accesorios" &&
                        "Accesorios Inteligentes"}
                    </h3>
                  </div>

                  {/* Submenu Items */}
                  <div className="space-y-2">
                    {mobileSubmenu === "altavoces" && (
                      <>
                        <Link
                          to="/tienda?categoria=altavoces&marca=Amazon"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Amazon Alexa
                            </div>
                            <div className="text-xs text-gray-500">
                              Echo, Echo Dot, Echo Show
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/tienda?categoria=altavoces&marca=Google"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Google Home
                            </div>
                            <div className="text-xs text-gray-500">
                              Nest Audio, Nest Mini
                            </div>
                          </div>
                        </Link>
                      </>
                    )}

                    {mobileSubmenu === "streaming" && (
                      <>
                        <Link
                          to="/tienda?categoria=streaming&marca=Amazon"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Amazon Fire TV
                            </div>
                            <div className="text-xs text-gray-500">
                              Fire TV Stick, Fire TV Cube
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/tienda?categoria=streaming&marca=Google"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 1.99-.9 1.99-2L23 5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zm-5-6l-7 4V7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Google Chromecast
                            </div>
                            <div className="text-xs text-gray-500">
                              Chromecast con Google TV
                            </div>
                          </div>
                        </Link>
                      </>
                    )}

                    {mobileSubmenu === "accesorios" && (
                      <>
                        <Link
                          to="/tienda?categoria=accesorios&subcategoria=Bombillos"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Bombillos Inteligentes
                            </div>
                            <div className="text-xs text-gray-500">
                              LED RGB, Blanco ajustable
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/tienda?categoria=accesorios&subcategoria=Tomacorrientes"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Tomacorrientes
                            </div>
                            <div className="text-xs text-gray-500">
                              Control remoto, WiFi
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/tienda?categoria=accesorios&subcategoria=Apagadores"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-400 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Apagadores Inteligentes
                            </div>
                            <div className="text-xs text-gray-500">
                              Touch, Control por voz
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/tienda?categoria=accesorios&subcategoria=Cintas LED"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Cintas LED
                            </div>
                            <div className="text-xs text-gray-500">
                              RGB, Música sincronizada
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/tienda?categoria=accesorios&subcategoria=Cerraduras"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z" />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Cerraduras Inteligentes
                            </div>
                            <div className="text-xs text-gray-500">
                              Huella, PIN, App
                            </div>
                          </div>
                        </Link>
                        <Link
                          to="/tienda?categoria=accesorios&subcategoria=Cámaras"
                          className="flex items-center gap-4 px-4 py-3 bg-white hover:bg-primary-50 rounded-xl transition-all shadow-sm"
                        >
                          <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-700 rounded-lg flex items-center justify-center flex-shrink-0">
                            <svg
                              className="w-6 h-6 text-white"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">
                              Cámaras
                            </div>
                            <div className="text-xs text-gray-500">
                              Seguridad
                            </div>
                          </div>
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
