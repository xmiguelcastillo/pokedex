import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Haunter(props) {
  const { nodes, materials } = useGLTF("/Haunter.glb");
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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.404}>
        <primitive object={nodes.pm0088_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.366}>
        <primitive object={nodes.pm0089_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.346}>
        <skinnedMesh
          geometry={nodes.vsn_mesh_8_Body_Mask.geometry}
          material={materials.Body_Mask_mat}
          skeleton={nodes.vsn_mesh_8_Body_Mask.skeleton}
        />
        <primitive object={nodes.pm0093_00} />
        <skinnedMesh
          geometry={nodes.mesh_2_Body00.geometry}
          material={materials.Body00_mat}
          skeleton={nodes.mesh_2_Body00.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_2_Body00_1.geometry}
          material={materials["Eye_mat.001"]}
          skeleton={nodes.mesh_2_Body00_1.skeleton}
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
      <primitive object={nodes._03_Waist} />
      <primitive object={nodes.pm0065_00_foodin} />
      <primitive object={nodes.pm0066_00} />
      <primitive object={nodes.pm0067_00} />
      <primitive object={nodes.pm0068_00} />
      <primitive object={nodes.pm0070_00} />
      <primitive object={nodes.pm0079_00} />
      <primitive object={nodes.pm0080_00} />
      <primitive object={nodes.pm0081_00} />
    </group>
  );
}

useGLTF.preload("/Haunter.glb");
