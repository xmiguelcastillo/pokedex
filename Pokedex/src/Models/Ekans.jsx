import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ekans(props) {
  const { nodes, materials } = useGLTF("/Ekans.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.656}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ekans_1.geometry}
          material={materials.Material__22}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ekans_2.geometry}
          material={materials.Material__23}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Ekans.glb");
