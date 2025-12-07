const categories = [
    {
        id: 1,
        name: 'Altavoces Inteligentes',
        description: 'Controla tu hogar con tu voz',
        image: 'assets/images/categories/altavoces.jpg',
        gradient: 'from-blue-600 to-cyan-600',
    },
    {
        id: 2,
        name: 'Dispositivos Streaming',
        description: 'Entretenimiento sin límites',
        image: 'assets/images/categories/streaming.jpg',
        gradient: 'from-purple-600 to-pink-600',
    },
    {
        id: 3,
        name: 'Accesorios Inteligentes',
        description: 'Complementa tu hogar inteligente',
        image: 'assets/images/categories/accesorios.jpg',
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
                            className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer h-96"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Background Image */}
                            <div className="absolute inset-0">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Gradient Overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-80 group-hover:opacity-70 transition-opacity duration-300`}></div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 h-full flex flex-col justify-end p-8 text-white">
                                <h3 className="text-3xl font-bold mb-3">
                                    {category.name}
                                </h3>
                                <p className="text-white/90 mb-6 text-lg">
                                    {category.description}
                                </p>
                                <button className="w-full bg-white text-gray-900 font-semibold py-3 rounded-lg hover:bg-gray-100 transition-colors transform group-hover:scale-105 duration-300">
                                    Explorar →
                                </button>
                            </div>

                            {/* Decorative elements */}
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
