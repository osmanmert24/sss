import React from 'react';
import { 
    FaShirtsinbulk, 
    FaGem, 
    FaLaptop, 
    FaTshirt 
} from 'react-icons/fa';

// Kategori ikonları ve gradient renkleri
const categoryConfig = {
    "electronics": {
        icon: FaLaptop,
        gradient: "from-blue-500 to-purple-600",
        hoverGradient: "from-blue-600 to-purple-700",
        bgColor: "bg-blue-50",
        iconColor: "text-blue-600"
    },
    "jewelery": {
        icon: FaGem,
        gradient: "from-pink-500 to-rose-600",
        hoverGradient: "from-pink-600 to-rose-700",
        bgColor: "bg-pink-50",
        iconColor: "text-pink-600"
    },
    "men's clothing": {
        icon: FaTshirt,
        gradient: "from-green-500 to-teal-600",
        hoverGradient: "from-green-600 to-teal-700",
        bgColor: "bg-green-50",
        iconColor: "text-green-600"
    },
    "women's clothing": {
        icon: FaShirtsinbulk,
        gradient: "from-purple-500 to-indigo-600",
        hoverGradient: "from-purple-600 to-indigo-700",
        bgColor: "bg-purple-50",
        iconColor: "text-purple-600"
    }
};

export default function Card({ category, onClick }) {
    const config = categoryConfig[category] || categoryConfig["electronics"];
    const IconComponent = config.icon;

    return (
        <div 
            onClick={() => onClick && onClick(category)}
            className="group cursor-pointer transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
        >
            {/* Ana Card Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100">
                
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${config.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-8 text-center">
                    
                    {/* Icon Container */}
                    <div className={`mx-auto w-20 h-20 ${config.bgColor} rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <IconComponent className={`text-3xl ${config.iconColor}`} />
                    </div>
                    
                    {/* Category Title */}
                    <h3 className="text-xl font-bold text-gray-800 mb-3 capitalize group-hover:text-gray-900 transition-colors duration-300 nunito">
                        {category}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                        Discover amazing products in {category} category
                    </p>
                    
                    {/* Explore Button */}
                    <div className={`inline-flex items-center px-6 py-3 bg-gradient-to-r ${config.gradient} group-hover:bg-gradient-to-r group-hover:${config.hoverGradient} text-white rounded-full font-semibold text-sm transition-all duration-300 shadow-md hover:shadow-lg`}>
                        <span>Şimdi Keşfet</span>
                        <svg 
                            className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors duration-300"></div>
                <div className="absolute top-4 right-8 w-1 h-1 bg-gray-200 rounded-full group-hover:bg-gray-300 transition-colors duration-300"></div>
                
                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${config.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
            </div>
        </div>
    );
}