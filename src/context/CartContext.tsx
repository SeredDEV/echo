import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product } from '../data/products';

export interface CartItem extends Product {
    quantity: number;
    selectedColor?: string;
}

interface CartContextType {
    items: CartItem[];
    addToCart: (product: Product, color?: string | null) => void;
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
    const [items, setItems] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const savedCart = localStorage.getItem('echo_cart');
        if (savedCart) {
            try {
                setItems(JSON.parse(savedCart));
            } catch (e) {
                console.error('Error loading cart:', e);
            }
        }
    }, []);

    // Save to localStorage whenever items change
    useEffect(() => {
        localStorage.setItem('echo_cart', JSON.stringify(items));
    }, [items]);

    const addToCart = (product: Product, color?: string | null) => {
        setItems(currentItems => {
            const existingItemIndex = currentItems.findIndex(
                item => item.id === product.id && item.selectedColor === color
            );

            if (existingItemIndex > -1) {
                const newItems = [...currentItems];
                newItems[existingItemIndex].quantity += 1;
                return newItems;
            } else {
                return [...currentItems, {
                    ...product,
                    quantity: 1,
                    selectedColor: color || undefined
                }];
            }
        });
        // Optional: Open cart or show toast
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
