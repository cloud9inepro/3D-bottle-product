import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import WaterBottle from './WaterBottle'
import { useIsMobile } from '../hooks/useIsMobile'

export default function BottleScene() {
  const isMobile = useIsMobile()

  return (
    <div className="w-full h-[50vh] lg:h-full bg-[#F3F3F4]">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        gl={{ antialias: true }}
      >

        <ambientLight intensity={0.5} />

        
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Environment — loads an HDR lighting map for realistic reflections */}
        <Environment preset="city" />

        
        <OrbitControls enableZoom={false} />

        {/* The water bottle model */}
        <WaterBottle />
       
      </Canvas>
    </div>
  )
}