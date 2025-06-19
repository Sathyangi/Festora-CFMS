// src/pages/ProductListingPage.jsx
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
//import local images
import vesakLanternImage from '../assets/images/lanterns.jpg';
import clayPahanaImage from '../assets/images/pahana.jpg';
import pottuImage from '../assets/images/kukum.png';
import spicesImage from '../assets/images/spices.jpg';
import elephantImage from '../assets/images/woodenElephant.png';
import batikImage from '../assets/images/bathik.jpg';
import murukkuImage from '../assets/images/murukku.jpg';
import christmasTreeImage from '../assets/images/decoratedTree.jpg';
import prayerMatImage from '../assets/images/prayerMat.jpg';
import avuruduSweetsImage from '../assets/images/sweet.png';
import berayaImage from '../assets/images/Tdrum.png';

function ProductListingPage() {
    // This product data should be consistent with what's in your ProductDetailPage
    const allProducts = [
                { id: '201', name: 'Vesak Lantern Kit', category: 'Decorations', price: 1200, imageUrl: vesakLanternImage, tags: ['Vesak', 'Buddhist', 'Handicraft'], culturalContext: 'Vesak Poya', description: 'A DIY kit to create beautiful traditional Sri Lankan Vesak lanterns, perfect for home decorations during the festival.' },
                { id: '202', name: 'Clay Oil Lamp (Pahana)', category: 'Ceremonial Items', price: 250, imageUrl: clayPahanaImage, tags: ['Vesak', 'Poson', 'Buddhist', 'Traditional'], culturalContext: 'Vesak Poya', description: 'Hand-crafted clay oil lamps (pahana) used during religious ceremonies and festivals, symbolizing light and wisdom.' },
                { id: '203', name: 'Pottu (Bindi) & Kumkum Pack', category: 'Adornments', price: 500, imageUrl: pottuImage, tags: ['Hindu', 'Traditional', 'Festival'], culturalContext: 'Thai Pongal / Deepavali', description: 'Authentic Indian bindi and kumkum powder, essential adornments for Hindu women, especially during festive occasions.' },
                { id: '204', name: 'Spice Box Set', category: 'Food', price: 4000, imageUrl: spicesImage, tags: ['Culinary', 'Gift', 'General Cultural'], culturalContext: 'General Sri Lankan Culture', description: 'A curated set of premium Sri Lankan spices, including cinnamon, cardamom, and turmeric, perfect for culinary enthusiasts.' },
                { id: '205', name: 'Wooden Elephant Carving', category: 'Carvings', price: 8000, imageUrl: elephantImage, tags: ['Cultural', 'Souvenir', 'Handicraft'], culturalContext: 'General Sri Lankan Culture', description: 'An intricately carved wooden elephant figurine, a classic Sri Lankan souvenir representing strength and prosperity.' },
                { id: '206', name: 'Batik Saree', category: 'Textiles', price: 15000, imageUrl: batikImage, tags: ['Fashion', 'Traditional', 'Gift'], culturalContext: 'General Sri Lankan Culture', description: 'A vibrant, hand-dyed batik saree, showcasing the traditional art of wax-resist dyeing, elegant for any occasion.' },
                { id: '207', name: 'Murukku (Savory Snack)', category: 'Food', price: 750, imageUrl: murukkuImage, tags: ['Hindu', 'Festival Food', 'Snack'], culturalContext: 'Thai Pongal / Deepavali', description: 'Crispy and savory Murukku, a popular spiral-shaped snack commonly enjoyed during Hindu festivals and celebrations.' },
                { id: '208', name: 'Decorative Christmas Tree', category: 'Decorations', price: 10000, imageUrl: christmasTreeImage, tags: ['Christmas', 'Christian', 'Seasonal'], culturalContext: 'Christmas', description: 'A festive pre-lit artificial Christmas tree, ideal for decorating your home during the holiday season.' },
                { id: '209', name: 'Prayer Mat (Janamaz)', category: 'Religious Items', price: 4500, imageUrl: prayerMatImage, tags: ['Muslim', 'Religious', 'Eid'], culturalContext: 'Eid al-Fitr / Eid al-Adha', description: 'A soft and portable prayer mat (Janamaz), an essential item for daily prayers for Muslims, often gifted during Eid.' },
                { id: '210', name: 'Avurudu Sweet Platter Kit', category: 'Food', price: 2500, imageUrl: avuruduSweetsImage, tags: ['Sinhala New Year', 'Tamil New Year', 'Sweet', 'Traditional'], culturalContext: 'Sinhala & Tamil New Year', description: 'A DIY kit with ingredients and instructions to prepare traditional Sinhala and Tamil New Year sweets like Konda Kavum and Kokis.' },
                { id: '211', name: 'Traditional Drum (Beraya)', category: 'Musical Instruments', price: 25000, imageUrl: berayaImage, tags: ['Traditional', 'Musical Instrument', 'Cultural'], culturalContext: 'General Sri Lankan Culture', description: 'An authentic traditional Sri Lankan drum (Beraya), handcrafted by local artisans, used in various cultural performances.' },
    ];

    const [sortOrder, setSortOrder] = useState(''); // 'price-asc', 'price-desc', 'name-asc', 'name-desc'
    const [filterCategory, setFilterCategory] = useState('');
    const [filterCulturalContext, setFilterCulturalContext] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

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
                                                    <button className="btn btn-primary">Add to Cart</button>
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
   