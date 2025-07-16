import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const FloatingCube = ({ position, color, scale = [1, 1, 1], rotationSpeed = 0.01 }: {
  position: [number, number, number];
  color: string;
  scale?: [number, number, number];
  rotationSpeed?: number;
}) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += rotationSpeed;
      meshRef.current.rotation.y += rotationSpeed * 0.7;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef} position={position} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const FloatingSphere = ({ position, color, scale = 1 }: {
  position: [number, number, number];
  color: string;
  scale?: number;
}) => {
  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
      <mesh position={position} scale={scale}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </Float>
  );
};

const Scene3D = () => {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        {/* Isometric-style cubes */}
        <FloatingCube 
          position={[2, 1, 0]} 
          color="#8B5CF6" 
          scale={[1.2, 1.2, 1.2]} 
          rotationSpeed={0.005}
        />
        <FloatingCube 
          position={[-1.5, -0.5, 1]} 
          color="#F59E0B" 
          scale={[0.8, 0.8, 0.8]} 
          rotationSpeed={0.008}
        />
        <FloatingCube 
          position={[1, -1.5, -0.5]} 
          color="#10B981" 
          scale={[1, 1, 1]} 
          rotationSpeed={0.006}
        />
        <FloatingCube 
          position={[-2, 1.5, -1]} 
          color="#EF4444" 
          scale={[0.6, 0.6, 0.6]} 
          rotationSpeed={0.01}
        />

        {/* Floating spheres */}
        <FloatingSphere position={[3, -1, 1]} color="#EC4899" scale={0.8} />
        <FloatingSphere position={[-2.5, -1, 0.5]} color="#06B6D4" scale={0.6} />
        <FloatingSphere position={[0, 2, -1]} color="#F97316" scale={0.4} />

        {/* More geometric shapes */}
        <Float speed={1.8} rotationIntensity={0.3} floatIntensity={0.6}>
          <mesh position={[-3, 0, 0]}>
            <cylinderGeometry args={[0.3, 0.3, 1.5, 8]} />
            <meshStandardMaterial color="#6366F1" />
          </mesh>
        </Float>

        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;