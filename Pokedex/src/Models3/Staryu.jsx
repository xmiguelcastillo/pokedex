import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Staryu(props) {
  const { nodes, materials } = useGLTF("/Staryu.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes.pm0094_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0096_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0100_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0101_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.501}>
        <primitive object={nodes.pm0113_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0115_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0116_00} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_0_pm0120_00_Skin.geometry}
        material={materials.Body_004}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.617}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_1_pm0120_00_Skin.geometry}
        material={materials.BodyNutreyVco}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.617}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_2_pm0120_00_Skin.geometry}
        material={materials.BodyNutrey}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.617}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.mesh_3_pm0120_00_Skin.geometry}
        material={materials.BodyHitodeman}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.617}
      />
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Staryu.glb");
