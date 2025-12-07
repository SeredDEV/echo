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
                            <div className="aspect-[4/3] relative overflow-hidden bg-gray-200">
                                <img
                                    src={category.image}
                                    alt={category.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Dark overlay - only on hover */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            </div>

                            {/* Title - always visible at TOP */}
                            <div className="absolute top-6 left-6 right-6 z-10">
                                <h3 className="text-2xl md:text-3xl font-bold text-white drop-shadow-lg">
                                    {category.name}
                                </h3>
                            </div>

                            {/* Description and button - slides up from bottom on hover */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                                <p className="text-white/95 mb-4 text-base drop-shadow-md">
                                    {category.description}
                                </p>
                                <button className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full hover:bg-primary-600 hover:text-white transition-all duration-300 shadow-lg">
                                    Explorar
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Shine effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
