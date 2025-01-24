import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sandshrew(props) {
  const { nodes, materials } = useGLTF("/Sandshrew.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sandshrew_1.geometry}
          material={materials["Material__35.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sandshrew_2.geometry}
          material={materials["Material__36.002"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
    </group>
  );
}

useGLTF.preload("/Sandshrew.glb");
