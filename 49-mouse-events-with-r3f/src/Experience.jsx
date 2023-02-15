import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF, meshBounds } from "@react-three/drei";
import { useRef } from "react";

export default function Experience() {
	const cube = useRef();

	const model = useGLTF("./hamburger.glb");

	useFrame((state, delta) => {
		cube.current.rotation.y += delta * 0.2;
	});

	const handleOnClick = () => {
		cube.current.material.color.set(`hsl(${Math.random() * 360} , 100% ,75%)`);
	};
	return (
		<>
			<OrbitControls makeDefault />

			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<mesh position-x={-2} onClick={(e) => e.stopPropagation()}>
				<sphereGeometry />
				<meshStandardMaterial color='orange' />
			</mesh>

			<mesh
				ref={cube}
				position-x={2}
				scale={1.5}
				raycast={meshBounds}
				onClick={handleOnClick}
				onPointerEnter={() => (document.body.style.cursor = "pointer")}
				onPointerLeave={() => (document.body.style.cursor = "default")}>
				<boxGeometry />
				<meshStandardMaterial color='mediumpurple' />
			</mesh>
			<primitive object={model.scene} scale={0.2} position-y={-1} />
			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color='greenyellow' />
			</mesh>
		</>
	);
}
