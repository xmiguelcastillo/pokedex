import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Growlithe(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Growlithe.glb`,
  );
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]} scale={0.214}>
        <primitive object={nodes.pm0042_00_golbat} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Growlithe_1.geometry}
          material={materials["BodyA.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Growlithe_2.geometry}
          material={materials.BodyBBuffronVco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Growlithe_3.geometry}
          material={materials["Eye.022"]}
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
      <primitive object={nodes._03_Waist} />
    </group>
  );
}

useGLTF.preload("/Growlithe.glb");
