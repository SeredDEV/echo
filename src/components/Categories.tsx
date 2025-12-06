const categories = [
    {
        id: 1,
        name: 'Altavoces Inteligentes',
        description: 'Controla tu hogar con tu voz',
        icon: '🔊',
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        id: 2,
        name: 'Dispositivos Streaming',
        description: 'Entretenimiento sin límites',
        icon: '📺',
        gradient: 'from-purple-600 to-pink-600',
    },
    {
        id: 3,
        name: 'Accesorios Inteligentes',
        description: 'Complementa tu hogar inteligente',
        icon: '💡',
        gradient: 'from-amber-600 to-orange-600',
    },
];

const Categories = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                        Nuestras Categorías
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explora nuestra amplia gama de productos tecnológicos
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div
                            key={category.id}
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            <div className={`bg-gradient-to-br ${category.gradient} p-12 text-white relative z-10 transform group-hover:scale-105 transition-transform duration-300`}>
                                <div className="text-7xl mb-6 text-center animate-float">
                                    {category.icon}
                                </div>
                                <h3 className="text-2xl font-bold mb-3 text-center">
                                    {category.name}
                                </h3>
                                <p className="text-white/90 text-center mb-6">
                                    {category.description}
                                </p>
                                <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors">
                                    Explorar →
                                </button>
                            </div>

                            {/* Decorative circles */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
