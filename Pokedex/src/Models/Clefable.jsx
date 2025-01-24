import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Clefable(props) {
  const { nodes, materials } = useGLTF("/Clefable.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.313}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Clefable_1.geometry}
          material={materials["Body.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Clefable_2.geometry}
          material={materials["REye.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Clefable_3.geometry}
          material={materials["Mouth.002"]}
        />
      </group>
      <primitive object={nodes.pm0025_00_pikachu} />
      <primitive object={nodes.pm0005_00_1} />
      <primitive object={nodes.pm0006_00} />
      <primitive object={nodes.pm0026_00_raichu} />
      <primitive object={nodes.pm0029_00} />
      <primitive object={nodes.pm0030_00} />
      <primitive object={nodes.pm0031_00} />
      <primitive object={nodes.pm0032_00} />
      <primitive object={nodes.pm0033_00} />
    </group>
  );
}

useGLTF.preload("/Clefable.glb");
