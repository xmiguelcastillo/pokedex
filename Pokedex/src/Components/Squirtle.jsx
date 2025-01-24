import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Model(props) {
  const { nodes, materials } = useGLTF("/Squritle.gltf");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, Math.PI]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0.geometry}
          material={materials.Material__60}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.mesh_0_1.geometry}
          material={materials.Material__61}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/Squritle.gltf");
