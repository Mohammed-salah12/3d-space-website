import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  FirstPersonControls,
  Stars,
  Html,
  OrbitControls,
} from "@react-three/drei";
import { SpaceStation } from "./components/SpaceStation";

function App() {
  return (
    <div style={{ height: "100vh", background: "#000" }}>
      <Canvas
        camera={{ position: [0, 2, 10], fov: 60 }} // Position camera at eye level, facing forward
      >
        <ambientLight intensity={0.5} />
        <Suspense
          fallback={
            <Html>
              <span style={{ color: "white" }}>Loading...</span>
            </Html>
          }
        >
          <SpaceStation />
        </Suspense>
        <OrbitControls enableZoom={true} />
        <Stars />
      </Canvas>
    </div>
  );
}

export default App;
