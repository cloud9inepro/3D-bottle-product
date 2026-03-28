import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="w-full bg-white px-8 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-12"
      >
        <div className="flex flex-col gap-4">
  <span className="font-black text-sm tracking-widest uppercase">Liquid Precision</span>
  <p className="text-gray-500 text-sm leading-relaxed">
    Engineered for those who demand clarity and performance in every sip. Our mission is to eliminate single-use plastics through superior industrial design.
  </p>
</div>
<div className="flex flex-col gap-4">
  <p className="text-xs font-bold tracking-widest uppercase text-blue-600">Connect</p>
  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-widest uppercase">Instagram</a>
  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-widest uppercase">Twitter</a>
  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-widest uppercase">LinkedIn</a>
</div>
<div className="flex flex-col gap-4">
  <p className="text-xs font-bold tracking-widest uppercase text-blue-600">Support</p>
  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-widest uppercase">Privacy Policy</a>
  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-widest uppercase">Terms of Service</a>
  <a href="#" className="text-sm text-gray-500 hover:text-gray-900 transition-colors tracking-widest uppercase">Warranty</a>
</div>

<div className="flex flex-col gap-4">
  <p className="text-xs font-bold tracking-widest uppercase text-blue-600">Newsletter</p>
  <div className="flex gap-2">
    <input
      type="email"
      placeholder="Email Address"
      className="flex-1 bg-gray-100 rounded-xl px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-blue-600"
    />
    <button className="bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-colors">
      →
    </button>
  </div>
  <p className="text-gray-400 text-xs tracking-widest uppercase">
    © 2024 Liquid Precision. Engineered for Hydration.
  </p>
</div>
      </motion.div>
    </footer>
  )
}