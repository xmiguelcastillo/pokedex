import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Nidorina(props) {
  const { nodes, materials } = useGLTF("/Nidorina.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
      <primitive object={nodes.pm0029_00} />
      <primitive object={nodes.pm0030_00} />
      <skinnedMesh
        geometry={nodes.Nidorina_1.geometry}
        material={materials["Material__10.001"]}
        skeleton={nodes.Nidorina_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Nidorina_2.geometry}
        material={materials["Material__11.001"]}
        skeleton={nodes.Nidorina_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Nidorina.glb");
