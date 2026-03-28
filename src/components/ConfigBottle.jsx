import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

function BottleMesh({ color, scale }) {
  const { scene } = useGLTF('/bottle-small.glb')
  const meshRef = useRef()

  useEffect(() => {
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.color.set(color)
    }
  })
}, [color, scene])

  useFrame((state, delta) => {
    meshRef.current.rotation.y += delta * 0.5
  })

  return (
    <primitive 
      ref={meshRef} 
      object={scene} 
      scale={scale} 
      position={[0, 0, 0]} 
    />
  )
}

export default function ConfigBottle({ color, scale }) {
  return (
    <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <Environment preset="city" />
      <OrbitControls enableZoom={false} />
      <BottleMesh color={color} scale={scale}  />
    </Canvas>
  )
}