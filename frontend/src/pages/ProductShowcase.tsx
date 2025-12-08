const products = [
    {
        id: 1,
        name: 'Alexa Echo Dot',
        description: '¡Controla tu hogar con solo tu voz! El Echo Dot te brinda acceso rápido a Alexa, tu asistente virtual, en un diseño compacto y asequible.',
        icon: '🔊',
        gradient: 'from-blue-500 to-cyan-500',
    },
    {
        id: 2,
        name: 'Google Chromecast',
        description: 'Convierte tu TV en Smart TV con Google Chromecast. ¡Fácil y asequible!',
        icon: '📺',
        gradient: 'from-purple-500 to-pink-500',
    },
    {
        id: 3,
        name: 'Amazon Fire TV Stick',
        description: 'Convierte cualquier TV en una experiencia de streaming completa con el Firestick de Amazon. Accede a tus plataformas de streaming favoritas.',
        icon: '🎬',
        gradient: 'from-orange-500 to-red-500',
    },
    {
        id: 4,
        name: 'Amazon Echo Pop',
        description: 'La manera más rápida, fácil y asequible de iniciar con tu hogar inteligente.',
        icon: '🏠',
        gradient: 'from-green-500 to-emerald-500',
    },
];

const ProductShowcase = () => {
    return (
        <section className="relative py-20 bg-gray-50">
            {/* Wave Divider Top */}
            <div className="absolute top-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gradient">
                        Productos Destacados
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubre nuestra selección de dispositivos inteligentes para transformar tu hogar
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product, index) => (
                        <div
                            key={product.id}
                            className="card group hover:scale-105 transition-transform duration-300"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className={`bg-gradient-to-br ${product.gradient} p-8 text-center`}>
                                <div className="text-6xl mb-4 animate-float">{product.icon}</div>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                                    {product.name}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {product.description}
                                </p>
                                <button className="w-full btn-primary text-sm py-2">
                                    Ver más
                                </button>
                            </div>
                        </div>
                    ))}
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

export default ProductShowcase;
