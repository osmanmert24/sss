import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Slider1 from '../assets/slider1.png'
import Slider2 from '../assets/slider2.png'
import Slider3 from '../assets/slider3.png'
import Slider4 from '../assets/slider4.png'

export default function Slider() {
    const slides = [
        { id: 1, image: Slider1, alt: "Kampanya 1" },
        { id: 2, image: Slider2, alt: "Kampanya 2" },
        { id: 3, image: Slider3, alt: "Kampanya 3" },
        { id: 4, image: Slider4, alt: "Kampanya 4" }
    ]

    const [currentSlide, setCurrentSlide] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isHovered, setIsHovered] = useState(false)

    // Auto-play functionality
    useEffect(() => {
        if (!isPlaying || isHovered) return

        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length)
        }, 4000)

        return () => clearInterval(interval)
    }, [isPlaying, isHovered, slides.length])

    const goToSlide = (index) => {
        setCurrentSlide(index)
    }

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    }

    const goToNext = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length)
    }

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying)
    }

    return (
        <div className='container mx-auto px-4 py-8'>
            <div 
                className='relative w-full max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden group'
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Main Slider Container */}
                <div className='relative h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden'>
                    
                    {/* Slides */}
                    <div 
                        className='flex transition-transform duration-700 ease-in-out h-full'
                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                    >
                        {slides.map((slide, index) => (
                            <div key={slide.id} className='min-w-full h-full relative'>
                                <img 
                                    src={slide.image} 
                                    alt={slide.alt}
                                    className='w-full h-full object-cover'
                                />
                                {/* Gradient Overlay */}
                                <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent'></div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className='absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm'
                        aria-label="Önceki slide"
                    >
                        <ChevronLeft size={24} />
                    </button>

                    <button
                        onClick={goToNext}
                        className='absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110 backdrop-blur-sm'
                        aria-label="Sonraki slide"
                    >
                        <ChevronRight size={24} />
                    </button>

                    {/* Play/Pause Button */}
                    <button
                        onClick={togglePlayPause}
                        className='absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 backdrop-blur-sm'
                        aria-label={isPlaying ? "Durdur" : "Oynat"}
                    >
                        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
                    </button>

                    {/* Slide Counter */}
                    <div className='absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm'>
                        {currentSlide + 1} / {slides.length}
                    </div>
                </div>

                {/* Dots Indicators */}
                <div className='absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3'>
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                currentSlide === index
                                    ? 'bg-white scale-125 shadow-lg'
                                    : 'bg-white/50 hover:bg-white/75'
                            }`}
                            aria-label={`${index + 1}. slide'a git`}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className='absolute bottom-0 left-0 w-full h-1 bg-white/20'>
                    <div 
                        className='h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300'
                        style={{ 
                            width: `${((currentSlide + 1) / slides.length) * 100}%` 
                        }}
                    />
                </div>
            </div>

            {/* Thumbnail Preview (Optional) */}
            <div className='flex justify-center mt-6 space-x-3 max-w-2xl mx-auto'>
                {slides.map((slide, index) => (
                    <button
                        key={slide.id}
                        onClick={() => goToSlide(index)}
                        className={`relative w-20 h-12 rounded-lg overflow-hidden transition-all duration-300 ${
                            currentSlide === index
                                ? 'ring-3 ring-blue-500 ring-offset-2 scale-105'
                                : 'opacity-60 hover:opacity-100'
                        }`}
                    >
                        <img 
                            src={slide.image} 
                            alt={slide.alt}
                            className='w-full h-full object-cover'
                        />
                    </button>
                ))}
            </div>
        </div>
    )
}