import React, { useEffect, useState } from 'react';
import Card from './Card';
import { Link } from 'react-router';
import { translateCategoryToTurkish } from './utils/categoryTranslations';
 


export default function Category() {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/categories")
        .then(res => res.json())
        .then(data => {
            setCategories(data);
            setLoading(false);
        })
        .catch(error => {
            console.error('Error fetching categories:', error);
            setLoading(false);
        });
    }, []);

   

    if (loading) {
        return (
            <div className='container mx-auto mt-10 px-4'>
                <div className="flex items-center justify-center min-h-[400px]">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                </div>
            </div>
        );
    }

    return (
        <div className='container mx-auto mt-10 px-4'>
            {/* Header Section */}
            <div className="text-center mb-12">
                <h1 className='text-4xl font-bold text-gray-800 mb-4 nunito'>
                    Kategoriler
                </h1>
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Geniş ürün kategorilerimizi keşfedin ve ihtiyacınız olan her şeyi bulun
                </p>
            </div>

            {/* Categories Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16'>
                {categories.map((item) => (
                    <Link key={item} to={`/products/${encodeURIComponent(translateCategoryToTurkish(item))}`}>
                        <Card 
                            category={item}
                        />
                    </Link>
                ))}
            </div>

            {/* Additional Info Section */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4 nunito">
                    Popüler Kategoriler
                </h2>
                <p className="text-gray-600 mb-6">
                    En çok tercih edilen kategorilerimizde binlerce kaliteli ürün sizi bekliyor
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((item) => (
                        <Link 
                            key={`tag-${item}`}
                            to={`/products/${encodeURIComponent(translateCategoryToTurkish(item))}`}
                            className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer hover:bg-gray-50"
                        >
                            {translateCategoryToTurkish(item)}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}