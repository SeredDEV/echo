const AboutUs = () => {
    return (
        <section id="sobre-nosotros" className="relative py-20 bg-gradient-to-b from-white to-gray-50">
            {/* Wave Divider Top */}
            <div className="absolute top-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="#f9fafb" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Sobre Nosotros
                    </h2>
                    <p className="text-xl md:text-2xl text-[#0FA6D1] font-semibold mb-2">
                        ECHO TECNOLOGÍA EN CASA
                    </p>
                    <p className="text-lg text-gray-600">
                        ¡Tu vida más cómoda y segura!
                    </p>
                </div>

                {/* Quiénes Somos */}
                <div className="mb-20">
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
                        <h3 className="text-3xl font-bold mb-6 text-center">
                            ¿Quiénes Somos?
                        </h3>
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p className="text-lg">
                                Nos dedicamos a <span className="font-semibold text-[#0FA6D1]">simplificar la vida de las personas</span> al entender sus necesidades y ofrecerles tecnología para crear hogares inteligentes.
                            </p>
                            <p className="text-lg">
                                Nuestros productos son <span className="font-semibold text-[#0FA6D1]">asequibles y de alta calidad</span> que transforman los espacios en ambientes más cómodos, eficientes y seguros.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Propuesta de Valor */}
                <div className="mb-20">
                    <div className="gradient-bg rounded-3xl p-8 md:p-12 text-white text-center">
                        <h3 className="text-3xl md:text-4xl font-bold mb-6">
                            Propuesta de Valor
                        </h3>
                        <p className="text-xl md:text-2xl mb-6 leading-relaxed max-w-4xl mx-auto">
                            Transformamos tu hogar con tecnología de vanguardia
                        </p>
                        <p className="text-lg mb-8 max-w-3xl mx-auto opacity-95">
                            Ofrecemos dispositivos modernos y de última tecnología para convertir tu hogar en un espacio inteligente y eficiente. Disfruta de un servicio excepcional, entregas rápidas y asesoramiento personalizado.
                        </p>
                        <div className="inline-block bg-white/20 backdrop-blur-sm px-8 py-4 rounded-full">
                            <p className="text-xl font-bold">
                                ✨ Transforma tu hogar, ¡conéctate al futuro!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Valores de la Marca */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        Valores de la Marca
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Innovación */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0FA6D1] to-[#5EA4CF] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-center text-[#0FA6D1]">
                                Innovación
                            </h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Echo tecnología en casa sobresale por su enfoque innovador en tecnología para hogares, ofreciendo constantemente soluciones nuevas que mejoran la vida de sus clientes y mantienen su liderazgo en la domótica.
                            </p>
                        </div>

                        {/* Calidad */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#4DE2E5] to-[#94D6EA] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-center text-[#0FA6D1]">
                                Calidad
                            </h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                La empresa se compromete a ofrecer productos de alta calidad y un servicio excepcional, generando confianza en sus clientes al garantizar que sus necesidades y expectativas sean cumplidas.
                            </p>
                        </div>

                        {/* Personalización */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                            <div className="w-16 h-16 bg-gradient-to-br from-[#0FA6D1] to-[#5EA4CF] rounded-full flex items-center justify-center mb-6 mx-auto">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                </svg>
                            </div>
                            <h4 className="text-2xl font-bold mb-4 text-center text-[#0FA6D1]">
                                Personalización
                            </h4>
                            <p className="text-gray-600 text-center leading-relaxed">
                                La empresa ofrece asesoramiento personalizado y soluciones adaptadas a las necesidades únicas de cada cliente, garantizando una experiencia satisfactoria y personalizada.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Wave Divider Bottom */}
            <div className="absolute bottom-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 0L60 10C120 20 240 40 360 46.7C480 53 600 47 720 43.3C840 40 960 40 1080 46.7C1200 53 1320 67 1380 73.3L1440 80V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V0Z" fill="white" />
                </svg>
            </div>
        </section>
    );
};

export default AboutUs;
