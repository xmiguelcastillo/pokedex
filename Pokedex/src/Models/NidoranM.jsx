import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function NidoranM(props) {
  const { nodes, materials } = useGLTF("/NidoranM.glb");
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
      <primitive object={nodes.pm0031_00} />
      <primitive object={nodes.pm0032_00} />
      <skinnedMesh
        geometry={nodes.NidoranM_1.geometry}
        material={materials.Material__139}
        skeleton={nodes.NidoranM_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.NidoranM_2.geometry}
        material={materials.Material__140}
        skeleton={nodes.NidoranM_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/NidoranM.glb");
