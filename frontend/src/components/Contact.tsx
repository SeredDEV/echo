const Contact = () => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
    };

    return (
        <section id="contacto" className="relative py-20 bg-gray-50">
            {/* Wave Divider Top */}
            <div className="absolute top-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Contáctanos</h2>
                    <p className="text-lg text-gray-600">Estamos aquí para ayudarte</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Contact Form */}
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>

                        <form onSubmit={handleFormSubmit} className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA6D1] focus:border-transparent outline-none"
                                        placeholder="Nombre"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="tel"
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA6D1] focus:border-transparent outline-none"
                                        placeholder="Número de teléfono"
                                    />
                                </div>
                            </div>

                            <div>
                                <input
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA6D1] focus:border-transparent outline-none"
                                    placeholder="Correo electrónico *"
                                />
                            </div>

                            <div>
                                <textarea
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0FA6D1] focus:border-transparent outline-none resize-none"
                                    placeholder="Comentario"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-gradient-to-r from-[#0FA6D1] to-[#5EA4CF] hover:from-[#0d8bb5] hover:to-[#4d8fb8] text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                            >
                                Enviar
                            </button>
                        </form>
                    </div>

                    {/* Quick Contact */}
                    <div className="space-y-6">
                        {/* AI Chat */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#0FA6D1] to-[#5EA4CF] rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900">Chat con IA</h4>
                                    <p className="text-sm text-gray-600">Disponible 24/7</p>
                                </div>
                                <button
                                    onClick={() => {
                                        const aiButton = document.querySelector('[aria-label="Asistente IA"]') as HTMLButtonElement;
                                        if (aiButton) aiButton.click();
                                    }}
                                    className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors"
                                >
                                    Abrir
                                </button>
                            </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                    </svg>
                                </div>
                                <div className="flex-1">
                                    <h4 className="font-bold text-gray-900">WhatsApp</h4>
                                    <p className="text-sm text-gray-600">Respuesta rápida</p>
                                </div>
                                <a
                                    href="https://wa.link/78epdb"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors"
                                >
                                    Abrir
                                </a>
                            </div>
                        </div>

                        {/* Info */}
                        <div className="bg-gradient-to-br from-[#0FA6D1] to-[#5EA4CF] rounded-xl shadow-lg p-6 text-white">
                            <h4 className="font-bold mb-4">Información</h4>
                            <div className="space-y-2 text-sm">
                                <p>📍 Medellín, Colombia</p>
                                <p>🕐 Lun - Sáb: 9:00 AM - 6:00 PM</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="#f9fafb" />
                </svg>
            </div>
        </section>
    );
};

export default Contact;
