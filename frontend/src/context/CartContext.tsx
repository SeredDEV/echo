import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';

export interface CartItem extends Product {
    quantity: number;
    selectedColor?: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, color?: string | null, quantity?: number) => void;
    removeFromCart: (productId: string, color?: string) => void;
    updateQuantity: (productId: string, quantity: number, color?: string) => void;
    clearCart: () => void;
    totalItems: number;
    totalAmount: number;
    isCartOpen: boolean;
    setIsCartOpen: (isOpen: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    // Lazy initialization to read from localStorage immediately
    const [items, setItems] = useState<CartItem[]>(() => {
        if (typeof window === 'undefined') return [];
        try {
            const savedCart = localStorage.getItem('echo_cart_v2');
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (e) {
            console.error('Error loading cart:', e);
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    // Save to localStorage whenever items change
    useEffect(() => {
        localStorage.setItem('echo_cart_v2', JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Product, color?: string | null, quantity: number = 1) => {
        setItems(currentItems => {
            const existingItemIndex = currentItems.findIndex(
                item => item.id === product.id && item.selectedColor === color
            );

            if (existingItemIndex > -1) {
                const newItems = [...currentItems];
                newItems[existingItemIndex].quantity += quantity;
                return newItems;
            } else {
                return [...currentItems, {
                    ...product,
                    quantity: quantity,
                    selectedColor: color || undefined
                }];
            }
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (productId: string, color?: string) => {
        setItems(currentItems =>
            currentItems.filter(item => !(item.id === productId && item.selectedColor === color))
        );
    };

    const updateQuantity = (productId: string, quantity: number, color?: string) => {
        if (quantity < 1) {
            removeFromCart(productId, color);
            return;
        }
        setItems(currentItems =>
            currentItems.map(item =>
                (item.id === productId && item.selectedColor === color)
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const clearCart = () => {
        setItems([]);
    };

    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
    const totalAmount = items.reduce((sum, item) => sum + (item.precio * item.quantity), 0);

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            totalItems,
            totalAmount,
            isCartOpen,
            setIsCartOpen
        }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
