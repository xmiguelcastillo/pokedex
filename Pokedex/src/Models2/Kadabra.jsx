import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Kadabra(props) {
  const { nodes, materials } = useGLTF("/Kadabra.glb");
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
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.553}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KadabraM_1.geometry}
          material={materials.Material__88}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KadabraM_2.geometry}
          material={materials.Material__89}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.KadabraM_3.geometry}
          material={materials.Material__90}
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

useGLTF.preload("/Kadabra.glb");
