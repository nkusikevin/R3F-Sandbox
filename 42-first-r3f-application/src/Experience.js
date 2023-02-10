import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

function Experience() {
	const mesh = useRef();
	useFrame(() => {
		mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
	});
	return (
		<mesh ref={mesh} scale={2}>
			<sphereGeometry args={[1.5, 32, 32]} />
			<meshBasicMaterial color='mediumpurple' wireframe />
		</mesh>
	);
}

export default Experience;
