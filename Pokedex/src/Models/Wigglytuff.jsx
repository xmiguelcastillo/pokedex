import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Wigglytuff(props) {
  const { nodes, materials } = useGLTF("/Wigglytuff.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.023}>
        <primitive object={nodes.pm0005_00} />
      </group>
      <group rotation={[-Math.PI, 0, 0]}>
        <primitive object={nodes.pm0035_00} />
      </group>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group position={[0, -11.404, -57.508]} rotation={[1.564, 1.571, 0]}>
          <primitive object={nodes._04_Hips} />
          <primitive object={nodes._89_Spine1} />
        </group>
      </group>
      <group rotation={[Math.PI / 2, 0, Math.PI]} scale={0.473}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wigglytuff_1.geometry}
          material={materials["Mouth.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wigglytuff_2.geometry}
          material={materials["Body.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wigglytuff_3.geometry}
          material={materials["Eye.011"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wigglytuff_4.geometry}
          material={materials.BodyVco}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wigglytuff_5.geometry}
          material={materials["RIris.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Wigglytuff_6.geometry}
          material={materials["Body.006"]}
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

useGLTF.preload("/Wigglytuff.glb");
