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
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
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
        </section>
    );
};

export default ProductShowcase;
