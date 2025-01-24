import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Koffing(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Koffing.glb`,
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
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_10_Body.geometry}
          material={materials["Body_mat.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_10_Body_1.geometry}
          material={materials["Mouth_mat.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_10_Body_2.geometry}
          material={materials["Eye_mat.005"]}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Koffing.glb");
