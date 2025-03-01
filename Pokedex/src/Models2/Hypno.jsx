import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Hypno(props) {
const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Hypno.glb`);
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
      <group scale={0.025}>
        <primitive object={nodes.pm0104_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0105_00} />
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
      <group scale={0.025}>
        <primitive object={nodes.pm0127_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0133_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0134_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0135_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0136_00} />
      </group>
      <group scale={0.025}>
        <primitive object={nodes.pm0142_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0143_00} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_0.geometry}
        material={materials["Eye.003"]}
        position={[-0.834, -0.001, -0.063]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={46.762}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_1.geometry}
        material={materials["Body.001"]}
        position={[-0.834, -0.001, -0.063]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={46.762}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_2.geometry}
        material={materials["Body.001"]}
        position={[-0.834, -0.001, -0.063]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={46.762}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_3.geometry}
        material={materials["Body.001"]}
        position={[-0.834, -0.001, -0.063]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={46.762}
      />
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0150_00} />
      <primitive object={nodes.pm0151_00} />
    </group>
  );
}

useGLTF.preload("/Hypno.glb");
