import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Articuno(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Articuno.glb`,
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
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0143_00} />
      </group>
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.331}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Articuno_1.geometry}
          material={materials["Material__35.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Articuno_2.geometry}
          material={materials["Material__36.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Articuno_3.geometry}
          material={materials["Material__37.001"]}
        />
      </group>
      <primitive object={nodes.pm0104_00} />
      <primitive object={nodes.pm0105_00} />
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0127_00} />
      <primitive object={nodes.pm0133_00} />
      <primitive object={nodes.pm0134_00} />
      <primitive object={nodes.pm0135_00} />
      <primitive object={nodes.pm0136_00} />
      <primitive object={nodes.pm0142_00} />
    </group>
  );
}

useGLTF.preload("/Articuno.glb");
