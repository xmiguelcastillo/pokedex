import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Muk(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Muk.glb`);
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
        <skinnedMesh
          geometry={nodes.mesh_0_pm0089_00_BodySkin.geometry}
          material={materials["BodyBSpc01.001"]}
          skeleton={nodes.mesh_0_pm0089_00_BodySkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_1_pm0089_00_BodySkin.geometry}
          material={materials["BodyASpc.001"]}
          skeleton={nodes.mesh_1_pm0089_00_BodySkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_2_pm0089_00_BodySkin.geometry}
          material={materials["BodyBSpc00.001"]}
          skeleton={nodes.mesh_2_pm0089_00_BodySkin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_4_pm0089_00_EyeSkin.geometry}
          material={materials["Eye.038"]}
          skeleton={nodes.mesh_4_pm0089_00_EyeSkin.skeleton}
        />
        <primitive object={nodes.pm0089_00} />
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

useGLTF.preload("/Muk.glb");
