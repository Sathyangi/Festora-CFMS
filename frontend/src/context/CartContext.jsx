// src/context/CartContext.jsx
import React, { createContext, useReducer, useEffect, useContext } from 'react';

// Import all images 

import vesakLantern from '../assets/images/lanterns.jpg'; 
import clayOilLamp from '../assets/images/pahana.jpg';   
import pottu from '../assets/images/kukum.png';                 
import spiceBox from '../assets/images/spices.jpg';           
import woodenElephant from '../assets/images/woodenElephant.png'; 
import batikSaree from '../assets/images/bathik.jpg';     
import murukku from '../assets/images/Murukku.jpg';             
import christmasTree from '../assets/images/decoratedTree.jpg'; 
import prayerMat from '../assets/images/prayerMat.jpg';       
import avuruduSweets from '../assets/images/sweet.png'; 
import traditionalDrum from '../assets/images/Tdrum.png'; 

const allProducts = [
    { id: '201', name: 'Vesak Lantern Kit', category: 'Decorations', price: 1200, imageUrl: vesakLantern, tags: ['Vesak', 'Buddhist', 'Handicraft'], culturalContext: 'Vesak Poya', description: 'A DIY kit to create beautiful traditional Sri Lankan Vesak lanterns, perfect for home decorations during the festival.' },
    { id: '202', name: 'Clay Oil Lamp (Pahana)', category: 'Ceremonial Items', price: 250, imageUrl: clayOilLamp, tags: ['Vesak', 'Poson', 'Buddhist', 'Traditional'], culturalContext: 'Vesak Poya', description: 'Hand-crafted clay oil lamps (pahana) used during religious ceremonies and festivals, symbolizing light and wisdom.' },
    { id: '203', name: 'Pottu (Bindi) & Kumkum Pack', category: 'Adornments', price: 500, imageUrl: pottu, tags: ['Hindu', 'Traditional', 'Festival'], culturalContext: 'Thai Pongal / Deepavali', description: 'Authentic Indian bindi and kumkum powder, essential adornments for Hindu women, especially during festive occasions.' },
    { id: '204', name: 'Spice Box Set', category: 'Food', price: 4000, imageUrl: spiceBox, tags: ['Culinary', 'Gift', 'General Cultural'], culturalContext: 'General Sri Lankan Culture', description: 'A curated set of premium Sri Lankan spices, including cinnamon, cardamom, and turmeric, perfect for culinary enthusiasts.' },
    { id: '205', name: 'Wooden Elephant Carving', category: 'Carvings', price: 8000, imageUrl: woodenElephant, tags: ['Cultural', 'Souvenir', 'Handicraft'], culturalContext: 'General Sri Lankan Culture', description: 'An intricately carved wooden elephant figurine, a classic Sri Lankan souvenir representing strength and prosperity.' },
    { id: '206', name: 'Batik Saree', category: 'Textiles', price: 15000, imageUrl: batikSaree, tags: ['Fashion', 'Traditional', 'Gift'], culturalContext: 'General Sri Lankan Culture', description: 'A vibrant, hand-dyed batik saree, showcasing the traditional art of wax-resist dyeing, elegant for any occasion.' },
    { id: '207', name: 'Murukku (Savory Snack)', category: 'Food', price: 750, imageUrl: murukku, tags: ['Hindu', 'Festival Food', 'Snack'], culturalContext: 'Thai Pongal / Deepavali', description: 'Crispy and savory Murukku, a popular spiral-shaped snack commonly enjoyed during Hindu festivals and celebrations.' },
    { id: '208', name: 'Decorative Christmas Tree', category: 'Decorations', price: 10000, imageUrl: christmasTree, tags: ['Christmas', 'Christian', 'Seasonal'], culturalContext: 'Christmas', description: 'A festive pre-lit artificial Christmas tree, ideal for decorating your home during the holiday season.' },
    { id: '209', name: 'Prayer Mat (Janamaz)', category: 'Religious Items', price: 4500, imageUrl: prayerMat, tags: ['Muslim', 'Religious', 'Eid'], culturalContext: 'Eid al-Fitr / Eid al-Adha', description: 'A soft and portable prayer mat (Janamaz), an essential item for daily prayers for Muslims, often gifted during Eid.' },
    { id: '210', name: 'Avurudu Sweet Platter Kit', category: 'Food', price: 2500, imageUrl: avuruduSweets, tags: ['Sinhala New Year', 'Tamil New Year', 'Sweet', 'Traditional'], culturalContext: 'Sinhala & Tamil New Year', description: 'A DIY kit with ingredients and instructions to prepare traditional Sinhala and Tamil New Year sweets like Konda Kavum and Kokis.' },
    { id: '211', name: 'Traditional Drum (Beraya)', category: 'Musical Instruments', price: 25000, imageUrl: traditionalDrum, tags: ['Traditional', 'Musical Instrument', 'Cultural'], culturalContext: 'General Sri Lankan Culture', description: 'An authentic traditional Sri Lankan drum (Beraya), handcrafted by local artisans, used in various cultural performances.' },
];

// Create the CartContext
export const CartContext = createContext();

// Reducer function to manage cart state changes
const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            const itemToAdd = allProducts.find(p => p.id === action.payload.productId);
            if (!itemToAdd) {
                console.error("Product not found:", action.payload.productId);
                return state;
            }

            const existingItemIndex = state.findIndex(item => item.id === action.payload.productId);

            if (existingItemIndex > -1) {
                // If item exists, increase quantity
                return state.map((item, index) =>
                    index === existingItemIndex
                        ? { ...item, quantity: item.quantity + action.payload.quantity }
                        : item
                );
            } else {
                // If item does not exist, add it to the cart
                return [...state, { ...itemToAdd, quantity: action.payload.quantity }];
            }
        case 'REMOVE_ITEM':
            return state.filter(item => item.id !== action.payload.productId);
        case 'UPDATE_QUANTITY':
            return state.map(item =>
                item.id === action.payload.productId
                    ? { ...item, quantity: action.payload.quantity }
                    : item
            ).filter(item => item.quantity > 0); // Remove if quantity becomes 0 or less
        case 'LOAD_CART':
            return action.payload;
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
};

// CartProvider component
export const CartProvider = ({ children }) => {
    // Initialize cart state from localStorage or an empty array
    const [cartItems, dispatch] = useReducer(
        cartReducer,
        [],
        (initialState) => {
            try {
                const storedCart = localStorage.getItem('cartItems');
                return storedCart ? JSON.parse(storedCart) : initialState;
            } catch (error) {
                console.error("Failed to parse cart from localStorage:", error);
                return initialState; // Return empty state on error
            }
        }
    );

    // Save cart state to localStorage whenever it changes
    useEffect(() => {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Failed to save cart to localStorage:", error);
        }
    }, [cartItems]);

    // Actions that can be dispatched
    const addToCart = (productId, quantity = 1) => {
        dispatch({ type: 'ADD_ITEM', payload: { productId, quantity } });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({ type: 'UPDATE_QUANTITY', payload: { productId, quantity } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    // Calculate total items and total price
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

    return (
        <CartContext.Provider
            value={{
                cartItems,
                addToCart,
                removeFromCart,
                updateQuantity,
                clearCart,
                totalItems,
                totalPrice,
                allProducts, // Provide allProducts here for simpler access in other components
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// Custom hook to easily consume the CartContext
export const useCart = () => {
    return useContext(CartContext);
};
