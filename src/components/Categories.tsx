const categories = [
    {
        id: 1,
        name: 'Altavoces Inteligentes',
        description: 'Controla tu hogar con tu voz',
        image: 'assets/images/categories/altavoces.jpg',
    },
    {
        id: 2,
        name: 'Dispositivos Streaming',
        description: 'Entretenimiento sin límites',
        image: 'assets/images/categories/streaming.jpg',
    },
    {
        id: 3,
        name: 'Accesorios Inteligentes',
        description: 'Complementa tu hogar inteligente',
        image: 'assets/images/categories/accesorios.jpg',
    },
];

const Categories = () => {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
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
                            className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Background Image */}
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay - only visible on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Content - slides up on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                                    {category.name}
                                </h3>
                                <p className="text-white/90 mb-4 text-sm md:text-base">
                                    {category.description}
                                </p>
                                <button className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300">
                                    Explorar
                                    <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Title badge - always visible */}
                            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                <h3 className="text-sm md:text-base font-bold text-gray-900">
                                    {category.name}
                                </h3>
                            </div>

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
