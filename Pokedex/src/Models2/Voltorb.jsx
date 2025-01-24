import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Voltorb(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Voltorb.glb`,
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
        <skinnedMesh
          geometry={nodes.vsn_mesh_0_pm0100_00_Skin.geometry}
          material={materials.BodySpc_mat}
          skeleton={nodes.vsn_mesh_0_pm0100_00_Skin.skeleton}
        />
        <skinnedMesh
          geometry={nodes.vsn_mesh_1_pm0100_00_Skin.geometry}
          material={materials["Eye_mat.002"]}
          skeleton={nodes.vsn_mesh_1_pm0100_00_Skin.skeleton}
        />
        <primitive object={nodes.pm0100_00} />
      </group>
    </group>
  );
}

useGLTF.preload("/Voltorb.glb");
