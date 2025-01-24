import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hitmonlee(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Hitmonlee.glb`,
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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.366}>
        <primitive object={nodes.pm0106_00} />
        <skinnedMesh
          geometry={nodes.mesh_1_Body.geometry}
          material={materials["Body_mat.002"]}
          skeleton={nodes.mesh_1_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_1_Body_1.geometry}
          material={materials["Eye_mat.004"]}
          skeleton={nodes.mesh_1_Body_1.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Hitmonlee.glb");
