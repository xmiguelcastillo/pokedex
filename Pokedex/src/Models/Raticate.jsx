import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Raticate(props) {
  const { nodes, materials } = useGLTF("/Raticate.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Raticate_1.geometry}
          material={materials["Body00.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Raticate_2.geometry}
          material={materials["Eye.005"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Raticate.glb");
