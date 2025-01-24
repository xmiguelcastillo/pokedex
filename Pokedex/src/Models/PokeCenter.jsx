import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function PokeCenter(props) {
  const { nodes, materials } = useGLTF("/PokeCenter.glb");
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
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_0_polySurface22.geometry}
        material={materials.pokecen01_mat_001_001}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_1_polySurface22.geometry}
        material={materials.pc_out_mado1_mat_001_001}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_2_polySurface22.geometry}
        material={materials.pcen_shadow_mat_001_001}
        rotation={[Math.PI / 2, 0, Math.PI]}
      />
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
    </group>
  );
}

useGLTF.preload("/PokeCenter.glb");
