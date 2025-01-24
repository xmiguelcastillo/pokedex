import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Nidoking(props) {
  const { nodes, materials } = useGLTF("/Nidoking.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.457}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nidoking_1.geometry}
          material={materials.Material__164}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nidoking_2.geometry}
          material={materials.Material__165}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Nidoking_3.geometry}
          material={materials.Material__166}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
      <primitive object={nodes.pm0029_00} />
      <primitive object={nodes.pm0030_00} />
      <primitive object={nodes.pm0031_00} />
      <primitive object={nodes.pm0032_00} />
      <primitive object={nodes.pm0033_00} />
    </group>
  );
}

useGLTF.preload("/Nidoking.glb");
