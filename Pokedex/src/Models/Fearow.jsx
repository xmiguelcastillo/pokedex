import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Fearow(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Fearow.glb`);
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.796}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fearow_1.geometry}
          material={materials.BodyA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fearow_2.geometry}
          material={materials["BodyB.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Fearow_3.geometry}
          material={materials["Eye.007"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Fearow.glb");
