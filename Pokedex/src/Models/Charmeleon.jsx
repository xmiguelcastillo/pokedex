import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Charmeleon(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Charmeleon.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <skinnedMesh
        geometry={nodes.Charmeleon001.geometry}
        material={materials["Material__34.001"]}
        skeleton={nodes.Charmeleon001.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Charmeleon001_1.geometry}
        material={materials["Material__35.001"]}
        skeleton={nodes.Charmeleon001_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Charmeleon001_2.geometry}
        material={materials["Material__36.001"]}
        skeleton={nodes.Charmeleon001_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Charmeleon.glb");
