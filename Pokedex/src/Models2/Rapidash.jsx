import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Rapidash(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Rapidash.glb`,
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
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0060_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.605}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_1.geometry}
          material={materials["Body.012"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_2.geometry}
          material={materials["Eye.034"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_3.geometry}
          material={materials["FireCoreA.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_4.geometry}
          material={materials["FireCoreB.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_5.geometry}
          material={materials["FireCoreC.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_6.geometry}
          material={materials["FireCoreD.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_7.geometry}
          material={materials.FireCoreF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_8.geometry}
          material={materials["FireCoreE.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_9.geometry}
          material={materials.FireCoreG}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_10.geometry}
          material={materials["FireStenA.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_11.geometry}
          material={materials["FireStenB.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_12.geometry}
          material={materials["FireStenC.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_13.geometry}
          material={materials["FireStenD.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_14.geometry}
          material={materials.FireStenF}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_15.geometry}
          material={materials["FireStenE.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rapidash_16.geometry}
          material={materials.FireStenG}
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

useGLTF.preload("/Rapidash.glb");
