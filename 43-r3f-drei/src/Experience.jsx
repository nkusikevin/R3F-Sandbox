import { useThree, extend } from "@react-three/fiber";
import { useRef } from "react";
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import {
	OrbitControls,
	TransformControls,
	PivotControls,
	Html,
	Text,
	Float,
} from "@react-three/drei";

// extend({ OrbitControls })

export default function Experience() {
	const { camera, gl } = useThree();

	const cubeRef = useRef();
	const sphereRef = useRef();

	return (
		<>
			<OrbitControls makeDefault />

			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<PivotControls anchor={[0, 0, 0]} depthTest={false}>
				<mesh position-x={-2} ref={sphereRef}>
					<sphereGeometry />
					<meshStandardMaterial color='orange' />
					<Html
						position={[1, 1, 0]}
						wrapperClass='label'
						center
						distanceFactor={8}
						occlude={[sphereRef, cubeRef]}>
						This is a Sphere
					</Html>
				</mesh>
			</PivotControls>

			<mesh position-x={2} scale={1.5} ref={cubeRef}>
				<boxGeometry />
				<meshStandardMaterial color='mediumpurple' />
			</mesh>
			<TransformControls object={cubeRef} />

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color='greenyellow' />
			</mesh>
			<Float speed={5} floatIntensity={5}>
				<Text
					font='./bangers-v20-latin-regular.woff'
					fontSize={1}
					color='salmon'
					position-y={2}>
					I Love R3F
				</Text>
			</Float>
		</>
	);
}
