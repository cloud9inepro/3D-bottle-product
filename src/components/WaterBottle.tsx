import { useGLTF, Html } from '@react-three/drei'
import { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import { useSpring } from '@react-spring/three'
import { motion } from 'framer-motion'


export default function WaterBottle() {
  const { scene, nodes } = useGLTF('/bottle.glb')
  console.log("glb", scene)
  const meshRef = useRef()




  const [springs, api] = useSpring(() => ({
  explode: 0,
  config: { tension: 60, friction: 30 }
}))
const [exploded, setExploded] = useState(false)


useFrame((state, delta) => {
  meshRef.current.rotation.y += delta * 0.5
  const explodeValue = springs.explode.get()
 

nodes['Cylinder_Thermos_0'].position.z = -1 * explodeValue  //botom of the bottle
nodes['Cylinder002_Thermos_0'].position.z = 1 * explodeValue // neck of the bottle
nodes['Cylinder004_Thermos_0'].position.z = 2 * explodeValue // main cover
nodes['Cylinder005_Thermos_0'].position.y = -2 * explodeValue // side cover
nodes['Cylinder005_Thermos_0'].position.z = 2 * explodeValue // side cover bottom
nodes['Cylinder019_Thermos_0'].position.z = 3 * explodeValue  //long thin piece on top
 nodes['Cube007_Thermos_0'].position.y = -1 * explodeValue  //small rectangular piece 
nodes['Cube005_Thermos_0'].position.y = 2 * explodeValue  // handle of the bottle
})

useEffect(() => {
  setTimeout(() => {
    api.start({ explode: 1 })
     setExploded(true)
  }, 1500)
}, [])


return (
  <>
  <group>
  <primitive object={scene} scale={0.00146} position={[0, 0, 0]} rotation={[0, 2, 0]} ref={meshRef} />
  </group>
    
    {/* label */}
    {exploded && ( 
      <Html position={[0.2, 0, 0]}>
          <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >  
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <div className="w-12 h-[1px] bg-gray-400" />
         
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-700 whitespace-nowrap">
          Tri-Layer Insulation
        </p>
      </div>
      </motion.div>
    </Html>
    )}  

     {/* label */}
    {exploded && (  
      <Html position={[0.2, 1, 0]}>
          <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >  
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-blue-600" />
          <div className="w-12 h-[1px] bg-gray-400" />
         
        <p className="text-xs font-semibold tracking-widest uppercase text-gray-700 whitespace-nowrap">
          Precision Lid Lock
        </p>
      </div>
      </motion.div>
    </Html>
 )}  
    
  </>
)
}   