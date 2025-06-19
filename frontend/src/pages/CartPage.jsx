// src/pages/CartPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext'; // Import useCart hook

function CartPage() {
    const { cartItems, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart();

    const handleUpdateQuantity = (productId, newQuantity) => {
        updateQuantity(productId, parseInt(newQuantity)); 
    };

    if (cartItems.length === 0) {
        return (
            <div className="container my-5 text-center">
                <h2 className="mb-4">Your Cart is Empty!</h2>
                <p className="lead">Looks like you haven't added anything to your cart yet.</p>
                <Link to="/products" className="btn btn-primary mt-3">Start Shopping</Link>
            </div>
        );
    }

    return (
        <div className="container my-5">
            <h1 className="text-center mb-5 text-primary">Your Shopping Cart</h1>

            <div className="row justify-content-center">
                <div className="col-lg-9">
                    {cartItems.map(item => (
                        <div key={item.id} className="card mb-3 shadow-sm rounded-3">
                            <div className="row g-0 align-items-center p-3">
                                <div className="col-md-2 text-center">
                                    <img src={item.imageUrl} className="img-fluid rounded-start" alt={item.name} style={{ maxWidth: '100px', height: 'auto', objectFit: 'cover' }} />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body py-0">
                                        <h5 className="card-title mb-1">{item.name}</h5>
                                        <p className="card-text text-muted mb-1"><small>Category: {item.category}</small></p>
                                        <p className="card-text fw-bold text-danger mb-0">LKR {item.price}</p>
                                    </div>
                                </div>
                                <div className="col-md-2 text-center">
                                    <label htmlFor={`quantity-${item.id}`} className="form-label visually-hidden">Quantity</label>
                                    <input
                                        type="number"
                                        id={`quantity-${item.id}`}
                                        className="form-control form-control-sm text-center"
                                        value={item.quantity}
                                        min="1"
                                        onChange={(e) => handleUpdateQuantity(item.id, e.target.value)}
                                        style={{ width: '80px', margin: '0 auto' }}
                                    />
                                </div>
                                <div className="col-md-2 text-center">
                                    <button
                                        className="btn btn-danger btn-sm mt-2 mt-md-0"
                                        onClick={() => removeFromCart(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="row justify-content-end mt-4">
                <div className="col-lg-9 text-end">
                    <hr />
                    <h3 className="fw-bold text-success">Total: LKR {totalPrice.toFixed(2)}</h3>
                    <div className="d-flex justify-content-end gap-2 mt-3">
                        <button className="btn btn-warning" onClick={clearCart}>Clear Cart</button>
                        <Link to="/products" className="btn btn-outline-secondary">Continue Shopping</Link>
                        <button className="btn btn-success">Proceed to Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartPage;
