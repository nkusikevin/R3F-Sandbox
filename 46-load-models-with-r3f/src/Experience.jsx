import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Experience() {
	const gltf = useLoader(GLTFLoader, "./car13/scene.gltf");

	return (
		<>
			<Perf position='top-left' />

			<OrbitControls makeDefault />

			<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			{/* <mesh castShadow position-x={-2}>
				<sphereGeometry />
				<meshStandardMaterial color='orange' />
			</mesh> */}

			{/* <mesh castShadow position-x={2} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color='mediumpurple' />
			</mesh> */}

			<mesh
				receiveShadow
				position-y={-1}
				rotation-x={-Math.PI * 0.5}
				scale={2000}>
				<planeGeometry />
				<meshStandardMaterial color='#36454F' />
			</mesh>

			<primitive object={gltf.scene} scale={1} position-y={0} />
		</>
	);
}
