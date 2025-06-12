import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF, useScroll } from "@react-three/drei";
import * as THREE from "three";

const DroneModel = ({ activeSection }) => {
  const groupRef = useRef();
  const scroll = useScroll();
  const { viewport } = useThree();

  // Replace with your actual GLB model path
  const { scene } = useGLTF('/models/drone.glb');

  useFrame((state, delta) => {
    if (groupRef.current && scroll) {
      const scrollOffset = scroll.offset;
      groupRef.current.rotation.y = scrollOffset * Math.PI * 2;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.2;
      const targetScale = activeSection > 0 ? 1.2 : 1;
      groupRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.05);
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]}>
      {/* Replace this mesh with your GLB model */}
      <mesh>
        <boxGeometry args={[1, 0.3, 1]} />
        <meshStandardMaterial color="#1c9cf5" emissive="#1c9cf5" emissiveIntensity={0.2} />
      </mesh>
      {/* Propellers */}
      {[...Array(4)].map((_, i) => (
        <group key={i} position={[
          i % 2 === 0 ? -0.6 : 0.6,
          0.2,
          i < 2 ? -0.6 : 0.6
        ]}>
          <mesh>
            <cylinderGeometry args={[0.3, 0.3, 0.05, 8]} />
            <meshStandardMaterial color="#7f7c7c" transparent opacity={0.7} />
          </mesh>
        </group>
      ))}
      <pointLight position={[0, 0, 0]} color="#2ecc71" intensity={0.5} />
      <pointLight position={[0.5, 0, 0.5]} color="#f39c12" intensity={0.3} />
    </group>
  );
};

// If you have a GLB, uncomment:
// useGLTF.preload('/models/drone.glb');

export default DroneModel;
