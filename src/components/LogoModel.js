'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';

export default function LogoModel(props) {
  const ref = useRef();
  const { scene } = useGLTF('/models/logo.glb');

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.05; // Rotate around Y axis
      ref.current.rotation.x += delta * 0.05; // Rotate around Y axis
    }
  });

  return <primitive ref={ref} object={scene} {...props} />;
}
