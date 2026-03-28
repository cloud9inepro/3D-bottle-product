import { motion } from 'framer-motion'

export default function TechSpecs() {
  return (
    <section className="w-full bg-[#f0f2f5] px-8 ">
      <h2 className="text-3xl text-center font-black">Technical Specifications</h2>
      <p className="text-gray-500 mt-2 text-center">Deep dive into the architecture of hydration.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">

        <motion.div
  initial={{ opacity: 0, y: -50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="bg-white rounded-3xl p-8 md:col-span-1 flex flex-col justify-end min-h-[300px]"
>
  <span className="text-3xl mb-4">🛡️</span>
  <h3 className="text-2xl font-black">Titanium Alloy Base</h3>
  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
    Reinforced bottom structure designed to withstand impacts from heights up to 10 meters without compromising vacuum integrity.
  </p>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.1 }}
  className="bg-white rounded-3xl p-8 md:col-span-2 flex flex-col justify-end min-h-[300px]"
>
  <h3 className="text-xl font-black">Bio-Safe Seal</h3>
  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
    Proprietary medical-grade silicone ensuring zero leakage and bacterial resistance over lifetime use.
  </p>
</motion.div>

<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.2 }}
  className="bg-gradient-to-br from-gray-400 to-gray-700 rounded-3xl md:col-span-2 min-h-[250px]"
/>


<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="bg-white rounded-3xl p-8 flex flex-col justify-end min-h-[250px]"
>
  <span className="text-3xl mb-4">🌿</span>
  <h3 className="text-xl font-black">100% Recyclable</h3>
  <p className="text-gray-500 mt-2 text-sm leading-relaxed">
    Crafted from circular-economy grade aluminum and glass components.
  </p>
</motion.div>


<motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="bg-blue-600 rounded-3xl p-8  md:col-span-3 flex flex-col justify-end min-h-[250px]"
>
  <span className="text-3xl mb-4">💧</span>
  <h3 className="text-xl font-black text-white">Fast-Flow Tech</h3>
  <p className="text-white/70 mt-2 text-sm leading-relaxed">
    Internally optimized aerodynamics for a smooth, effortless drinking experience.
  </p>
</motion.div>
</div>
    </section>
  )
}