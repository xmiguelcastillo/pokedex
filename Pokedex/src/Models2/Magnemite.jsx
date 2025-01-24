import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Magnemite(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Magnemite.glb`,
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
      <primitive object={nodes.pm0066_00} />
      <primitive object={nodes.pm0067_00} />
      <primitive object={nodes.pm0068_00} />
      <primitive object={nodes.pm0070_00} />
      <primitive object={nodes.pm0079_00} />
      <primitive object={nodes.pm0080_00} />
      <skinnedMesh
        geometry={nodes.mesh_0_pm0081_00_Skin.geometry}
        material={materials.BodyEnv00Vco00_006}
        skeleton={nodes.mesh_0_pm0081_00_Skin.skeleton}
      />
      <skinnedMesh
        geometry={nodes.mesh_1_pm0081_00_Skin.geometry}
        material={materials.BodySpc_006}
        skeleton={nodes.mesh_1_pm0081_00_Skin.skeleton}
      />
      <skinnedMesh
        geometry={nodes.mesh_2_pm0081_00_Skin.geometry}
        material={materials.Eye_006}
        skeleton={nodes.mesh_2_pm0081_00_Skin.skeleton}
      />
      <skinnedMesh
        geometry={nodes.mesh_3_pm0081_00_Skin.geometry}
        material={materials.BodyEnv02_006}
        skeleton={nodes.mesh_3_pm0081_00_Skin.skeleton}
      />
      <skinnedMesh
        geometry={nodes.mesh_4_pm0081_00_Skin.geometry}
        material={materials.BodyEnv00_006}
        skeleton={nodes.mesh_4_pm0081_00_Skin.skeleton}
      />
      <skinnedMesh
        geometry={nodes.mesh_5_pm0081_00_Skin.geometry}
        material={materials.BodyEnv01_006}
        skeleton={nodes.mesh_5_pm0081_00_Skin.skeleton}
      />
      <skinnedMesh
        geometry={nodes.mesh_6_pm0081_00_Skin.geometry}
        material={materials.BodyEnv01Vco_006}
        skeleton={nodes.mesh_6_pm0081_00_Skin.skeleton}
      />
      <skinnedMesh
        geometry={nodes.mesh_7_pm0081_00_Skin.geometry}
        material={materials.BodyEnv02Vco_006}
        skeleton={nodes.mesh_7_pm0081_00_Skin.skeleton}
      />
      <primitive object={nodes.pm0081_00} />
    </group>
  );
}

useGLTF.preload("/Magnemite.glb");
