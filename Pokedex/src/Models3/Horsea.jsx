import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Horsea(props) {
  const { nodes, materials } = useGLTF("/Horsea.glb");
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
        <skinnedMesh
          geometry={nodes.mesh_3_Body.geometry}
          material={materials["Body_mat.006"]}
          skeleton={nodes.mesh_3_Body.skeleton}
        />
        <skinnedMesh
          geometry={nodes.mesh_3_Body_1.geometry}
          material={materials["Eye_mat.010"]}
          skeleton={nodes.mesh_3_Body_1.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Horsea.glb");
