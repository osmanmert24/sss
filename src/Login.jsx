import React, { useState } from 'react'
import { 
    FaUser, 
    FaLock, 
    FaEye, 
    FaEyeSlash, 
    FaGoogle, 
    FaFacebook, 
    FaApple,
    FaArrowRight 
} from 'react-icons/fa'
import { Link } from 'react-router'

export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        
        // Simulate API call
        setTimeout(() => {
            setIsLoading(false);
            console.log('Login submitted:', formData);
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            {/* Background Decorations */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-32 w-96 h-96 bg-black rounded-full opacity-5 blur-3xl"></div>
                <div className="absolute -bottom-40 -left-32 w-96 h-96 bg-gray-800 rounded-full opacity-5 blur-3xl"></div>
            </div>

            <div className="relative max-w-md w-full space-y-8">
                {/* Header */}
                <div className="text-center">
                    <div className="mx-auto w-16 h-16 bg-black rounded-2xl flex items-center justify-center mb-4 shadow-2xl">
                        <FaUser className="text-white text-xl" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 nunito">
                        Hoş Geldiniz
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Hesabınıza giriş yapın
                    </p>
                </div>

                {/* Main Login Card */}
                <div className="bg-white backdrop-blur-lg rounded-2xl shadow-2xl border border-slate-200 p-8">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2 nunito">
                                E-posta Adresi
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaUser className="text-gray-500 text-sm" />
                                </div>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white nunito"
                                    placeholder="ornek@email.com"
                                />
                            </div>
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2 nunito">
                                Şifre
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <FaLock className="text-gray-500 text-sm" />
                                </div>
                                <input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="current-password"
                                    required
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="block w-full pl-10 pr-10 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 bg-white nunito"
                                    placeholder="••••••••"
                                />
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="text-gray-500 hover:text-black transition-colors duration-200"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-black focus:ring-black border-slate-200 rounded"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 nunito">
                                    Beni hatırla
                                </label>
                            </div>
                            <div className="text-sm">
                                <a href="#" className="font-medium text-black hover:text-gray-700 transition-colors duration-200 nunito">
                                    Şifremi unuttum
                                </a>
                            </div>
                        </div>

                        {/* Login Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-xl text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 shadow-2xl hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed nunito"
                            >
                                {isLoading ? (
                                    <div className="flex items-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Giriş yapılıyor...
                                    </div>
                                ) : (
                                    <div className="flex items-center">
                                        <span>Giriş Yap</span>
                                        <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-200" />
                                    </div>
                                )}
                            </button>
                        </div>
                    </form>

                    {/* Divider */}
                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-slate-200"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500 nunito">veya</span>
                            </div>
                        </div>
                    </div>

                    {/* Social Login */}
                    <div className="mt-6 grid grid-cols-3 gap-3">
                        <button className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-105">
                            <FaGoogle className="text-red-500" />
                        </button>
                        <button className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-105">
                            <FaFacebook className="text-blue-600" />
                        </button>
                        <button className="w-full inline-flex justify-center py-3 px-4 border border-slate-200 rounded-xl shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 hover:scale-105">
                            <FaApple className="text-gray-900" />
                        </button>
                    </div>
                </div>

                {/* Sign Up Link */}
                <div className="text-center">
                    <p className="text-sm text-gray-600 nunito">
                        Hesabınız yok mu?{' '}
                        <Link to="/auth/register" className="font-medium text-black hover:text-gray-700 transition-colors duration-200">
                            Hemen kayıt olun
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}   