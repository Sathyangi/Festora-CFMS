// src/pages/ProductListingPage.jsx
import React, { useState, useMemo } from 'react';// Imports React, useState 
import { Link } from 'react-router-dom';// Imports Link component for navigation. 
import { useCart } from '../context/CartContext'; // Import useCart hook

function ProductListingPage() {
    // Get allProducts and addToCart from context
    const { allProducts, addToCart } = useCart();

   // State variables for managing user selections in filters and sorting. 
    const [sortOrder, setSortOrder] = useState(''); // Stores the current sort order 
    const [filterCategory, setFilterCategory] = useState('');// Stores the selected product category for filtering. 
    const [filterCulturalContext, setFilterCulturalContext] = useState('');// Stores the selected cultural context for filtering. 
    const [searchQuery, setSearchQuery] = useState('');// Stores the text entered in the search bar. 

    // Extract unique categories and cultural contexts for filter options
    const uniqueCategories = useMemo(() => {
        const categories = new Set(allProducts.map(p => p.category));
        return ['All Categories', ...Array.from(categories).sort()];
    }, [allProducts]);

    const uniqueCulturalContexts = useMemo(() => {
        const contexts = new Set(allProducts.map(p => p.culturalContext));
        return ['All Cultural Contexts', ...Array.from(contexts).sort()];
    }, [allProducts]);

    // Filter and sort products based on state
    const filteredAndSortedProducts = useMemo(() => {
        let currentProducts = [...allProducts]; // Create a mutable copy

        // 1. Filter by Search Query
        if (searchQuery) {
            currentProducts = currentProducts.filter(product =>
                product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
            );
        }

        // 2. Filter by Category
        if (filterCategory && filterCategory !== 'All Categories') {
            currentProducts = currentProducts.filter(product => product.category === filterCategory);
        }

        // 3. Filter by Cultural Context
        if (filterCulturalContext && filterCulturalContext !== 'All Cultural Contexts') {
            currentProducts = currentProducts.filter(product => product.culturalContext === filterCulturalContext);
        }

        // 4. Sort
        currentProducts.sort((a, b) => {
            if (sortOrder === 'price-asc') {
                return a.price - b.price;
            } else if (sortOrder === 'price-desc') {
                return b.price - a.price;
            } else if (sortOrder === 'name-asc') {
                return a.name.localeCompare(b.name);
            } else if (sortOrder === 'name-desc') {
                return b.name.localeCompare(a.name);
            }
            return 0; // No sort
        });

        return currentProducts;
    }, [allProducts, sortOrder, filterCategory, filterCulturalContext, searchQuery]);

    // Group filtered and sorted products by their cultural context for display
    const groupedProducts = useMemo(() => {
        return filteredAndSortedProducts.reduce((acc, product) => {
            const context = product.culturalContext || 'Other Cultural Products'; // Default category
            if (!acc[context]) {
                acc[context] = [];
            }
            acc[context].push(product);
            return acc;
        }, {});
    }, [filteredAndSortedProducts]);

    // Define a preferred order for displaying product categories related to festivals
    const culturalContextOrder = [
        'Vesak Poya',
        'Thai Pongal / Deepavali',
        'Eid al-Fitr / Eid al-Adha',
        'Christmas',
        'Sinhala & Tamil New Year',
        'General Sri Lankan Culture',
        'Other Cultural Products',
    ];

    // Handler for adding a product to the cart from the listing page
    const handleAddToCart = (productId) => {
        addToCart(productId, 1); // Add 1 quantity of the specified product
        // Optionally, show a success message to the user
        // alert(`Product added to cart!`); 
        console.log(`Product ${productId} added to cart!`);
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Festival & Cultural Products</h1>
            <p className="text-center text-muted mb-5">
                Explore a diverse range of products, crafts, and goods associated with Sri Lanka's vibrant festivals and rich cultural heritage.
            </p>

            {/* Filtering/Sorting UI */}
            <div className="d-flex flex-wrap justify-content-center mb-4 gap-3">
                {/* Sort By */}
                <div className="flex-grow-1">
                    <label htmlFor="sortOrder" className="form-label visually-hidden">Sort By</label>
                    <select id="sortOrder" className="form-select" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name-asc">Name: A-Z</option>
                        <option value="name-desc">Name: Z-A</option>
                    </select>
                </div>

                {/* Filter by Category */}
                <div className="flex-grow-1">
                    <label htmlFor="filterCategory" className="form-label visually-hidden">Filter by Category</label>
                    <select id="filterCategory" className="form-select" value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                        {uniqueCategories.map(cat => (
                            <option key={cat} value={cat === 'All Categories' ? '' : cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                {/* Filter by Cultural Context */}
                <div className="flex-grow-1">
                    <label htmlFor="filterCulturalContext" className="form-label visually-hidden">Filter by Festival</label>
                    <select id="filterCulturalContext" className="form-select" value={filterCulturalContext} onChange={(e) => setFilterCulturalContext(e.target.value)}>
                        {uniqueCulturalContexts.map(context => (
                            <option key={context} value={context === 'All Cultural Contexts' ? '' : context}>{context}</option>
                        ))}
                    </select>
                </div>

                {/* Search */}
                <div className="flex-grow-2">
                    <label htmlFor="searchProducts" className="form-label visually-hidden">Search Products</label>
                    <input
                        type="text"
                        id="searchProducts"
                        className="form-control"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>

    {/* Display Products by Cultural Context */}
       {Object.keys(groupedProducts).length > 0 ? (
         // Map over the preferred order to display categories
         culturalContextOrder.map(context => (
            groupedProducts[context] && groupedProducts[context].length > 0 && ( // Only render if category has products
              <div key={context} className="mb-5">
                <h2 className="text-center mb-4 text-primary">{context} Products</h2>
                  <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                    {groupedProducts[context].map(product => (
                        <div key={product.id} className="col">
                          <div className="card h-100 shadow-sm">
                             <img src={product.imageUrl} className="card-img-top" alt={product.name} />
                               <div className="card-body d-flex flex-column">
                                 <h5 className="card-title">{product.name}</h5>
                                 <h6 className="card-subtitle mb-2 text-muted">{product.category}</h6>
                                 <p className="card-text fw-bold">LKR {product.price}</p>
                                    <div className="mb-3 mt-auto">
                                        {product.tags.map(tag => (
                                         <span key={tag} className="badge bg-secondary me-1">{tag}</span>
                                        ))}
                                     </div>
                                <div className="d-flex justify-content-between align-items-center">
                                     <Link to={`/products/${product.id}`} className="btn btn-outline-secondary">Details</Link>
                                </div>
                               </div>
                             </div>
                          </div>
                       ))}
                    </div>
                 </div>
                )
             ))
          ) : (
          <div className="text-center my-5">
             <p className="lead">No products found matching your criteria.</p>
          </div>
          )}
    </div>
    );
}

export default ProductListingPage;
// Exports the ProductListingPage component.
   