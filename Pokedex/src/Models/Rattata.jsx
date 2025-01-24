import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rattata(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Rattata.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={1.505}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rattata_1.geometry}
          material={materials["Body00.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rattata_2.geometry}
          material={materials["Eye.004"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Rattata.glb");
