import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Jolteon(props) {
  const { nodes, materials } = useGLTF("/Jolteon.glb");
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
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0127_00} />
      <primitive object={nodes.pm0133_00} />
      <primitive object={nodes.pm0134_00} />
      <primitive object={nodes.pm0135_00} />
      <skinnedMesh
        geometry={nodes.Jolteon_1.geometry}
        material={materials["Material__10.003"]}
        skeleton={nodes.Jolteon_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Jolteon_2.geometry}
        material={materials["Material__11.003"]}
        skeleton={nodes.Jolteon_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Jolteon.glb");
