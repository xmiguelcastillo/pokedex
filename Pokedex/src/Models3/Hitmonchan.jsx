import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hitmonchan(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Hitmonchan.glb`,
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
        <primitive object={nodes.pm0100_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <primitive object={nodes.pm0101_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.436}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hitmonchan_1.geometry}
          material={materials.Material__109}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Hitmonchan_2.geometry}
          material={materials.Material__110}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
    </group>
  );
}

useGLTF.preload("/Hitmonchan.glb");
