import { useState, useEffect } from "react";

export default function Products({category}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => setProducts(data));
    }, []);

    return (    
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                {products.filter(product => product.category === category).map(product => (
                    <div 
                        key={product.id} 
                        className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 overflow-hidden group"
                    >
                        {/* Image Container */}
                        <div className="relative overflow-hidden bg-gray-50 p-4">
                            <img 
                                src={product.image} 
                                alt={product.title} 
                                className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300" 
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="p-4 space-y-3">
                            <h3 className="font-semibold text-gray-800 text-sm line-clamp-2 h-10 leading-5">
                                {product.title}
                            </h3>
                            
                            {/* Rating */}
                            <div className="flex items-center gap-1">
                                <div className="flex text-yellow-400">
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`w-4 h-4 ${i < Math.floor(product.rating?.rate || 0) ? 'fill-current' : 'text-gray-300'}`} 
                                            fill="currentColor" 
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-xs text-gray-500 ml-1">
                                    ({product.rating?.count || 0})
                                </span>
                            </div>
                            
                            {/* Price and Button */}
                            <div className="flex items-center justify-between pt-2">
                                <span className="text-xl  text-black   ">
                                    ${product.price}
                                </span>
                                <button className="bg-purple-500 hover:bg-purple-600 text-white text-sm font-medium px-3 py-2 rounded-lg transition-colors duration-200 flex items-center gap-1">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 6M7 13l-1.5 6m0 0h9" />
                                    </svg>
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}