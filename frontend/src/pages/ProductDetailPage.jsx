// src/pages/ProductDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

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


function ProductDetailPage() {
    //'id' from useParams()
    const { id } = useParams();
    //  product data in  ProductDetailPage
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
    ]

    const product = allProducts.find(p => p.id === id);

    if (!product) {
        return (
            <div className="container text-center my-5">
                <h2 className="text-danger">Product Not Found</h2>
                <p>The product you are looking for does not exist.</p>
                <Link to="/products" className="btn btn-primary">Back to Products List</Link>
            </div>
        );
    }

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
                        <div className="mt-4">
                            <button className="btn btn-success me-2">
                                <i className="bi bi-cart me-2"></i>Add to Cart
                            </button>
                            <Link to="/products" className="btn btn-outline-primary">Back to Products</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailPage;