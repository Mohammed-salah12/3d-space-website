import React, { Suspense } from "react";
import { useGLTF } from "@react-three/drei";

export function SpaceStation() {
  const { scene, error } = useGLTF("./models/space.gltf");

  // Handle loading errors
  if (error) {
    console.error("GLTF Model Loading Error: ", error);
    return null; // You might return an error message or a fallback UI here
  }

  return <primitive object={scene} scale={0.5} />;
}

// Preload the model outside the component to avoid reloading
useGLTF.preload("./models/space.gltf");
