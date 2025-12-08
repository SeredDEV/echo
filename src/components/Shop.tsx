import { useState, useMemo, useEffect } from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';
import ProductModal from './ProductModal';
import { Product } from '../data/products';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
type ViewMode = 'grid-2' | 'grid-3' | 'grid-4' | 'list';

const Shop = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [selectedSubcategory, setSelectedSubcategory] = useState<string>('');
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [viewMode, setViewMode] = useState<ViewMode>('grid-3');
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const itemsPerPage = 12;

    // Get filters from URL params
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);

        // Category filter
        const categoria = params.get('categoria');
        if (categoria) {
            const categoriaMap: Record<string, string> = {
                'altavoces': 'Altavoces Inteligentes',
                'streaming': 'Dispositivos Streaming',
                'accesorios': 'Accesorios Inteligentes'
            };
            const fullCategoria = categoriaMap[categoria];
            if (fullCategoria) {
                setSelectedCategories([fullCategoria]);
            }
        }

        // Brand filter
        const marca = params.get('marca');
        if (marca) {
            setSelectedBrands([marca]);
        }

        // Subcategory filter
        const subcategoria = params.get('subcategoria');
        if (subcategoria) {
            setSelectedSubcategory(subcategoria);
        }
    }, []);

    // Filter and sort products
    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products.filter(product => {
            // Search filter
            const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.descripcionCorta.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.marca.toLowerCase().includes(searchQuery.toLowerCase());

            // Category filter
            const matchesCategory = selectedCategories.length === 0 ||
                selectedCategories.includes(product.categoria);

            // Brand filter
            const matchesBrand = selectedBrands.length === 0 ||
                selectedBrands.includes(product.marca);

            // Subcategory filter
            const matchesSubcategory = !selectedSubcategory ||
                product.subcategoria === selectedSubcategory;

            // Price filter
            const matchesPrice = product.precio >= priceRange[0] && product.precio <= priceRange[1];

            return matchesSearch && matchesCategory && matchesBrand && matchesSubcategory && matchesPrice;
        });

        // Sort
        switch (sortBy) {
            case 'price-asc':
                filtered.sort((a, b) => a.precio - b.precio);
                break;
            case 'price-desc':
                filtered.sort((a, b) => b.precio - a.precio);
                break;
            case 'name-asc':
                filtered.sort((a, b) => a.nombre.localeCompare(b.nombre));
                break;
            case 'name-desc':
                filtered.sort((a, b) => b.nombre.localeCompare(a.nombre));
                break;
            default:
                // Default: destacados primero
                filtered.sort((a, b) => (b.destacado ? 1 : 0) - (a.destacado ? 1 : 0));
        }

        return filtered;
    }, [searchQuery, selectedCategories, selectedBrands, selectedSubcategory, priceRange, sortBy]);

    // Pagination
    const totalPages = Math.ceil(filteredAndSortedProducts.length / itemsPerPage);
    const paginatedProducts = filteredAndSortedProducts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Reset to page 1 when filters change
    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, selectedCategories, selectedBrands, priceRange, sortBy]);

    const handleCategoryChange = (category: string) => {
        setSelectedCategories(prev =>
            prev.includes(category)
                ? prev.filter(c => c !== category)
                : [...prev, category]
        );
    };

    const handleBrandChange = (brand: string) => {
        setSelectedBrands(prev =>
            prev.includes(brand)
                ? prev.filter(b => b !== brand)
                : [...prev, brand]
        );
    };

    const handleClearFilters = () => {
        setSelectedCategories([]);
        setSelectedBrands([]);
        setSelectedSubcategory('');
        setPriceRange([0, 1000000]);
        setSearchQuery('');
    };

    const getGridClass = () => {
        switch (viewMode) {
            case 'grid-2': return 'grid-cols-2 lg:grid-cols-2';
            case 'grid-3': return 'grid-cols-2 lg:grid-cols-3';
            case 'grid-4': return 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
            case 'list': return 'grid-cols-1';
            default: return 'grid-cols-2 lg:grid-cols-3';
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
            <div className="container mx-auto px-4 py-12">
                <ProductModal
                    product={selectedProduct}
                    isOpen={!!selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
                {/* Compact Search and Controls Bar */}
                <div className="bg-white rounded-xl shadow-md border border-gray-100 p-3 sm:p-4 mb-6">
                    {/* Search */}
                    <div className="relative mb-2">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar productos por nombre, marca..."
                            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0FA6D1] focus:border-[#0FA6D1] transition-all text-sm"
                        />
                        <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                    {/* Controls Row */}
                    <div className="flex items-center gap-2">
                        {/* Sort Dropdown */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="flex-1 px-3 py-2.5 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-[#0FA6D1] focus:border-[#0FA6D1] bg-white text-sm font-medium cursor-pointer hover:border-[#0FA6D1] transition-all appearance-none bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22none%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20stroke%3D%22%230FA6D1%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20stroke-width%3D%221.5%22%20d%3D%22M6%208l4%204%204-4%22%2F%3E%3C%2Fsvg%3E')] bg-[length:1.5em_1.5em] bg-[right_0.5rem_center] bg-no-repeat pr-10"
                        >
                            <option value="default">⭐ Destacados</option>
                            <option value="price-asc">💰 Menor precio</option>
                            <option value="price-desc">💎 Mayor precio</option>
                            <option value="name-asc">🔤 A-Z</option>
                            <option value="name-desc">🔤 Z-A</option>
                        </select>

                        {/* View Mode Toggle */}
                        <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid-2')}
                                className={`p-2 rounded-md transition-all ${viewMode === 'grid-2' ? 'bg-white shadow-sm text-[#0FA6D1]' : 'text-gray-600'}`}
                                title="Cuadrícula"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="8" height="8" rx="1" />
                                    <rect x="13" y="3" width="8" height="8" rx="1" />
                                    <rect x="3" y="13" width="8" height="8" rx="1" />
                                    <rect x="13" y="13" width="8" height="8" rx="1" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('list')}
                                className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[#0FA6D1]' : 'text-gray-600'}`}
                                title="Lista"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>

                        {/* Filters Button */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden px-3 py-2.5 bg-[#0FA6D1] text-white rounded-lg font-medium flex items-center gap-1.5 text-sm whitespace-nowrap"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filtros
                            {(selectedCategories.length + selectedBrands.length) > 0 && (
                                <span className="bg-white text-[#0FA6D1] text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                    {selectedCategories.length + selectedBrands.length}
                                </span>
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop View Mode (hidden on mobile) */}
                <div className="hidden lg:flex items-center justify-end gap-2 mb-4">
                    <div className="flex items-center gap-1 bg-gray-100 rounded-lg p-1">
                        <button
                            onClick={() => setViewMode('grid-2')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'grid-2' ? 'bg-white shadow-sm text-[#0FA6D1]' : 'text-gray-600'}`}
                            title="2 columnas"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="3" y="3" width="8" height="8" rx="1" />
                                <rect x="13" y="3" width="8" height="8" rx="1" />
                                <rect x="3" y="13" width="8" height="8" rx="1" />
                                <rect x="13" y="13" width="8" height="8" rx="1" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setViewMode('grid-3')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'grid-3' ? 'bg-white shadow-sm text-[#0FA6D1]' : 'text-gray-600'}`}
                            title="3 columnas"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="3" width="6" height="6" rx="1" />
                                <rect x="9" y="3" width="6" height="6" rx="1" />
                                <rect x="16" y="3" width="6" height="6" rx="1" />
                                <rect x="2" y="10" width="6" height="6" rx="1" />
                                <rect x="9" y="10" width="6" height="6" rx="1" />
                                <rect x="16" y="10" width="6" height="6" rx="1" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setViewMode('grid-4')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'grid-4' ? 'bg-white shadow-sm text-[#0FA6D1]' : 'text-gray-600'}`}
                            title="4 columnas"
                        >
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <rect x="2" y="3" width="4" height="4" rx="0.5" />
                                <rect x="7" y="3" width="4" height="4" rx="0.5" />
                                <rect x="12" y="3" width="4" height="4" rx="0.5" />
                                <rect x="17" y="3" width="4" height="4" rx="0.5" />
                                <rect x="2" y="8" width="4" height="4" rx="0.5" />
                                <rect x="7" y="8" width="4" height="4" rx="0.5" />
                                <rect x="12" y="8" width="4" height="4" rx="0.5" />
                                <rect x="17" y="8" width="4" height="4" rx="0.5" />
                            </svg>
                        </button>
                        <button
                            onClick={() => setViewMode('list')}
                            className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-[#0FA6D1]' : 'text-gray-600'}`}
                            title="Lista"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 flex items-center justify-between">
                    <p className="text-gray-600 font-medium">
                        Mostrando <span className="text-[#0FA6D1] font-bold">{paginatedProducts.length}</span> de{' '}
                        <span className="text-[#0FA6D1] font-bold">{filteredAndSortedProducts.length}</span> productos
                    </p>
                    {(selectedCategories.length > 0 || selectedBrands.length > 0 || selectedSubcategory || searchQuery) && (
                        <button
                            onClick={handleClearFilters}
                            className="text-sm text-gray-600 hover:text-[#0FA6D1] font-medium flex items-center gap-1 transition-colors"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            Limpiar filtros
                        </button>
                    )}
                </div>

                <div className="flex gap-8">
                    {/* Filters Sidebar - Desktop */}
                    <aside className="hidden lg:block w-80 flex-shrink-0">
                        <div className="sticky top-24">
                            <ProductFilters
                                selectedCategories={selectedCategories}
                                selectedBrands={selectedBrands}
                                priceRange={priceRange}
                                onCategoryChange={handleCategoryChange}
                                onBrandChange={handleBrandChange}
                                onPriceRangeChange={setPriceRange}
                                onClearFilters={handleClearFilters}
                            />
                        </div>
                    </aside>

                    {/* Filters Sidebar - Mobile */}
                    {showFilters && (
                        <div className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fade-in" onClick={() => setShowFilters(false)}>
                            <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-white overflow-y-auto animate-slide-left shadow-2xl" onClick={(e) => e.stopPropagation()}>
                                <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between z-10">
                                    <h3 className="text-lg font-bold text-gray-900">Filtros</h3>
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                                    >
                                        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="p-6">
                                    <ProductFilters
                                        selectedCategories={selectedCategories}
                                        selectedBrands={selectedBrands}
                                        priceRange={priceRange}
                                        onCategoryChange={handleCategoryChange}
                                        onBrandChange={handleBrandChange}
                                        onPriceRangeChange={setPriceRange}
                                        onClearFilters={handleClearFilters}
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Products Grid */}
                    <div className="flex-1 min-w-0">
                        {paginatedProducts.length > 0 ? (
                            <>
                                <div className={`grid ${getGridClass()} gap-6 mb-12`}>
                                    {paginatedProducts.map(product => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            onClick={() => setSelectedProduct(product)}
                                        />
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2 mt-12">
                                        <button
                                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                            disabled={currentPage === 1}
                                            className="px-5 py-3 border-2 border-gray-200 rounded-xl hover:border-[#0FA6D1] hover:text-[#0FA6D1] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 transition-all font-medium"
                                        >
                                            ← Anterior
                                        </button>

                                        <div className="flex gap-2">
                                            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
                                                let page;
                                                if (totalPages <= 5) {
                                                    page = i + 1;
                                                } else if (currentPage <= 3) {
                                                    page = i + 1;
                                                } else if (currentPage >= totalPages - 2) {
                                                    page = totalPages - 4 + i;
                                                } else {
                                                    page = currentPage - 2 + i;
                                                }
                                                return (
                                                    <button
                                                        key={page}
                                                        onClick={() => setCurrentPage(page)}
                                                        className={`w-12 h-12 rounded-xl font-semibold transition-all ${currentPage === page
                                                            ? 'bg-gradient-to-r from-[#0FA6D1] to-[#5EA4CF] text-white shadow-lg scale-110'
                                                            : 'border-2 border-gray-200 hover:border-[#0FA6D1] hover:text-[#0FA6D1]'
                                                            }`}
                                                    >
                                                        {page}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        <button
                                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                            disabled={currentPage === totalPages}
                                            className="px-5 py-3 border-2 border-gray-200 rounded-xl hover:border-[#0FA6D1] hover:text-[#0FA6D1] disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-gray-200 transition-all font-medium"
                                        >
                                            Siguiente →
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">No encontramos productos</h3>
                                <p className="text-gray-600 mb-6">Intenta ajustar tus filtros o búsqueda</p>
                                <button
                                    onClick={handleClearFilters}
                                    className="px-8 py-3 bg-gradient-to-r from-[#0FA6D1] to-[#5EA4CF] text-white rounded-xl hover:shadow-lg transition-all font-semibold"
                                >
                                    Limpiar todos los filtros
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;
