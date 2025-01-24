import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NidoranF(props) {
  const { nodes, materials } = useGLTF("/NidoranF.glb");
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
      <skinnedMesh
        geometry={nodes.NidoranF_1.geometry}
        material={materials.Material__10}
        skeleton={nodes.NidoranF_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.NidoranF_2.geometry}
        material={materials.Material__11}
        skeleton={nodes.NidoranF_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/NidoranF.glb");
