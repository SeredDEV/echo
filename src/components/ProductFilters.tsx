import { categorias, marcas } from '../data/products';

interface ProductFiltersProps {
    selectedCategories: string[];
    selectedBrands: string[];
    priceRange: [number, number];
    onCategoryChange: (category: string) => void;
    onBrandChange: (brand: string) => void;
    onPriceRangeChange: (range: [number, number]) => void;
    onClearFilters: () => void;
}

const ProductFilters = ({
    selectedCategories,
    selectedBrands,
    priceRange,
    onCategoryChange,
    onBrandChange,
    onPriceRangeChange,
    onClearFilters
}: ProductFiltersProps) => {
    const activeFiltersCount = selectedCategories.length + selectedBrands.length +
        (priceRange[0] > 0 || priceRange[1] < 1000000 ? 1 : 0);

    return (
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-100 p-6 overflow-hidden">
            {/* Header with Gradient */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b-2 border-gray-100">
                <h3 className="text-xl font-bold bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                    Filtros
                </h3>
                {activeFiltersCount > 0 && (
                    <button
                        onClick={onClearFilters}
                        className="text-sm text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-lg px-4 py-2 rounded-lg font-semibold transition-all"
                    >
                        Limpiar ({activeFiltersCount})
                    </button>
                )}
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></span>
                    Categorías
                </h4>
                <div className="space-y-3">
                    {categorias.map((categoria) => (
                        <label key={categoria} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-primary-50 transition-all">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(categoria)}
                                onChange={() => onCategoryChange(categoria)}
                                className="w-5 h-5 text-primary-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-primary-700 font-medium transition-colors">
                                {categoria}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></span>
                    Marcas
                </h4>
                <div className="space-y-2 max-h-56 overflow-y-auto pr-2 custom-scrollbar">
                    {marcas.map((marca) => (
                        <label key={marca} className="flex items-center gap-3 cursor-pointer group p-2 rounded-lg hover:bg-primary-50 transition-all">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(marca)}
                                onChange={() => onBrandChange(marca)}
                                className="w-5 h-5 text-primary-600 border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary-500 cursor-pointer"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-primary-700 font-medium transition-colors">
                                {marca}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></span>
                    Rango de Precio
                </h4>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600 mb-2 block font-medium">Mínimo</label>
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => onPriceRangeChange([parseInt(e.target.value) || 0, priceRange[1]])}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            placeholder="$0"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 mb-2 block font-medium">Máximo</label>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value) || 1000000])}
                            className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all"
                            placeholder="$1,000,000"
                        />
                    </div>
                    <div className="flex items-center justify-between text-sm font-semibold text-primary-600 bg-primary-50 px-4 py-2 rounded-lg">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>-</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Quick Filters */}
            <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="w-1 h-5 bg-gradient-to-b from-primary-600 to-accent-600 rounded-full"></span>
                    Filtros Rápidos
                </h4>
                <div className="flex flex-col gap-2">
                    <button
                        onClick={() => onPriceRangeChange([0, 100000])}
                        className="px-4 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 rounded-xl transition-all border-2 border-transparent hover:border-primary-200"
                    >
                        💰 Menos de $100k
                    </button>
                    <button
                        onClick={() => onPriceRangeChange([100000, 300000])}
                        className="px-4 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 rounded-xl transition-all border-2 border-transparent hover:border-primary-200"
                    >
                        💎 $100k - $300k
                    </button>
                    <button
                        onClick={() => onPriceRangeChange([300000, 1000000])}
                        className="px-4 py-3 text-sm font-semibold text-gray-700 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-primary-50 hover:to-accent-50 hover:text-primary-700 rounded-xl transition-all border-2 border-transparent hover:border-primary-200"
                    >
                        👑 Más de $300k
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters;
