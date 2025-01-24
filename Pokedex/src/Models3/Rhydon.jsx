import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rhydon(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Rhydon.glb`);
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes.pm0094_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0096_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0100_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0101_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.393}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RhydonM_1.geometry}
          material={materials.Material__63}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RhydonM_2.geometry}
          material={materials.Material__64}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.RhydonM_3.geometry}
          material={materials.Material__65}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Rhydon.glb");
