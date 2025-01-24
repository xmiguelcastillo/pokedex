import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Drowzee(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Drowzee.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.025}>
        <primitive object={nodes.pm0094_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0096_00} />
        <skinnedMesh
          geometry={nodes.mesh_2_Body003.geometry}
          material={materials.Body_mat_003}
          skeleton={nodes.mesh_2_Body003.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_2_Body003_1.geometry}
          material={materials.Eye_mat_003}
          skeleton={nodes.mesh_2_Body003_1.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Drowzee.glb");
