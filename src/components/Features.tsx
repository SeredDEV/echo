const features = [
    {
        id: 1,
        icon: '🚚',
        title: 'Envío a todo Colombia',
        description: 'Disfruta de la comodidad al recibir tus pedidos directamente en tu hogar con nuestra entrega garantizada.',
    },
    {
        id: 2,
        icon: '📦',
        title: 'Pedido monitoreado',
        description: 'Todas nuestras entregas tienen un código de seguimiento y recibes todas las actualizaciones en tu correo electrónico y WhatsApp.',
    },
    {
        id: 3,
        icon: '💬',
        title: '¿Necesitas ayuda?',
        description: 'Estamos disponibles las 24 horas del día, todos los días de la semana.',
    },
    {
        id: 4,
        icon: '🔒',
        title: 'Compra segura',
        description: 'Ofrecemos un estándar de seguridad de datos de nivel superior, comparable al utilizado por instituciones financieras líderes, gracias a SSL.',
    },
];

const Features = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-gray-900">
                        ¿Por qué elegirnos?
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Ofrecemos la mejor experiencia de compra con garantías que te brindan tranquilidad
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={feature.id}
                            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            <div className="text-5xl mb-4">{feature.icon}</div>
                            <h3 className="text-xl font-bold mb-3 text-gray-900">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Statistics Section */}
                <div className="mt-20 bg-gradient-to-r from-[#0d8bb5] to-[#0FA6D1] rounded-3xl p-12 text-white shadow-2xl">
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
                            Estadísticas de nuestros clientes
                        </h3>
                        <p className="text-white">*Basado en más de 3000+ compras en nuestra tienda</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
                            <div className="text-5xl md:text-6xl font-bold mb-3">97%</div>
                            <p className="text-white">
                                El 97% de nuestros clientes vuelven a comprar con nosotros.
                            </p>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
                            <div className="text-5xl md:text-6xl font-bold mb-3">96%</div>
                            <p className="text-white">
                                El 96% de nuestros clientes califican su experiencia de compra como excelente.
                            </p>
                        </div>
                        <div className="text-center bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all">
                            <div className="text-5xl md:text-6xl font-bold mb-3">96%</div>
                            <p className="text-white">
                                El 96% de nuestras entregas se realizan dentro del tiempo prometido.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Features;
