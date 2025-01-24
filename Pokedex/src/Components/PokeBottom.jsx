import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import { PokeBall } from "../Models/PokeBall";

export default function PokeBottom() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-transparent z-50 flex flex-row justify-center items-center">
      <div className="w-2/6 text-center flex justify-center items-center h-10"></div>
      <div className="w-3/6">
        <Link to="/" className="flex flex-col items-center">
          <Canvas shadows camera={{ position: [150, -15, 1] }}>
            <Environment preset="city" />
            <PokeBall
              scale={[9, 9, 9]}
              position={[60, -22, 0]}
              rotation={[0, -Math.PI / 2, 0]}
              castShadow
              receiveShadow
            />
            <OrbitControls enableZoom={true} autoRotate={false} />
          </Canvas>
        </Link>
      </div>
      <div className="w-2/6 text-center flex justify-center items-center h-10"></div>
    </div>
  );
}
