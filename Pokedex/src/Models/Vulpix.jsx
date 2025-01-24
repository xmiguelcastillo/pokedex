import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Vulpix(props) {
  const { nodes, materials } = useGLTF(`${import.meta.env.BASE_URL}Vulpix.glb`);
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.832}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vulpix_1.geometry}
          material={materials["BodyB.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vulpix_2.geometry}
          material={materials["Eye.009"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vulpix_3.geometry}
          material={materials["Mouth.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vulpix_4.geometry}
          material={materials.BodyA01}
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
    </group>
  );
}

useGLTF.preload("/Vulpix.glb");
