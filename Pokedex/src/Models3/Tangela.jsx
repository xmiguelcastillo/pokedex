import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tangela(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Tangela.glb`,
  );
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
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.308}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyAVco.geometry}
          material={materials.BodyAVco_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyAVco_1.geometry}
          material={materials.BodyBVco_mat}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_BodyAVco_2.geometry}
          material={materials["Eye_mat.009"]}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Tangela.glb");
