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
        <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-bold text-gray-900">Filtros</h3>
                {activeFiltersCount > 0 && (
                    <button
                        onClick={onClearFilters}
                        className="text-sm text-primary-600 hover:text-primary-700 font-medium"
                    >
                        Limpiar ({activeFiltersCount})
                    </button>
                )}
            </div>

            {/* Categories */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Categorías</h4>
                <div className="space-y-2">
                    {categorias.map((categoria) => (
                        <label key={categoria} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedCategories.includes(categoria)}
                                onChange={() => onCategoryChange(categoria)}
                                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">
                                {categoria}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Brands */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Marcas</h4>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                    {marcas.map((marca) => (
                        <label key={marca} className="flex items-center gap-2 cursor-pointer group">
                            <input
                                type="checkbox"
                                checked={selectedBrands.includes(marca)}
                                onChange={() => onBrandChange(marca)}
                                className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-primary-600 transition-colors">
                                {marca}
                            </span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Rango de Precio</h4>
                <div className="space-y-4">
                    <div>
                        <label className="text-sm text-gray-600 mb-1 block">Mínimo</label>
                        <input
                            type="number"
                            value={priceRange[0]}
                            onChange={(e) => onPriceRangeChange([parseInt(e.target.value) || 0, priceRange[1]])}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="$0"
                        />
                    </div>
                    <div>
                        <label className="text-sm text-gray-600 mb-1 block">Máximo</label>
                        <input
                            type="number"
                            value={priceRange[1]}
                            onChange={(e) => onPriceRangeChange([priceRange[0], parseInt(e.target.value) || 1000000])}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                            placeholder="$1,000,000"
                        />
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>${priceRange[0].toLocaleString()}</span>
                        <span>-</span>
                        <span>${priceRange[1].toLocaleString()}</span>
                    </div>
                </div>
            </div>

            {/* Quick Filters */}
            <div>
                <h4 className="font-semibold text-gray-900 mb-3">Filtros Rápidos</h4>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onPriceRangeChange([0, 100000])}
                        className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    >
                        Menos de $100k
                    </button>
                    <button
                        onClick={() => onPriceRangeChange([100000, 300000])}
                        className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    >
                        $100k - $300k
                    </button>
                    <button
                        onClick={() => onPriceRangeChange([300000, 1000000])}
                        className="px-3 py-1.5 text-xs font-medium text-gray-700 bg-gray-100 hover:bg-primary-50 hover:text-primary-600 rounded-lg transition-colors"
                    >
                        Más de $300k
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductFilters;
