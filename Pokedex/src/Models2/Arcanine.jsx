import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Arcanine(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Arcanine.glb`,
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
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.535}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arcanine_1.geometry}
          material={materials["Material__35.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arcanine_2.geometry}
          material={materials["Material__36.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Arcanine_3.geometry}
          material={materials["Material__37.002"]}
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

useGLTF.preload("/Arcanine.glb");
