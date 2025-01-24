import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Weezing(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Weezing.glb`,
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
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0110_00} />
        <skinnedMesh
          geometry={nodes.mesh_9_BodyA.geometry}
          material={materials["BodyA_mat.001"]}
          skeleton={nodes.mesh_9_BodyA.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_9_BodyA_1.geometry}
          material={materials["BodyB_mat.001"]}
          skeleton={nodes.mesh_9_BodyA_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_9_BodyA_2.geometry}
          material={materials["Eye_mat.006"]}
          skeleton={nodes.mesh_9_BodyA_2.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Weezing.glb");
