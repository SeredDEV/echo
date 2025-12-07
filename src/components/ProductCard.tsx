import { Product } from '../data/products';

interface ProductCardProps {
    product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
    const descuento = product.precioOriginal
        ? Math.round(((product.precioOriginal - product.precio) / product.precioOriginal) * 100)
        : 0;

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('es-CO', {
            style: 'currency',
            currency: 'COP',
            minimumFractionDigits: 0
        }).format(price);
    };

    return (
        <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
            {/* Image Container */}
            <div className="relative overflow-hidden bg-gray-50 aspect-square">
                <img
                    src={product.imagen}
                    alt={product.nombre}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                    {descuento > 0 && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-lg">
                            -{descuento}%
                        </span>
                    )}
                    {product.destacado && (
                        <span className="bg-gradient-to-r from-primary-600 to-accent-600 text-white text-xs font-bold px-2 py-1 rounded-lg">
                            ⭐ Destacado
                        </span>
                    )}
                </div>

                {/* Favorite Button */}
                <button className="absolute top-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white hover:scale-110">
                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                </button>
            </div>

            {/* Content */}
            <div className="p-4">
                {/* Category */}
                <p className="text-xs text-primary-600 font-medium mb-1">{product.categoria}</p>

                {/* Brand */}
                <p className="text-xs text-gray-500 mb-2">{product.marca}</p>

                {/* Title */}
                <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3rem]">
                    {product.nombre}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                    {product.descripcion}
                </p>

                {/* Price */}
                <div className="mb-4">
                    {product.precioOriginal && (
                        <p className="text-sm text-gray-400 line-through mb-1">
                            {formatPrice(product.precioOriginal)}
                        </p>
                    )}
                    <p className="text-2xl font-bold text-gray-900">
                        {formatPrice(product.precio)}
                    </p>
                </div>

                {/* Stock */}
                <div className="mb-4">
                    {product.stock > 10 ? (
                        <p className="text-xs text-green-600 font-medium">✓ En stock</p>
                    ) : product.stock > 0 ? (
                        <p className="text-xs text-orange-600 font-medium">⚠ Últimas {product.stock} unidades</p>
                    ) : (
                        <p className="text-xs text-red-600 font-medium">✗ Agotado</p>
                    )}
                </div>

                {/* Add to Cart Button */}
                <button
                    disabled={product.stock === 0}
                    className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 disabled:from-gray-300 disabled:to-gray-400 text-white font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    {product.stock === 0 ? 'Agotado' : 'Agregar al carrito'}
                </button>
            </div>
        </div>
    );
};

export default ProductCard;
