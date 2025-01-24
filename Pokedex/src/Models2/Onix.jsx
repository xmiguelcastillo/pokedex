import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Onix(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Onix.glb`);
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <skinnedMesh
          geometry={nodes.Gengar_Mask.geometry}
          material={materials.Material__10}
          skeleton={nodes.Gengar_Mask.skeleton}
        />
        <primitive object={nodes.pm0094_00} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_0_pm0095_00_BodySkin.geometry}
        material={materials.BodyAVco01_mat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_1_pm0095_00_BodySkin.geometry}
        material={materials.Eye_mat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.145}
      />
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.145}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_pm0095_00_BodySkin.geometry}
          material={materials.BodyB01_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_pm0095_00_BodySkin_1.geometry}
          material={materials.BodyB00_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_4_pm0095_00_BodySkin_2.geometry}
          material={materials.BodyC_mat}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_5_pm0095_00_BodySkin.geometry}
        material={materials.BodyAVco00_mat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_6_pm0095_00_IrisSkin.geometry}
        material={materials.LIris_mat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.145}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.vsn_mesh_7_pm0095_00_IrisSkin.geometry}
        material={materials.RIris_mat}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.145}
      />
    </group>
  );
}

useGLTF.preload("/Onix.glb");
