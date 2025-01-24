import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Scyther(props) {
  const { nodes, materials } = useGLTF("/Scyther.glb");
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
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.Waist_9} />
        <skinnedMesh
          geometry={nodes.Scyther_1.geometry}
          material={materials.Body}
          skeleton={nodes.Scyther_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Scyther_2.geometry}
          material={materials.Eye}
          skeleton={nodes.Scyther_2.skeleton}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Scyther.glb");
