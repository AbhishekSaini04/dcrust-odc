import React, { useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useTexture } from "@react-three/drei"
import * as THREE from "three"

function ThreeDLogoMesh() {
  const meshRef = useRef()
  const frameRef = useRef()
  const { pointer } = useThree()

  // Mouse tracking refs
  const mouse = useRef({ x: 0, y: 0, active: false })
  const targetRotation = useRef({ x: 0, y: 0 })
  const autoRotation = useRef({ x: 0, y: 0 })
  const idleAngle = useRef(0)

  // Load texture (Vite: use /assets/ path, not /src/assets/)
  const texture = useTexture("src/assets/images/odc-3d-without-bg.png")

  useFrame((state) => {
    if (!meshRef.current) return
    
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
    
    // Smoothly interpolate mesh rotation
    meshRef.current.rotation.x += (targetRotation.current.x - meshRef.current.rotation.x) * 0.08
    meshRef.current.rotation.y += (targetRotation.current.y - meshRef.current.rotation.y) * 0.08
    
    // Sync frame rotation with mesh
    if (frameRef.current) {
      frameRef.current.rotation.x = meshRef.current.rotation.x
      frameRef.current.rotation.y = meshRef.current.rotation.y
    }
  })

  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 4, 5]} intensity={0.7} />
      
      {/* 3D Frame (thin box behind the image) */}
      <mesh ref={frameRef} position={[0, 0, -0.06]} castShadow receiveShadow>
        <boxGeometry args={[2.5, 2.5, 0.12]} />
        <meshStandardMaterial color="#222" metalness={0.4} roughness={0.7} />
      </mesh>
      
      {/* 3D Logo Plane */}
      <mesh ref={meshRef} castShadow receiveShadow>
        <planeGeometry args={[2.5, 2.5]} />
        <meshStandardMaterial
          map={texture}
          transparent
          metalness={0.5}
          roughness={0.4}
        />
      </mesh>
    </>
  )
}
export default ThreeDLogoMesh