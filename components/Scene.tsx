
import React, { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

const Sphere: React.FC = () => {
    const meshRef = useRef<THREE.Mesh>(null!);
    const { viewport, mouse } = useThree();

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.1;
            meshRef.current.rotation.x += delta * 0.05;

            // Parallax effect
            const x = (mouse.x * viewport.width) / 20;
            const y = (mouse.y * viewport.height) / 20;
            meshRef.current.position.set(x, y, 0);
            meshRef.current.lookAt(0,0,10);
        }
    });

    return (
        <Icosahedron args={[2.5, 4]} ref={meshRef}>
            <meshStandardMaterial 
                color="#C0C0C0" 
                metalness={1} 
                roughness={0.1} 
            />
        </Icosahedron>
    );
};

const Scene: React.FC = () => {
    return (
        <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
            <ambientLight intensity={1.5} />
            <pointLight position={[10, 10, 10]} intensity={4.0} color="#007AFF" />
            <pointLight position={[-10, -10, 10]} intensity={3.0} color="#FF3B30" />
            <pointLight position={[0, 5, -10]} intensity={2.0} color="white" />
            <Sphere />
        </Canvas>
    );
};

export default Scene;
