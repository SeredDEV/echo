const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            {/* Newsletter Section */}
            <div className="gradient-bg py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto text-center">
                        <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
                            ÚNETE AHORA Y RECIBE OFERTAS EXCLUSIVAS 🛍️
                        </h3>
                        <p className="mb-6 text-white/90">
                            ¡Suscríbete para recibir información de nuestras ofertas y nuevos productos en tu correo electrónico!
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                            <input
                                type="email"
                                placeholder="Tu correo electrónico"
                                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            <button className="bg-white text-primary-600 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                Suscribirse
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Footer */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div>
                        <img
                            src="/assets/logo/logo-white.png"
                            alt="Echo Tecnología"
                            className="h-20 w-auto mb-4"
                            onError={(e) => {
                                // Si la imagen no existe, mostrar texto
                                e.currentTarget.style.display = 'none';
                                const textLogo = e.currentTarget.nextElementSibling as HTMLElement;
                                if (textLogo) textLogo.style.display = 'block';
                            }}
                        />
                        <h4 className="text-2xl font-display font-bold mb-4 text-gradient hidden">
                            Echo Tecnología
                        </h4>
                        <p className="text-gray-400 mb-4">
                            Tu tienda de confianza para dispositivos inteligentes y tecnología del hogar.
                        </p>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">CENTRAL DE ATENCIÓN AL CLIENTE</h4>
                        <div className="space-y-3 text-gray-400">
                            <p>
                                <span className="font-semibold text-white">E-mail:</span><br />
                                sacechotecnologia@gmail.com
                            </p>
                            <p>
                                <span className="font-semibold text-white">WhatsApp:</span><br />
                                <a href="https://wa.link/78epdb" className="text-primary-400 hover:text-primary-300 transition-colors">
                                    +57 320 7548718
                                </a>
                            </p>
                        </div>
                    </div>

                    {/* Information */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">INFORMACIÓN</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Política de Privacidad
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Política de envío y pago
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Política de reembolso
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    Términos & Condiciones
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white transition-colors">
                                    PQRS
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Payment Methods & Copyright */}
                <div className="border-t border-gray-800 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-gray-400 text-sm">Métodos de pago:</span>
                            <div className="flex gap-3">
                                <div className="bg-white rounded px-3 py-1 text-xs font-semibold text-gray-900">
                                    VISA
                                </div>
                                <div className="bg-white rounded px-3 py-1 text-xs font-semibold text-gray-900">
                                    Mastercard
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm">
                            © 2024 Echo Tecnología. Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
