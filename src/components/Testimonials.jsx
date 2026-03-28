import { motion } from 'framer-motion'

const TESTIMONIALS = [
  {
    initials: 'JD',
    name: 'James Dalton',
    title: 'Mechanical Engineer',
    quote: 'The insulation performance is unmatched. I left it in a hot car for 8 hours and the water was still ice cold. Truly precision engineered.',
  },
  {
    initials: 'SR',
    name: 'Sarah Reed',
    title: 'Product Designer',
    quote: "Minimalist aesthetic meets industrial strength. It's not just a bottle, it's a piece of gear that feels like it will last a lifetime.",
  },
  {
    initials: 'MK',
    name: 'Marcus Knight',
    title: 'Outdoor Professional',
    quote: "I've used every high-end brand out there. Liquid Precision is the only one that feels truly premium in the hand and actually delivers on its promises.",
  },
]

export default function Testimonials() {
  return (
    <section className="w-full px-8 pb-14 bg-[#f0f2f5]">
      <h2 className="text-3xl  font-black text-center">Expert Consensus</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
  {TESTIMONIALS.map((t, i) => (
    <motion.div
      key={t.name}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: i * 0.15 }}
      className="bg-white rounded-3xl p-8 flex flex-col gap-6"
    >
      {/* Stars */}
      <div className="flex gap-1 text-blue-600 text-xl">
        {'★★★★★'.split('').map((star, j) => (
          <span key={j}>{star}</span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-gray-600 text-sm leading-relaxed italic">
        "{t.quote}"
      </p>

      {/* Reviewer */}
      <div className="flex items-center gap-3 mt-auto">
        <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold">
          {t.initials}
        </div>
        <div>
          <p className="font-bold text-sm">{t.name}</p>
          <p className="text-gray-400 text-xs">{t.title}</p>
        </div>
      </div>
    </motion.div>
  ))}
</div>
    </section>
  )
}