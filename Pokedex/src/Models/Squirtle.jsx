import { useGLTF, PerspectiveCamera } from "@react-three/drei";

export function Squirtle(props) {
  const { nodes, materials } = useGLTF(
    `${import.meta.env.BASE_URL}Squritle.gltf`,
  );
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
      <PerspectiveCamera
        makeDefault={false}
        far={10}
        fov={39.598}
        position={[7.359, -6.926, 4.958]}
        rotation={[0.943, 0.71, 0.441]}
      />
    </group>
  );
}

useGLTF.preload("/Squritle.gltf");
