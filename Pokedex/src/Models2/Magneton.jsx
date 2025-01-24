import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Magneton(props) {
  const { nodes, materials } = useGLTF("/Magneton.glb");
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
      <group rotation={[Math.PI, 0, Math.PI]}>
        <skinnedMesh
          geometry={nodes.vsn_mesh_0_pm0082_00_BodyASkin.geometry}
          material={materials.Eye00_mat}
          skeleton={nodes.vsn_mesh_0_pm0082_00_BodyASkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_10_pm0082_00_BodyBSkin.geometry}
          material={materials.BodyDesukarn01_mat}
          skeleton={nodes.vsn_mesh_10_pm0082_00_BodyBSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_11_pm0082_00_BodyBSkin.geometry}
          material={materials.Body_mat}
          skeleton={nodes.vsn_mesh_11_pm0082_00_BodyBSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_12_pm0082_00_BodyCSkin.geometry}
          material={materials.Eye02_mat}
          skeleton={nodes.vsn_mesh_12_pm0082_00_BodyCSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_13_pm0082_00_BodyCSkin.geometry}
          material={materials.BodyDesukarn00_mat}
          skeleton={nodes.vsn_mesh_13_pm0082_00_BodyCSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_14_pm0082_00_BodyCSkin.geometry}
          material={materials.BodySpc_mat}
          skeleton={nodes.vsn_mesh_14_pm0082_00_BodyCSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_15_pm0082_00_BodyCSkin.geometry}
          material={materials.BodyDesukarnVco_mat}
          skeleton={nodes.vsn_mesh_15_pm0082_00_BodyCSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_16_pm0082_00_BodyCSkin.geometry}
          material={materials.BodyDesukarn01_mat}
          skeleton={nodes.vsn_mesh_16_pm0082_00_BodyCSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_17_pm0082_00_BodyCSkin.geometry}
          material={materials.Body_mat}
          skeleton={nodes.vsn_mesh_17_pm0082_00_BodyCSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_1_pm0082_00_BodyASkin.geometry}
          material={materials.BodySpc_mat}
          skeleton={nodes.vsn_mesh_1_pm0082_00_BodyASkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_2_pm0082_00_BodyASkin.geometry}
          material={materials.BodyDesukarn00_mat}
          skeleton={nodes.vsn_mesh_2_pm0082_00_BodyASkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_3_pm0082_00_BodyASkin.geometry}
          material={materials.BodyDesukarnVco_mat}
          skeleton={nodes.vsn_mesh_3_pm0082_00_BodyASkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_4_pm0082_00_BodyASkin.geometry}
          material={materials.BodyDesukarn01_mat}
          skeleton={nodes.vsn_mesh_4_pm0082_00_BodyASkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_5_pm0082_00_BodyASkin.geometry}
          material={materials.Body_mat}
          skeleton={nodes.vsn_mesh_5_pm0082_00_BodyASkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_6_pm0082_00_BodyBSkin.geometry}
          material={materials.BodyDesukarnVco_mat}
          skeleton={nodes.vsn_mesh_6_pm0082_00_BodyBSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_7_pm0082_00_BodyBSkin.geometry}
          material={materials.Eye01_mat}
          skeleton={nodes.vsn_mesh_7_pm0082_00_BodyBSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_8_pm0082_00_BodyBSkin.geometry}
          material={materials.BodySpc_mat}
          skeleton={nodes.vsn_mesh_8_pm0082_00_BodyBSkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_9_pm0082_00_BodyBSkin.geometry}
          material={materials.BodyDesukarn00_mat}
          skeleton={nodes.vsn_mesh_9_pm0082_00_BodyBSkin.skeleton}
        />
        <primitive object={nodes.pm0082_00} />
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

useGLTF.preload("/Magneton.glb");
