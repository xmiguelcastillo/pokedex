import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Exeggcute(props) {
  const { nodes, materials } = useGLTF("/Exeggcute.glb");
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
        <primitive object={nodes.pm0102_00} />
        <skinnedMesh
          geometry={nodes.mesh_0_BodySpc.geometry}
          material={materials["BodySpc_mat.001"]}
          skeleton={nodes.mesh_0_BodySpc.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_BodySpc_1.geometry}
          material={materials.CMouth_mat}
          skeleton={nodes.mesh_0_BodySpc_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_BodySpc_2.geometry}
          material={materials.CEye_mat}
          skeleton={nodes.mesh_0_BodySpc_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_BodySpc_3.geometry}
          material={materials.BEye_mat}
          skeleton={nodes.mesh_0_BodySpc_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_BodySpc_4.geometry}
          material={materials.AEye_mat}
          skeleton={nodes.mesh_0_BodySpc_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_BodySpc_5.geometry}
          material={materials.BMouth_mat}
          skeleton={nodes.mesh_0_BodySpc_5.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_0_BodySpc_6.geometry}
          material={materials.AMouth_mat}
          skeleton={nodes.mesh_0_BodySpc_6.skeleton}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Exeggcute.glb");
