import { useState } from 'react'
import ConfigBottle from './ConfigBottle'


const COLORS = [
    { hex: '#33B1A4', name: 'Teal' },
    { hex: '#33386C', name: 'Navy' },
    { hex: '#FF56A0', name: 'Pink' },
    { hex: '#3EE3E3', name: 'Cyan' },
]

export default function ProductConfig() {
    const [activeColor, setActiveColor] = useState(COLORS[0])
    const [activeSize, setActiveSize] = useState('500ml')

    return (
        <section className="w-full px-8 py-14 bg-[#f0f2f5]">
            <div
                className="rounded-3xl p-8 flex flex-col md:flex-row gap-8 transition-colors duration-700"
                style={{ backgroundColor: activeColor.hex + '22' }}
            >
                {/* left side glb canvas */}
               <div className="w-full md:w-1/2 rounded-2xl min-h-[100px] overflow-hidden">
  <ConfigBottle 
  color={activeColor.hex} 
  scale={
    activeSize === '500ml' ? 0.00146 :
    activeSize === '750ml' ? 0.00180 :
    0.00220
  } 
/>
</div>

                {/* right side config */}
                <div className="w-full md:w-1/2 flex flex-col justify-center gap-6">
                    <div>
                        <h2 className="md:text-4xl md:text-block text-2xl text-center font-black">Your Hydration,<br />Tailored.</h2>
                        <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                            Customize every aspect from capacity to finish. Choose from our signature matte obsidian or the refractive crystalline finish.
                        </p>
                        {/* capcity */}
                        <div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3 mt-3">Capacity</p>
                            <div className="flex gap-3">
                                {['500ml', '750ml', '1000ml'].map(size => (
                                    <button
                                        key={size}
                                        onClick={() => setActiveSize(size)}
                                        className={`px-5 py-2 rounded-full text-sm font-medium border transition-all duration-300 ${activeSize === size
                                                ? 'border-transparent text-white'
                                                : 'border-gray-300 text-gray-600 bg-white'
                                            }`}
                                        style={activeSize === size ? { backgroundColor: activeColor.hex } : {}}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* color */}
                        <div>
                            <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 mb-3 mt-3">Finish</p>
                            <div className="flex gap-3">
                                {COLORS.map(color => (
                                    <button
                                        key={color.hex}
                                        onClick={() => setActiveColor(color)}
                                        className={`w-10 h-10 rounded-2xl transition-all duration-300 ${activeColor.hex === color.hex
                                                ? 'ring-2 ring-offset-2 scale-110'
                                                : ''
                                            }`}
                                        style={{
                                            backgroundColor: color.hex,
                                            ringColor: color.hex
                                        }}
                                    />
                                ))}
                            </div>
                        </div>
                        <button
                            className="w-full py-4 mt-3 rounded-2xl text-white font-semibold text-sm tracking-wide transition-all duration-300 flex items-center justify-center gap-2"
                            style={{ backgroundColor: activeColor.hex }}
                        >
                            Start Configuration →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}