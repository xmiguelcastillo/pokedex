import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Chansey(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Chansey.glb`,
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
        <skinnedMesh
          geometry={nodes.mesh_0_Body001.geometry}
          material={materials["Body_mat.005"]}
          skeleton={nodes.mesh_0_Body001.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_Body001_1.geometry}
          material={materials["Mouth_mat.003"]}
          skeleton={nodes.mesh_0_Body001_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_Body001_2.geometry}
          material={materials["Eye_mat.008"]}
          skeleton={nodes.mesh_0_Body001_2.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Chansey.glb");
