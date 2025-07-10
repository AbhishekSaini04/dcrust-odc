import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

function ThreeDLogoMesh() {
  const meshRef = useRef()
  const groupRef = useRef()
  const { pointer } = useThree()

  // Mouse tracking refs
  const mouse = useRef({ x: 0, y: 0, active: false })
  const targetRotation = useRef({ x: 0, y: 0 })
  const autoRotation = useRef({ x: 0, y: 0 })
  const idleAngle = useRef(0)

  // Load texture (Vite: use /assets/ path, not /src/assets/)
  const texture = useTexture("src/assets/images/odc-3d-without-bg.png")

  useFrame((state) => {
    if (!groupRef.current) return
    
    // Auto-rotation on own axis
    autoRotation.current.y += 0.005
    
    // Idle animation for subtle floating effect
    idleAngle.current += 0.008
    const floatOffset = Math.sin(idleAngle.current) * 0.06
    
    // Mouse interaction - check if mouse is over the canvas
    const isHovering = Math.abs(pointer.x) < 1 && Math.abs(pointer.y) < 1
    
    if (isHovering) {
      mouse.current.active = true
      mouse.current.x += (pointer.x - mouse.current.x) * 0.1
      mouse.current.y += (pointer.y - mouse.current.y) * 0.1
      targetRotation.current.x = mouse.current.y * 0.3 + floatOffset
      targetRotation.current.y = autoRotation.current.y + mouse.current.x * 0.3
    } else {
      mouse.current.active = false
      mouse.current.x *= 0.95
      mouse.current.y *= 0.95
      targetRotation.current.x = floatOffset
      targetRotation.current.y = autoRotation.current.y
    }
    
    // Apply rotation to group
    groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.08
    groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.08
  })

  return (
    <>
      {/* Better lighting setup */}
      <ambientLight intensity={0.4} />
      <directionalLight position={[3, 3, 5]} intensity={0.8} castShadow />
      <directionalLight position={[-2, 2, 3]} intensity={0.3} />
      <pointLight position={[0, 0, 3]} intensity={0.4} />
      
      <group ref={groupRef}>
        {/* Main logo plane with texture */}
        <mesh ref={meshRef} castShadow receiveShadow>
          <planeGeometry args={[2.5, 2.5]} />
          <meshStandardMaterial
            map={texture}
            transparent
            alphaTest={0.1}
            side={THREE.DoubleSide}
          />
        </mesh>
        
        {/* Create 3D depth with multiple layers */}
        {Array.from({ length: 8 }).map((_, i) => {
          const depth = -0.02 * (i + 1)
          const scale = 1 - (i * 0.01)
          const opacity = 0.8 - (i * 0.1)
          
          return (
            <mesh key={i} position={[0, 0, depth]} scale={[scale, scale, 1]} castShadow>
              <planeGeometry args={[2.5, 2.5]} />
              <meshStandardMaterial
                map={texture}
                transparent
                opacity={opacity}
                alphaTest={0.1}
                side={THREE.DoubleSide}
              />
            </mesh>
          )
        })}
        
        {/* Back solid layer */}
        <mesh position={[0, 0, -0.18]} castShadow receiveShadow>
          <planeGeometry args={[2.5, 2.5]} />
          <meshStandardMaterial
            color="#2a2a2a"
            metalness={0.3}
            roughness={0.8}
          />
        </mesh>
        
        {/* Subtle frame border */}
        <mesh position={[0, 0, -0.2]} castShadow receiveShadow>
          <ringGeometry args={[1.3, 1.35, 32]} />
          <meshStandardMaterial
            color="#404040"
            metalness={0.6}
            roughness={0.4}
          />
        </mesh>
        
        {/* Add subtle edge highlighting */}
        <mesh position={[0, 0, 0.02]} scale={[1.02, 1.02, 1]}>
          <planeGeometry args={[2.5, 2.5]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.08}
            side={THREE.BackSide}
          />
        </mesh>
      </group>
    </>
  )
}

export default ThreeDLogoMesh