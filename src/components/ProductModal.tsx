import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);

    // Reset color when product changes
    useEffect(() => {
        if (product && product.coloresDisponibles && product.coloresDisponibles.length > 0) {
            setSelectedColor(product.coloresDisponibles[0]);
        } else {
            setSelectedColor(null);
        }
    }, [product]);

    if (!isOpen || !product) return null;

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(price);
    };

    const descuento = product.precioOriginal
        ? Math.round(((product.precioOriginal - product.precio) / product.precioOriginal) * 100)
        : 0;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto animate-fadeInUp">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-10 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors"
                >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2 gap-0">
                    {/* Image Section */}
                    <div className="bg-gray-50 p-8 flex items-center justify-center min-h-[400px]">
                        <img
                            src={product.imagen}
                            alt={product.nombre}
                            className="w-full max-w-md object-contain drop-shadow-xl"
                        />
                    </div>

                    {/* Info Section */}
                    <div className="p-8 flex flex-col h-full bg-white">
                        <div className="mb-auto">
                            <span className="text-primary-600 font-bold uppercase text-sm tracking-wide">
                                {product.categoria} • {product.marca}
                            </span>

                            <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-4">
                                {product.nombre}
                            </h2>

                            <div className="mb-6">
                                <div className="flex items-center gap-3 mb-2">
                                    <span className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                                        {formatPrice(product.precio)}
                                    </span>
                                    {product.precioOriginal && (
                                        <span className="text-lg text-gray-400 line-through">
                                            {formatPrice(product.precioOriginal)}
                                        </span>
                                    )}
                                </div>
                                {descuento > 0 && (
                                    <span className="inline-block px-3 py-1 bg-red-100 text-red-600 text-sm font-bold rounded-full">
                                        Ahorras {descuento}%
                                    </span>
                                )}
                            </div>

                            <p className="text-gray-600 leading-relaxed mb-6">
                                {product.descripcion}
                            </p>

                            {/* Color Selector */}
                            {product.coloresDisponibles && product.coloresDisponibles.length > 0 && (
                                <div className="mb-8 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3 block">
                                        Color seleccionado: <span className="text-primary-600">{selectedColor}</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.coloresDisponibles.map(color => {
                                            const isSelected = selectedColor === color;
                                            return (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${isSelected
                                                            ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                                                        }`}
                                                >
                                                    {color}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Stock Indicator */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className={`w-3 h-3 rounded-full ${product.stock > 0 ? 'bg-green-500' : 'bg-red-500'}`}></div>
                                <span className={`text-sm font-medium ${product.stock > 0 ? 'text-green-700' : 'text-red-700'}`}>
                                    {product.stock > 0 ? `En stock available` : 'Agotado temporalmente'}
                                </span>
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-8 flex gap-4">
                            <button
                                disabled={product.stock === 0}
                                onClick={() => {
                                    addToCart(product, selectedColor);
                                    onClose(); // Optional: close modal on add? maybe better to stay
                                }}
                                className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
