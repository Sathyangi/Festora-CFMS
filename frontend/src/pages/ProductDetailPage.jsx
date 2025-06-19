// src/pages/ProductDetailPage.jsx
import React from 'react';// Imports the React library.
import { useParams, Link } from 'react-router-dom'; // Imports useParams hook to get URL parameters and Link component for navigation
import { useCart } from '../context/CartContext'; // Import useCart hook

function ProductDetailPage() {
    //'id' from useParams()
    const { id } = useParams();
    const { allProducts, addToCart } = useCart(); // Get allProducts and addToCart from context
    

    // Finds the product in the allProducts array whose 'id' matches the ID from the URL parameters. 
    const product = allProducts.find(p => p.id === id);

    // If no product is found display a "Product Not Found" message. 
    if (!product) {
        return (
            <div className="container text-center my-5">
                <h2 className="text-danger">Product Not Found</h2>
                <p>The product you are looking for does not exist.</p>
                {/* Link to go back to the product list */}
                <Link to="/products" className="btn btn-primary">Back to Products List</Link>
            </div>
        );
    }
     
    // Handler for adding the product to the cart
const handleAddToCart = () => { 
    addToCart(product.id, 1); // Add 1 quantity of the current product
    // Optionally, show a success message to the user
    console.log(`${product.name} added to cart!`); 
};

    
    // If a product is found, render its details.
    return (
        <div className="container my-5">
            <div className="card shadow-lg p-4">
                <div className="row g-4">
                    <div className="col-md-6">
                        <img src={product.imageUrl} className="img-fluid rounded shadow" alt={product.name} />
                    </div>
                    <div className="col-md-6">
                        <h1 className="mb-3 text-success">{product.name}</h1>
                        <p className="lead">Category: {product.category}</p>
                        <p className="lead fw-bold text-danger">Price: {product.price}</p>
                        {product.culturalContext && (
                            <p className="lead">Associated with: <span className="badge bg-primary">{product.culturalContext}</span></p>
                        )}
                        <hr />
                        <p className="card-text">{product.description}</p>
                        <div className="mt-4">
                            {product.tags.map(tag => (
                                <span key={tag} className="badge bg-secondary me-1 mb-1">{tag}</span>
                            ))}
                        </div>
                        <div className="mt-4"> {/* Margin top for action buttons */}
                            {/* Attach the handleAddToCart function to the button's onClick event */}
                            <button className="btn btn-success me-2" onClick={handleAddToCart}>
                                <i className="bi bi-cart me-2"></i>Add to Cart
                            </button>
                            <Link to="/products" className="btn btn-outline-primary">Back to Products</Link> 
                            {/* Link to go back to the product listing page */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;
// Exports the ProductDetailPage component. 