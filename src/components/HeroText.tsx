import { motion } from 'framer-motion'

export default function HeroText() {
  return (
   
    <div className=" h-full flex flex-col justify-center px-12">
       <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
    >
      <span className="text-xs font-semibold tracking-widest uppercase border border-gray-300 rounded-full px-4 py-1 w-fit text-gray-500">
  Engineering Excellence
</span>
<h1 className="text-4xl md:text-7xl font-black mt-6 leading-tight">
  Structural <br />
  <span className="text-blue-600">Integrity.</span>
</h1>
<p className="text-gray-500 mt-6 text-sm md:text-lg md:leading-relaxed">
  Designed from the molecule up.  The Liquid Precision series features aerospace-grade materials fused with clinical hydration science.
</p>

<div className="flex gap-4 mt-8">
  <div className="bg-[#F3F3F4] rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm">
    <span className="text-2xl">❄️</span>
    <div>
      <p className="font-bold text-sm md:text-lg">72 Hours</p>
      <p className="text-gray-400 text-sm">Cold Retention</p>
    </div>
  </div>

  <div className="bg-[#F3F3F4] rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm">
    <span className="text-2xl">🔥</span>
    <div>
      <p className="font-bold text-sm md:text-lg">24 Hours</p>
      <p className="text-gray-400 text-sm">Heat Retention</p>
    </div>
  </div>
</div>
</motion.div>
    </div>
    
  )
}