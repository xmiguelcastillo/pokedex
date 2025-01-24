import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Alakazam(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Alakazam.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.214}>
        <primitive object={nodes.pm0042_00_golbat} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0060_00} />
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
      <primitive object={nodes._03_Waist} />
      <primitive object={nodes.pm0065_00_foodin} />
      <skinnedMesh
        geometry={nodes.AlakazamM_1.geometry}
        material={materials["Material__91.001"]}
        skeleton={nodes.AlakazamM_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.AlakazamM_2.geometry}
        material={materials.Material__92}
        skeleton={nodes.AlakazamM_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Alakazam.glb");
