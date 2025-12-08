import { useCart } from '../context/CartContext';

const Cart = () => {
    const { items, removeFromCart, updateQuantity, totalAmount, clearCart } = useCart();

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(price);
    };

    if (items.length === 0) {
        return (
            <section className="relative py-20 bg-gray-50 min-h-[80vh]">
                {/* Wave Divider Top */}
                <div className="absolute top-0 left-0 right-0 z-10">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                        <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white" />
                    </svg>
                </div>

                <div className="container mx-auto px-4 relative z-20">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Carrito de compras</h2>
                    <div className="max-w-2xl mx-auto text-center py-16 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Tu carrito está vacío</h3>
                        <p className="text-gray-500 mb-8">Parece que aún no has agregado productos.</p>
                        <a
                            href="tienda.html"
                            className="inline-flex items-center gap-2 bg-[#0FA6D1] hover:bg-[#0d8bb5] text-white font-bold px-8 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                            Explorar Tienda
                        </a>
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
    }

    return (
        <section className="relative py-20 bg-gray-50 min-h-screen">
            {/* Wave Divider Top */}
            <div className="absolute top-0 left-0 right-0 z-10">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 110C120 100 240 80 360 73.3C480 67 600 73 720 76.7C840 80 960 80 1080 73.3C1200 67 1320 53 1380 46.7L1440 40V0H1380C1320 0 1200 0 1080 0C960 0 840 0 720 0C600 0 480 0 360 0C240 0 120 0 60 0H0V120Z" fill="white" />
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-20">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-10">Tu Carrito</h2>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Cart Items List */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div key={`${item.id}-${item.selectedColor || 'default'}`} className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row gap-4 items-start sm:items-center group transition-all hover:shadow-md">
                                {/* Product Image */}
                                <div className="w-full sm:w-24 h-32 sm:h-24 flex-shrink-0 bg-gray-50 rounded-xl p-2">
                                    <img src={item.imagen} alt={item.nombre} className="w-full h-full object-contain mix-blend-multiply" />
                                </div>

                                {/* Product Info */}
                                <div className="flex-1 w-full min-w-0">
                                    <div className="flex flex-col sm:flex-row justify-between items-start gap-2 mb-3">
                                        <div>
                                            <h3 className="font-bold text-gray-900 text-lg leading-tight line-clamp-2 pr-0 sm:pr-4">{item.nombre}</h3>
                                            <div className="flex flex-wrap gap-2 text-sm text-gray-500 mt-1">
                                                <span>{item.marca}</span>
                                                {item.selectedColor && (
                                                    <span className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded text-xs">
                                                        <div className={`w-2 h-2 rounded-full ${item.selectedColor === 'Negro' ? 'bg-black' :
                                                            item.selectedColor === 'Blanco' ? 'bg-white border border-gray-300' :
                                                                item.selectedColor === 'Azul' ? 'bg-blue-600' : 'bg-gray-400'
                                                            }`}></div>
                                                        {item.selectedColor}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        <p className="font-bold text-lg text-[#0FA6D1] whitespace-nowrap self-end sm:self-auto">
                                            {formatPrice(item.precio * item.quantity)}
                                        </p>
                                    </div>

                                    {/* Actions Row */}
                                    <div className="flex items-center justify-between mt-auto">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            {/* Quantity Controls */}
                                            <div className="flex items-center bg-gray-50 rounded-lg border border-gray-200">
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedColor)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#0FA6D1] transition-colors active:bg-gray-200"
                                                    disabled={item.quantity <= 1}
                                                >
                                                    -
                                                </button>
                                                <span className="w-8 text-center font-bold text-gray-900 text-sm">{item.quantity}</span>
                                                <button
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedColor)}
                                                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:text-[#0FA6D1] transition-colors active:bg-gray-200"
                                                    disabled={item.quantity >= item.stock}
                                                >
                                                    +
                                                </button>
                                            </div>
                                            <span className="text-xs text-gray-400 hidden sm:inline-block">
                                                {formatPrice(item.precio)} c/u
                                            </span>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(item.id, item.selectedColor)}
                                            className="text-gray-400 hover:text-red-500 hover:bg-red-50 p-2 rounded-lg transition-all"
                                            title="Eliminar producto"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="flex justify-end pt-4">
                            <button
                                onClick={clearCart}
                                className="text-gray-500 hover:text-red-600 text-sm font-medium flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                                Vaciar Carrito
                            </button>
                        </div>
                    </div>

                    {/* Order Summary */}
                    <div className="lg:col-span-1">
                        <div className="bg-white p-5 sm:p-6 md:p-8 rounded-3xl shadow-lg border border-gray-100 sticky top-24">
                            <h3 className="text-xl font-bold text-gray-900 mb-6">Resumen de compra</h3>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span>{formatPrice(totalAmount)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Envío</span>
                                    <span className="text-green-600 font-medium">Gratis</span>
                                </div>
                                <div className="border-t border-gray-100 pt-4 flex justify-between items-center">
                                    <span className="font-bold text-gray-900 text-lg">Total</span>
                                    <span className="font-bold text-2xl text-[#0FA6D1]">{formatPrice(totalAmount)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#0FA6D1] to-[#5EA4CF] hover:from-[#0d8bb5] hover:to-[#4d8fb8] text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group">
                                <span>Iniciar Pago Seguro</span>
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>

                            <div className="mt-6 flex justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                {/* Simple payment icons placeholders */}
                                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                                <div className="h-6 w-10 bg-gray-200 rounded"></div>
                            </div>
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

export default Cart;
