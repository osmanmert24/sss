import { NavLink } from "react-router"
import { MdOutlineLightMode, MdOutlineDarkMode, MdSearch } from "react-icons/md";
import { useState } from "react";
import { MdOutlineLogin } from "react-icons/md";

export default function Header() {


    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    }

  return (
    <div className="flex  sticky top-0 z-50 justify-center items-center bg-white ">
      <div className="flex border-slate-200 border w-full justify-between items-center  shadow-2xl  py-2   ">


        <div className="flex gap-12  ml-16  ">
       <NavLink className="hover:text-purple-500 transition-all duration-300 nunito rounded-lg px-2 py-2" to="/">Anasayfa</NavLink>
       <NavLink className="hover:text-purple-500 transition-all duration-300 nunito rounded-lg px-2 py-2" to="/category">Kategoriler</NavLink>
       <NavLink className="hover:text-purple-500 transition-all duration-300 nunito rounded-lg px-2 py-2" to="/contact">İletişim</NavLink>
       <NavLink className="hover:text-purple-500 transition-all duration-300 nunito rounded-lg px-2 py-2" to="/about">Şubelerimiz</NavLink>
       </div>
       


       <div className="relative right-55">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MdSearch className="h-5 w-5 text-slate-400" />
        </div>
        <input 
          type="text" 
          placeholder="Ürünlerde ara..." 
          className="border-2 border-slate-200 rounded-xl pl-10 pr-4 py-3 w-[500px] focus:border-purple-500 focus:ring-2 focus:ring-purple-200 focus:outline-none transition-all duration-300 hover:border-slate-300 text-slate-700 placeholder-slate-400" 
        />
       </div>

       <div className="flex mr-10">
        <NavLink className="hover:text-purple-500 transition-all duration-300  nunito flex gap-2 items-center rounded-lg px-2 py-2" to="/auth/login">Giriş Yap
          <MdOutlineLogin className="text-xl" /></NavLink>


          <button onClick={toggleDarkMode}  className="transition-all hover:-translate-y-1 duration-300 hover:text-purple-500  text-lg   nunito  p-4">
        {isDarkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
        </button>
          </div>


       



        </div>

    </div>
  )
}