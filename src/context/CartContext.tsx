"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { Book, CartItem } from '@/lib/types';
import { useToast } from '@/hooks/use-toast';

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  cartCount: number;
  cartTotal: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { toast } = useToast();

  useEffect(() => {
    // Load cart from localStorage on initial render
    try {
      const storedCart = localStorage.getItem('shoppingCart');
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    } catch (error) {
      console.error("Failed to load cart from localStorage", error);
      setCartItems([]);
    }
  }, []);

  useEffect(() => {
    // Save cart to localStorage whenever it changes
    try {
      localStorage.setItem('shoppingCart', JSON.stringify(cartItems));
    } catch (error) {
        console.error("Failed to save cart to localStorage", error);
    }
  }, [cartItems]);

  const addToCart = (book: Book) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.book.id === book.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.book.id === book.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { book, quantity: 1 }];
    });
    toast({
      title: "Added to cart",
      description: `${book.title} has been added to your cart.`,
    });
  };

  const removeFromCart = (bookId: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.book.id !== bookId));
    toast({
        title: "Item removed",
        description: "The item has been removed from your cart.",
      });
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(bookId);
      return;
    }
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.book.id === bookId ? { ...item, quantity } : item
      )
    );
  };

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);
  const cartTotal = cartItems.reduce((total, item) => total + item.book.price * item.quantity, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, cartCount, cartTotal }}>
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
