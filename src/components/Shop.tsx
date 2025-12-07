import { useState, useMemo, useEffect } from 'react';
import { products, Product } from '../data/products';
import ProductCard from './ProductCard';
import ProductFilters from './ProductFilters';

type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc';
type ViewMode = 'grid-2' | 'grid-3' | 'grid-4' | 'list';

const Shop = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
    const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000000]);
    const [sortBy, setSortBy] = useState<SortOption>('default');
    const [viewMode, setViewMode] = useState<ViewMode>('grid-3');
    const [currentPage, setCurrentPage] = useState(1);
    const [showFilters, setShowFilters] = useState(false);
    const itemsPerPage = 12;

    // Get category from URL params
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
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
    }, []);

    // Filter and sort products
    const filteredAndSortedProducts = useMemo(() => {
        let filtered = products.filter(product => {
            // Search filter
            const matchesSearch = product.nombre.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.descripcion.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.marca.toLowerCase().includes(searchQuery.toLowerCase());

            // Category filter
            const matchesCategory = selectedCategories.length === 0 ||
                selectedCategories.includes(product.categoria);

            // Brand filter
            const matchesBrand = selectedBrands.length === 0 ||
                selectedBrands.includes(product.marca);

            // Price filter
            const matchesPrice = product.precio >= priceRange[0] && product.precio <= priceRange[1];

            return matchesSearch && matchesCategory && matchesBrand && matchesPrice;
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
    }, [searchQuery, selectedCategories, selectedBrands, priceRange, sortBy]);

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
        setPriceRange([0, 1000000]);
        setSearchQuery('');
    };

    const getGridClass = () => {
        switch (viewMode) {
            case 'grid-2': return 'grid-cols-1 md:grid-cols-2';
            case 'grid-3': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
            case 'grid-4': return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4';
            case 'list': return 'grid-cols-1';
            default: return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">Tienda</h1>
                    <p className="text-gray-600">Descubre nuestra selección de productos inteligentes</p>
                </div>

                {/* Search and Filters Bar */}
                <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
                    <div className="flex flex-col lg:flex-row gap-4">
                        {/* Search */}
                        <div className="flex-1">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Buscar productos..."
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                                />
                                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </div>
                        </div>

                        {/* Sort */}
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as SortOption)}
                            className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        >
                            <option value="default">Ordenar por defecto</option>
                            <option value="price-asc">Precio: Menor a Mayor</option>
                            <option value="price-desc">Precio: Mayor a Menor</option>
                            <option value="name-asc">Nombre: A-Z</option>
                            <option value="name-desc">Nombre: Z-A</option>
                        </select>

                        {/* View Mode */}
                        <div className="hidden lg:flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                            <button
                                onClick={() => setViewMode('grid-2')}
                                className={`p-2 rounded ${viewMode === 'grid-2' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                                title="2 columnas"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                    <rect x="3" y="3" width="8" height="8" rx="1" />
                                    <rect x="13" y="3" width="8" height="8" rx="1" />
                                    <rect x="3" y="13" width="8" height="8" rx="1" />
                                    <rect x="13" y="13" width="8" height="8" rx="1" />
                                </svg>
                            </button>
                            <button
                                onClick={() => setViewMode('grid-3')}
                                className={`p-2 rounded ${viewMode === 'grid-3' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                                title="3 columnas"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                                className={`p-2 rounded ${viewMode === 'grid-4' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'}`}
                                title="4 columnas"
                            >
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
                        </div>

                        {/* Mobile Filter Toggle */}
                        <button
                            onClick={() => setShowFilters(!showFilters)}
                            className="lg:hidden px-4 py-3 bg-primary-600 text-white rounded-lg font-medium flex items-center justify-center gap-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                            </svg>
                            Filtros
                        </button>
                    </div>
                </div>

                {/* Results Count */}
                <div className="mb-6 text-sm text-gray-600">
                    Mostrando {paginatedProducts.length} de {filteredAndSortedProducts.length} resultados
                </div>

                <div className="flex gap-6">
                    {/* Filters Sidebar - Desktop */}
                    <aside className="hidden lg:block w-64 flex-shrink-0">
                        <ProductFilters
                            selectedCategories={selectedCategories}
                            selectedBrands={selectedBrands}
                            priceRange={priceRange}
                            onCategoryChange={handleCategoryChange}
                            onBrandChange={handleBrandChange}
                            onPriceRangeChange={setPriceRange}
                            onClearFilters={handleClearFilters}
                        />
                    </aside>

                    {/* Filters Sidebar - Mobile */}
                    {showFilters && (
                        <div className="lg:hidden fixed inset-0 bg-black/50 z-50" onClick={() => setShowFilters(false)}>
                            <div className="absolute right-0 top-0 bottom-0 w-80 bg-white overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                                <div className="p-4">
                                    <button
                                        onClick={() => setShowFilters(false)}
                                        className="mb-4 flex items-center gap-2 text-gray-700"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                        Cerrar
                                    </button>
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
                    <div className="flex-1">
                        {paginatedProducts.length > 0 ? (
                            <>
                                <div className={`grid ${getGridClass()} gap-6 mb-8`}>
                                    {paginatedProducts.map(product => (
                                        <ProductCard key={product.id} product={product} />
                                    ))}
                                </div>

                                {/* Pagination */}
                                {totalPages > 1 && (
                                    <div className="flex items-center justify-center gap-2">
                                        <button
                                            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                                            disabled={currentPage === 1}
                                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Anterior
                                        </button>

                                        <div className="flex gap-2">
                                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                                <button
                                                    key={page}
                                                    onClick={() => setCurrentPage(page)}
                                                    className={`w-10 h-10 rounded-lg font-medium ${currentPage === page
                                                            ? 'bg-primary-600 text-white'
                                                            : 'border border-gray-300 hover:bg-gray-50'
                                                        }`}
                                                >
                                                    {page}
                                                </button>
                                            ))}
                                        </div>

                                        <button
                                            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                                            disabled={currentPage === totalPages}
                                            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            Siguiente
                                        </button>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-16">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No se encontraron productos</h3>
                                <p className="text-gray-600 mb-4">Intenta ajustar tus filtros o búsqueda</p>
                                <button
                                    onClick={handleClearFilters}
                                    className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
                                >
                                    Limpiar filtros
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
