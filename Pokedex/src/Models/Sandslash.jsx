import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Sandslash(props) {
  const { nodes, materials } = useGLTF("/Sandslash.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.528}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sandslash_1.geometry}
          material={materials["Material__58.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sandslash_2.geometry}
          material={materials["Material__59.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sandslash_3.geometry}
          material={materials["Material__60.002"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
    </group>
  );
}

useGLTF.preload("/Sandslash.glb");
