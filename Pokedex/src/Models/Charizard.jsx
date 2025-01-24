import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Charizard(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Charizard.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <skinnedMesh
        geometry={nodes.Charizard_1.geometry}
        material={materials.Material__12}
        skeleton={nodes.Charizard_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Charizard_2.geometry}
        material={materials.Material__13}
        skeleton={nodes.Charizard_2.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Charizard_3.geometry}
        material={materials.Material__14}
        skeleton={nodes.Charizard_3.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Charizard_4.geometry}
        material={materials.Material__15}
        skeleton={nodes.Charizard_4.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Charizard_5.geometry}
        material={materials.Material__16}
        skeleton={nodes.Charizard_5.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Charizard.glb");
