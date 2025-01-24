import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ponyta(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Ponyta.glb`);
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
      <group rotation={[Math.PI, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_1.geometry}
          material={materials["BodyA.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_2.geometry}
          material={materials["Eye.033"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_3.geometry}
          material={materials.FireCoreA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_4.geometry}
          material={materials.FireCoreB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_5.geometry}
          material={materials.FireCoreC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_6.geometry}
          material={materials.FireCoreD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_7.geometry}
          material={materials.FireCoreE}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_8.geometry}
          material={materials.FireStenA}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_9.geometry}
          material={materials.FireStenB}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_10.geometry}
          material={materials.FireStenC}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_11.geometry}
          material={materials.FireStenD}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ponyta_12.geometry}
          material={materials.FireStenE}
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
    </group>
  );
}

useGLTF.preload("/Ponyta.glb");
