import { Product } from "../../data/products";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onClick?: () => void;
}

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  // const { addToCart } = useCart(); // Unused
  const [selectedColor, setSelectedColor] = useState<string | null>(
    product.coloresDisponibles?.[0] || null
  );
  const [isFavorite, setIsFavorite] = useState(false);

  const descuento = product.precioOriginal
    ? Math.round(
        ((product.precioOriginal - product.precio) / product.precioOriginal) *
          100
      )
    : 0;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Mapeo de colores a clases de Tailwind
  const getColorClasses = (color: string, isSelected: boolean) => {
    const colorMap: {
      [key: string]: { bg: string; border: string; text: string };
    } = {
      Negro: {
        bg: isSelected ? "bg-gray-900" : "bg-gray-800",
        border: "border-gray-900",
        text: "text-white",
      },
      Blanco: {
        bg: isSelected ? "bg-white" : "bg-gray-50",
        border: "border-gray-300",
        text: "text-gray-900",
      },
      Azul: {
        bg: isSelected ? "bg-blue-600" : "bg-blue-500",
        border: "border-blue-600",
        text: "text-white",
      },
      "Gris Carbón": {
        bg: isSelected ? "bg-gray-700" : "bg-gray-600",
        border: "border-gray-700",
        text: "text-white",
      },
      Lavanda: {
        bg: isSelected ? "bg-purple-400" : "bg-purple-300",
        border: "border-purple-400",
        text: "text-white",
      },
      "Verde Azulado": {
        bg: isSelected ? "bg-teal-500" : "bg-teal-400",
        border: "border-teal-500",
        text: "text-white",
      },
      "Gris Tiza": {
        bg: isSelected ? "bg-gray-300" : "bg-gray-200",
        border: "border-gray-400",
        text: "text-gray-900",
      },
      Coral: {
        bg: isSelected ? "bg-orange-400" : "bg-orange-300",
        border: "border-orange-400",
        text: "text-white",
      },
      "Azul Cielo": {
        bg: isSelected ? "bg-sky-400" : "bg-sky-300",
        border: "border-sky-400",
        text: "text-white",
      },
      "Rosa Arena": {
        bg: isSelected ? "bg-rose-300" : "bg-rose-200",
        border: "border-rose-300",
        text: "text-gray-900",
      },
      Salvia: {
        bg: isSelected ? "bg-green-500" : "bg-green-400",
        border: "border-green-500",
        text: "text-white",
      },
    };

    return (
      colorMap[color] || {
        bg: isSelected ? "bg-gray-200" : "bg-gray-100",
        border: "border-gray-300",
        text: "text-gray-900",
      }
    );
  };
  return (
    <div
      onClick={onClick}
      className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-primary-200 hover:-translate-y-2 cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 aspect-square">
        <img
          src={product.imagen}
          alt={product.nombre}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay Gradient on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {descuento > 0 && (
            <span className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg animate-pulse">
              -{descuento}% OFF
            </span>
          )}
          {product.destacado && (
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
              ⭐ Destacado
            </span>
          )}
        </div>

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-4 right-4 w-10 h-10 backdrop-blur-sm rounded-full flex items-center justify-center transition-all shadow-lg hover:scale-110 z-10 ${
            isFavorite
              ? "bg-red-50 opacity-100"
              : "bg-white/95 opacity-0 group-hover:opacity-100 hover:bg-red-50"
          }`}
        >
          <svg
            className={`w-5 h-5 transition-colors ${
              isFavorite
                ? "text-red-500 fill-red-500"
                : "text-gray-700 hover:text-red-500"
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category & Brand */}
        <div className="flex items-center justify-between mb-1.5">
          <p className="text-[10px] text-[#0FA6D1] font-bold uppercase tracking-wide">
            {product.categoria}
          </p>
          <p className="text-[10px] text-gray-500 font-semibold">
            {product.marca}
          </p>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 mb-1.5 line-clamp-2 text-sm leading-tight group-hover:text-[#0FA6D1] transition-colors min-h-[2.5rem]">
          {product.nombre}
        </h3>

        {/* Description */}
        <p className="text-xs text-gray-600 mb-2 line-clamp-6 leading-relaxed min-h-[4.5rem]">
          {product.descripcionCorta}
        </p>

        {/* Price */}
        <div className="mb-2">
          {product.precioOriginal && (
            <p className="text-xs text-gray-400 line-through">
              {formatPrice(product.precioOriginal)}
            </p>
          )}
          <p className="text-2xl font-bold text-[#0FA6D1]">
            {formatPrice(product.precio)}
          </p>
        </div>

        {/* Available Colors */}
        {product.coloresDisponibles &&
          product.coloresDisponibles.length > 0 && (
            <div className="mb-2">
              <p className="text-[10px] text-gray-500 font-medium mb-1.5">
                Color:{" "}
                <span className="text-gray-900 font-bold">
                  {selectedColor || product.coloresDisponibles[0]}
                </span>
              </p>
              <div className="flex gap-1.5 flex-wrap">
                {product.coloresDisponibles.map((color) => {
                  const isSelected = selectedColor === color;
                  const colors = getColorClasses(color, isSelected);
                  return (
                    <button
                      key={color}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedColor(color);
                      }}
                      className={`group/color relative flex items-center justify-center p-0.5 rounded-full border-2 transition-all w-6 h-6 ${
                        isSelected
                          ? "border-[#0FA6D1] scale-110"
                          : "border-transparent hover:border-gray-200"
                      }`}
                      title={`Seleccionar color ${color}`}
                    >
                      <div
                        className={`w-full h-full rounded-full border border-black/10 shadow-sm ${colors.bg}`}
                      ></div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

        {/* Stock */}
        <div>
          {product.stock > 10 ? (
            <div className="flex items-center gap-1.5 text-[10px] text-green-600 font-bold bg-green-50 px-2 py-1.5 rounded-md">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              En stock
            </div>
          ) : product.stock > 0 ? (
            <div className="flex items-center gap-1.5 text-[10px] text-orange-600 font-bold bg-orange-50 px-2 py-1.5 rounded-md">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              Últimas {product.stock} unidades
            </div>
          ) : (
            <div className="flex items-center gap-1.5 text-[10px] text-red-600 font-bold bg-red-50 px-2 py-1.5 rounded-md">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clipRule="evenodd"
                />
              </svg>
              Agotado
            </div>
          )}
        </div>

        {/* Add to Cart Button */}
      </div>
    </div>
  );
};

export default ProductCard;
