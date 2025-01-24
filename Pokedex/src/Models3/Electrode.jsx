import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Electrode(props) {
  const { nodes, materials } = useGLTF("/Electrode.glb");
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
        <skinnedMesh
          geometry={nodes.mesh_0_Body.geometry}
          material={materials["Body_mat.001"]}
          skeleton={nodes.mesh_0_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_Body_1.geometry}
          material={materials.Mouth_mat}
          skeleton={nodes.mesh_0_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_Body_2.geometry}
          material={materials["Eye_mat.003"]}
          skeleton={nodes.mesh_0_Body_2.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Electrode.glb");
