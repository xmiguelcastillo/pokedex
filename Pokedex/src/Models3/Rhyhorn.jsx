import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rhyhorn(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Rhyhorn.glb`,
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
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.61}>
        <primitive object={nodes.pm0111_00_sihorn} />
        <skinnedMesh
          geometry={nodes.mesh_6_BodyASpc01.geometry}
          material={materials.BodyASpc01_mat}
          skeleton={nodes.mesh_6_BodyASpc01.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_6_BodyASpc01_1.geometry}
          material={materials.BodyBSpc00_mat}
          skeleton={nodes.mesh_6_BodyASpc01_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_6_BodyASpc01_2.geometry}
          material={materials["Eye_mat.007"]}
          skeleton={nodes.mesh_6_BodyASpc01_2.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Rhyhorn.glb");
