import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pinsir(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Pinsir.glb`);
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
      <skinnedMesh
        geometry={nodes.Pinsir_1.geometry}
        material={materials["Material__22.001"]}
        skeleton={nodes.Pinsir_1.skeleton}
      />
      <skinnedMesh
        geometry={nodes.Pinsir_2.geometry}
        material={materials["Material__23.001"]}
        skeleton={nodes.Pinsir_2.skeleton}
      />
    </group>
  );
}

useGLTF.preload("/Pinsir.glb");
