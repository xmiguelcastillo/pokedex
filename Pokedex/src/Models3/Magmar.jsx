import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Magmar(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Magmar.glb`);
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
      <group scale={0.025}>
        <primitive object={nodes.pm0115_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0116_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.373}>
        <primitive object={nodes.pm0126_00} />
        <skinnedMesh
          geometry={nodes.FireStenA_OptMesh_6_0.geometry}
          material={materials.BodyA}
          skeleton={nodes.FireStenA_OptMesh_6_0.skeleton}
        />
        <skinnedMesh
          geometry={nodes.FireStenA_OptMesh_6_0_1.geometry}
          material={materials.BodyB}
          skeleton={nodes.FireStenA_OptMesh_6_0_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.FireStenA_OptMesh_6_0_2.geometry}
          material={materials.BodyD}
          skeleton={nodes.FireStenA_OptMesh_6_0_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.FireStenA_OptMesh_6_0_3.geometry}
          material={materials["Eye_mat.015"]}
          skeleton={nodes.FireStenA_OptMesh_6_0_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.FireStenA_OptMesh_6_0_4.geometry}
          material={materials["FireStenA_mat.001"]}
          skeleton={nodes.FireStenA_OptMesh_6_0_4.skeleton}
        />
        <skinnedMesh
          geometry={nodes.FireStenA_OptMesh_6_0_5.geometry}
          material={materials["FireCoreA_mat.002"]}
          skeleton={nodes.FireStenA_OptMesh_6_0_5.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.Waist_9} />
    </group>
  );
}

useGLTF.preload("/Magmar.glb");
