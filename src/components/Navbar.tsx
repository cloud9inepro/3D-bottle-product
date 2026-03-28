import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { TiShoppingCart } from "react-icons/ti";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-5 bg-white shadow-md">
        <span className="font-black text-sm tracking-widest uppercase">
          Liquid Precision
        </span>
        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-0.5">Technology</a>
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Collections</a>
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Sustainability</a>
          <a href="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Journal</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
  <button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-2xl text-gray-700">
    <TiShoppingCart />
  </button>
  <button className="bg-blue-600 text-white text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-blue-700 transition-colors">
    Shop Now
  </button>
</div>

        <button 
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gray-900 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed top-0 right-0 h-full w-3/4 bg-white z-40 flex flex-col justify-center px-8 gap-8 md:hidden shadow-2xl"
          >
            <a href="#" className="text-2xl font-bold text-blue-600">Technology</a>
            <a href="#" className="text-2xl font-bold text-gray-500">Collections</a>
            <a href="#" className="text-2xl font-bold text-gray-500">Sustainability</a>
            <a href="#" className="text-2xl font-bold text-gray-500">Journal</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}