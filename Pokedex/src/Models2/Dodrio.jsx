import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Dodrio(props) {
  const { nodes, materials } = useGLTF("/Dodrio.glb");
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
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0060_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.453}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DodrioM_1.geometry}
          material={materials["Body.015"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DodrioM_2.geometry}
          material={materials["BodyFur.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DodrioM_3.geometry}
          material={materials["EyeB.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DodrioM_4.geometry}
          material={materials["EyeA.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.DodrioM_5.geometry}
          material={materials.EyeC}
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
      <primitive object={nodes.pm0065_00_foodin} />
      <primitive object={nodes.pm0066_00} />
      <primitive object={nodes.pm0067_00} />
      <primitive object={nodes.pm0068_00} />
      <primitive object={nodes.pm0070_00} />
      <primitive object={nodes.pm0079_00} />
      <primitive object={nodes.pm0080_00} />
      <primitive object={nodes.pm0081_00} />
    </group>
  );
}

useGLTF.preload("/Dodrio.glb");
