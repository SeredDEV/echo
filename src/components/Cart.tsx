const Cart = () => {
    return (
        <section className="py-20 bg-gray-50 min-h-[80vh]">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-gray-900 mb-8">Carrito de compras</h2>

                {/* Empty cart state */}
                <div className="max-w-2xl mx-auto text-center py-16">
                    <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Tu carrito está vacío</h3>
                    <p className="text-gray-600 mb-8">Agrega productos para comenzar tu compra</p>
                    <a
                        href="index.html"
                        className="inline-block bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 hover:shadow-lg"
                    >
                        Ver productos
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Cart;
