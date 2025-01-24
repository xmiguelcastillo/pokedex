import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pidgeot(props) {
  const { nodes, materials } = useGLTF("/Pidgeot.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.672}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pidgeot_1.geometry}
          material={materials["Eye.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pidgeot_2.geometry}
          material={materials["BodyA00.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pidgeot_3.geometry}
          material={materials["BodyB01.001"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Pidgeot.glb");
