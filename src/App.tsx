import BottleScene from './components/BottleScene'
import HeroText  from './components/HeroText'
import Navbar from './components/Navbar'
import TechSpecs from './components/TechSpecs'
import ProductConfig from './components/ProductConfig'

export default function App() {
  return (
    <main className="w-full bg-[#f0f2f5]">

         {/* Navbar */}
      <Navbar />

      {/* HERO SECTION */}
    
      <section className="w-full min-h-screen flex flex-col lg:flex-row mt-12">
        
        {/* Left: Text content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <p className="text-2xl font-bold"> <HeroText /> </p>
        </div>

        {/* Right: 3D Canvas */}
        <div className="w-full lg:w-1/2 h-[50vh] lg:min-h-screen">
          <BottleScene />
        </div>

      </section>

      {/* OTHER SECTIONS GO HERE */}
      <section className="w-full flex items-center justify-center">
        <TechSpecs />
        
      </section>

      <section className="w-full flex items-center justify-center ">
        <ProductConfig />
      </section>

    </main>
  )
}