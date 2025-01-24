import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Kabutops(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Kabutops.glb`,
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
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_0.geometry}
        material={materials["kabutops2:kabutops_siro_1_1"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_1.geometry}
        material={materials["kabutops2:kabutops_siro_1_2"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_10.geometry}
        material={materials["kabutops2:kabutops_siro_1_10"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_11.geometry}
        material={materials["kabutops2:kabutops_siro_1_11"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_12.geometry}
        material={materials["kabutops2:kabutops_siro_1_12"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_13.geometry}
        material={materials["kabutops2:kabutops_siro_1_13"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_14.geometry}
        material={materials["kabutops2:kabutops_siro_1_14"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_15.geometry}
        material={materials["kabutops2:kabutops_siro_1_15"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_2.geometry}
        material={materials["kabutops2:kabutops_siro_1_3"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_3.geometry}
        material={materials["kabutops2:kabutops_siro_1_4"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_4.geometry}
        material={materials["kabutops2:siro1"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_5.geometry}
        material={materials["kabutops2:kabutops_siro_1_5"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_6.geometry}
        material={materials["kabutops2:kabutops_siro_1_6"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_7.geometry}
        material={materials["kabutops2:kabutops_siro_1_7"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_8.geometry}
        material={materials["kabutops2:kabutops_siro_1_8"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.skin_9.geometry}
        material={materials["kabutops2:kabutops_siro_1_9"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={4.958}
      />
      <primitive object={nodes.Waist_9} />
      <primitive object={nodes.pm0150_00} />
      <primitive object={nodes.pm0151_00} />
    </group>
  );
}

useGLTF.preload("/Kabutops.glb");
