import { Product } from '../data/products';
import { useCart } from '../context/CartContext';
import { useState, useEffect } from 'react';

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

interface MediaItem {
    type: 'image' | 'video';
    url: string;
    thumbnail?: string;
}

const ProductModal = ({ product, isOpen, onClose }: ProductModalProps) => {
    const { addToCart } = useCart();
    const [selectedColor, setSelectedColor] = useState<string | null>(null);
    const [activeMediaIndex, setActiveMediaIndex] = useState<number>(0);
    const [quantity, setQuantity] = useState<number>(1);

    // Reset state when product changes
    useEffect(() => {
        if (product) {
            setActiveMediaIndex(0);
            setQuantity(1);
            if (product.coloresDisponibles && product.coloresDisponibles.length > 0) {
                setSelectedColor(product.coloresDisponibles[0]);
            } else {
                setSelectedColor(null);
            }
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

    // Combine all media into a single array
    const media: MediaItem[] = [
        { type: 'image', url: product.imagen },
        ...(product.imagenes?.map(img => ({ type: 'image', url: img } as MediaItem)) || []),
        ...(product.videos?.map(vid => ({ type: 'video', url: vid, thumbnail: product.imagen } as MediaItem)) || []) // Use main image as video placeholder thumbnail
    ];

    const activeMedia = media[activeMediaIndex];

    const quantityOptions = Array.from({ length: Math.min(6, product.stock) }, (_, i) => i + 1);

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Content */}
            <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto no-scrollbar animate-fadeInUp flex flex-col">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/80 rounded-full hover:bg-gray-100 transition-colors shadow-sm"
                >
                    <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="grid md:grid-cols-2 gap-0 flex-1">
                    {/* Left Column: Image/Video Gallery */}
                    <div className="bg-gray-50 p-6 md:p-8 flex flex-row gap-4 border-r border-gray-100">
                        {/* Thumbnails (Vertical List on Left) */}
                        {media.length > 1 && (
                            <div className="flex flex-col gap-3 overflow-y-auto max-h-[500px] w-24 hide-scrollbar py-2 px-1">
                                {media.map((item, index) => (
                                    <button
                                        key={index}
                                        onMouseEnter={() => item.type === 'image' && setActiveMediaIndex(index)}
                                        onClick={() => setActiveMediaIndex(index)}
                                        className={`relative flex-shrink-0 w-16 h-16 rounded-lg border-2 bg-white overflow-hidden transition-all group ${index === activeMediaIndex
                                            ? 'border-primary-600 ring-2 ring-primary-100 ring-offset-1'
                                            : 'border-transparent hover:border-gray-300'
                                            }`}
                                    >
                                        {/* Thumbnail Content */}
                                        {item.type === 'image' ? (
                                            <img src={item.url} alt={`Vista ${index + 1}`} className="w-full h-full object-contain p-1" />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-gray-100 relative">
                                                <img src={item.thumbnail} alt="Video" className="w-full h-full object-cover opacity-60" />
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="w-6 h-6 bg-black/60 rounded-full flex items-center justify-center backdrop-blur-sm">
                                                        <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M8 5v14l11-7z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Main Media Display */}
                        <div className="relative flex-1 flex items-center justify-center bg-white rounded-2xl p-4 shadow-sm border border-gray-100 min-h-[300px] md:min-h-[500px]">
                            {activeMedia.type === 'video' ? (
                                <video
                                    src={activeMedia.url}
                                    controls
                                    autoPlay
                                    className="w-full h-full max-h-[500px] object-contain rounded-lg"
                                >
                                    Tu navegador no soporta el elemento de video.
                                </video>
                            ) : (
                                <img
                                    src={activeMedia.url}
                                    alt={product.nombre}
                                    className="w-full h-full max-h-[500px] object-contain drop-shadow-lg transition-all duration-300"
                                />
                            )}
                        </div>
                    </div>

                    {/* Right Column: Info & Actions */}
                    <div className="p-6 md:p-8 flex flex-col h-full bg-white overflow-y-auto">
                        <div className="">
                            <span className="text-primary-600 font-bold uppercase text-xs tracking-wider bg-primary-50 px-3 py-1 rounded-full mb-3 inline-block">
                                {product.categoria} • {product.marca}
                            </span>

                            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
                                {product.nombre}
                            </h2>

                            {/* Short Description (Top) */}
                            <p className="text-gray-600 leading-snug mb-6 text-sm">
                                {product.descripcionCorta}
                            </p>

                            {/* Price Section */}
                            <div className="mb-6 pb-6 border-b border-gray-100">
                                {product.precioOriginal && (
                                    <span className="text-lg text-gray-400 line-through block mb-1">
                                        {formatPrice(product.precioOriginal)}
                                    </span>
                                )}
                                <div className="flex items-center gap-3">
                                    <span className="text-5xl font-normal text-gray-900 tracking-tight">
                                        {formatPrice(product.precio)}
                                    </span>
                                    {descuento > 0 && (
                                        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-bold tracking-wide uppercase shadow-sm">
                                            {descuento}% OFF
                                        </span>
                                    )}
                                </div>
                            </div>

                            {/* Color Selector */}
                            {product.coloresDisponibles && product.coloresDisponibles.length > 0 && (
                                <div className="mb-6">
                                    <h3 className="text-sm font-semibold text-gray-900 mb-3 block">
                                        Color seleccionado: <span className="text-primary-600 font-bold">{selectedColor}</span>
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {product.coloresDisponibles.map(color => {
                                            const isSelected = selectedColor === color;
                                            // Simple color mapping
                                            const getColorBg = (c: string) => {
                                                const map: Record<string, string> = {
                                                    'Negro': 'bg-gray-900',
                                                    'Blanco': 'bg-gray-100 border border-gray-300',
                                                    'Azul': 'bg-blue-600',
                                                    'Gris Carbón': 'bg-gray-700',
                                                    'Lavanda': 'bg-purple-300',
                                                    'Verde Azulado': 'bg-teal-500',
                                                    'Gris Tiza': 'bg-gray-300',
                                                    'Coral': 'bg-orange-400',
                                                    'Azul Cielo': 'bg-sky-400',
                                                    'Rosa Arena': 'bg-rose-200',
                                                    'Salvia': 'bg-green-500'
                                                };
                                                return map[c] || 'bg-gray-200';
                                            };

                                            return (
                                                <button
                                                    key={color}
                                                    onClick={() => setSelectedColor(color)}
                                                    className={`group relative w-12 h-12 rounded-full flex items-center justify-center transition-all ${isSelected
                                                        ? 'ring-2 ring-primary-600 ring-offset-2 scale-105'
                                                        : 'hover:ring-2 hover:ring-gray-300 hover:ring-offset-1'
                                                        }`}
                                                    title={color}
                                                >
                                                    <div className={`w-full h-full rounded-full shadow-sm ${getColorBg(color)}`}></div>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            {/* Stock & Action */}
                            <div className="mt-auto pt-6">
                                <div className="flex items-center gap-2 mb-3">
                                    {product.stock > 0 ? (
                                        <span className="flex items-center gap-1.5 text-green-600 font-medium text-sm bg-green-50 px-2.5 py-1 rounded-md">
                                            <span className="relative flex h-2 w-2">
                                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                                            </span>
                                            Stock: {product.stock} disponibles
                                        </span>
                                    ) : (
                                        <span className="flex items-center gap-1.5 text-red-600 font-medium text-sm bg-red-50 px-2.5 py-1 rounded-md">
                                            <span className="h-2 w-2 rounded-full bg-red-500"></span>
                                            Agotado temporalmente
                                        </span>
                                    )}
                                </div>

                                <div className="flex gap-3">
                                    {/* Quantity Selector - Clean & Simple */}
                                    <div className="w-24">
                                        <div className="relative">
                                            <select
                                                value={quantity}
                                                onChange={(e) => setQuantity(Number(e.target.value))}
                                                className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-900 py-3.5 pl-4 pr-8 rounded-xl font-bold focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-500 cursor-pointer transition-all"
                                                disabled={product.stock === 0}
                                            >
                                                {quantityOptions.map(num => (
                                                    <option key={num} value={num}>
                                                        {num}
                                                    </option>
                                                ))}
                                            </select>
                                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-500">
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Add to Cart Button */}
                                    <button
                                        disabled={product.stock === 0}
                                        onClick={() => {
                                            addToCart(product, selectedColor, quantity);
                                            onClose();
                                        }}
                                        className="flex-1 bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold py-4 rounded-xl shadow-xl hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                                    >
                                        <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        Agregar al Carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Detailed Info Section (Full Width) */}
                <div className="bg-gray-50 p-6 md:p-10 border-t border-gray-100 rounded-b-3xl">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {/* Long Description */}
                        {product.descripcionLarga && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Descripción</h3>
                                <p className="text-gray-600 leading-relaxed text-lg">
                                    {product.descripcionLarga}
                                </p>
                            </div>
                        )}


                        {/* Specifications */}
                        {product.especificaciones && (
                            <div>
                                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                    <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                    </svg>
                                    Características del producto
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {Object.entries(product.especificaciones).map(([key, value]) => {
                                        // Smart Icon Mapping
                                        const getIcon = (k: string) => {
                                            k = k.toLowerCase();
                                            if (k.includes('audio') || k.includes('sonido')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /></svg>
                                            );
                                            if (k.includes('wifi') || k.includes('conectividad') || k.includes('bluetooth')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" /></svg>
                                            );
                                            if (k.includes('dimensiones') || k.includes('tamaño') || k.includes('peso')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" /></svg>
                                            );
                                            if (k.includes('sensor')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
                                            );
                                            if (k.includes('garantía')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            );
                                            if (k.includes('pantalla') || k.includes('display') || k.includes('resolución')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                            );
                                            if (k.includes('procesador') || k.includes('memoria') || k.includes('ram') || k.includes('chip')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
                                            );
                                            if (k.includes('batería') || k.includes('carga') || k.includes('autonomía')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                            );
                                            if (k.includes('sistema') || k.includes('compatible') || k.includes('requisitos') || k.includes('app')) return (
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                            );
                                            // Default icon
                                            return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
                                        };

                                        return (
                                            <div key={key} className="bg-gray-50 rounded-xl p-4 border border-gray-100 flex flex-col gap-2 hover:bg-white hover:shadow-md transition-all">
                                                <div className="flex items-center gap-2 text-primary-600 mb-1">
                                                    {getIcon(key)}
                                                    <span className="font-bold text-xs uppercase tracking-wider">{key}</span>
                                                </div>
                                                <span className="text-gray-700 font-medium text-sm leading-relaxed">{value}</span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductModal;
