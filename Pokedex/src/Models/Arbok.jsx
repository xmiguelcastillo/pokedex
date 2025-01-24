import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Arbok(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Arbok.glb`);
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.447}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arbok_1.geometry}
          material={materials["Eye.008"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arbok_2.geometry}
          material={materials["BodyA.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arbok_3.geometry}
          material={materials["BodyB.002"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
    </group>
  );
}

useGLTF.preload("/Arbok.glb");
