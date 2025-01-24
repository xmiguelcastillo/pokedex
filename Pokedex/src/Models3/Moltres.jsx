import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Moltres(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Moltres.glb`,
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
      <group rotation={[Math.PI, 0, Math.PI]} scale={0.277}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moltres_1.geometry}
          material={materials["Material__10.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moltres_2.geometry}
          material={materials["Material__11.006"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moltres_3.geometry}
          material={materials["Material__12.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moltres_4.geometry}
          material={materials["Material__13.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Moltres_5.geometry}
          material={materials["Material__14.002"]}
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

useGLTF.preload("/Moltres.glb");
