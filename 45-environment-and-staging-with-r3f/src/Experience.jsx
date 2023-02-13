import { useFrame } from "@react-three/fiber";
import {
	OrbitControls,
	useHelper,
	BakeShadows,
	softShadows,
	AccumulativeShadows,
	RandomizedLight,
	ContactShadows,
} from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";

// softShadows({
// 	frustum: 3.75,
// 	size: 0.005,
// 	near: 9.5,
// 	samples: 17,
// 	rings: 11 ,
// });

export default function Experience() {
	const cube = useRef();
	const directionLightRef = useRef();
	useHelper(directionLightRef, THREE.DirectionalLightHelper, 0.5, "hotpink");

	useFrame((state, delta) => {
		cube.current.rotation.y += delta * 0.2;
	});

	const { color, opacity, blur } = useControls("contact shadow", {
		color: { value: "#316d39", label: "Color" },
		opacity: { value: 0.8, min: 0, max: 1, step: 0.01, label: "Opacity" },
		blur: { value: 0.5, min: 0, max: 1, step: 0.01, label: "Blur" },
	});

	return (
		<>
			{/* <BakeShadows /> */}
			<Perf position='top-left' />

			<OrbitControls makeDefault />

			{/* <AccumulativeShadows
				position={[0, -0.99, 0]}
				scale={10}
				color='#316d39'
				opacity={0.8}
				frames={Infinity}
				temporal
				blend={100}>
				<RandomizedLight
					amount={8}
					intensity={1}
					bias={0.001}
					radius={1}
					ambient={0.5}
					position={[1, 2, 3]}
				/>
			</AccumulativeShadows> */}
			<ContactShadows
				position={[0, -0.99, 0]}
				scale={10}
				resolution={512}
				far={5}
				color={color}
				opacity={opacity}
				blur={blur}
				frames={1}
			/>
			<directionalLight
				position={[1, 2, 3]}
				intensity={1.5}
				ref={directionLightRef}
				castShadow
				shadow-mapSize={[1024, 1024]}
				shadow-camera-near={1}
				shadow-camera-far={10}
				shadow-camera-left={-5}
				shadow-camera-right={5}
				shadow-camera-top={5}
				shadow-camera-bottom={-5}
			/>
			<ambientLight intensity={0.5} />

			<mesh castShadow position-x={-2}>
				<sphereGeometry />
				<meshStandardMaterial color='orange' />
			</mesh>

			<mesh castShadow ref={cube} position-x={2} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color='mediumpurple' />
			</mesh>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color='greenyellow' />
			</mesh>
		</>
	);
}
