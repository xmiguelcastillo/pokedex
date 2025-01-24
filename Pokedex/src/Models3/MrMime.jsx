import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function MrMime(props) {
  const { nodes, materials } = useGLTF("/MrMime.glb");
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
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.487}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MrMime_1.geometry}
          material={materials.Material__35}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MrMime_2.geometry}
          material={materials.Material__36}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.MrMime_3.geometry}
          material={materials.Material__37}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/MrMime.glb");
