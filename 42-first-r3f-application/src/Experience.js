import React from "react";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Group } from "three";

function Experience() {
	const mesh = useRef();
	useFrame((state, delta) => {
		mesh.current.rotation.x = mesh.current.rotation.y += delta;
	});
	return (
		<group ref={mesh}>
			<mesh scale={2}>
				<sphereGeometry args={[1.5, 32, 32]} />
				<meshBasicMaterial color='mediumpurple' wireframe />
			</mesh>
			<mesh>
				<torusKnotGeometry />
				<meshNormalMaterial />
			</mesh>
		</group>
	);
}

export default Experience;
