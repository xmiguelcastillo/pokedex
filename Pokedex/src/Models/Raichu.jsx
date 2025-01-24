import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Raichu(props) {
  const { nodes, materials } = useGLTF("/Raichu.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
      <primitive object={nodes.neutral_bone} />
      <skinnedMesh
        geometry={nodes.RaichuM_1.geometry}
        material={materials.Material__146}
        skeleton={nodes.RaichuM_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.RaichuM_2.geometry}
        material={materials.Material__147}
        skeleton={nodes.RaichuM_2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.RaichuM_3.geometry}
        material={materials.Material__148}
        skeleton={nodes.RaichuM_3.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Raichu.glb");
