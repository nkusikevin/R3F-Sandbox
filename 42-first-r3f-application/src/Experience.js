import React from "react";
import { useFrame, extend, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObjects from "./CustomObjects";

extend({ OrbitControls });
function Experience() {
	const { camera, gl } = useThree();
	const mesh = useRef();
	useFrame((state, delta) => {
		const angle = state.clock.elapsedTime;
		state.camera.position.x = Math.sin(angle) * 8;
		state.camera.position.z = Math.cos(angle) * 8;
		state.camera.lookAt(0, 0, 0);
		// mesh.current.rotation.x = mesh.current.rotation.y += delta;
	});

	return (
		<>
			{/* <orbitControls args={[camera, gl.domElement]} /> */}
			<directionalLight position={[0, 0, 10]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<group ref={mesh}>
				<mesh scale={2}>
					<sphereGeometry args={[1.5, 32, 32]} />
					<meshStandardMaterial color='mediumpurple' wireframe />
				</mesh>
				<mesh>
					<torusKnotGeometry />
					<meshStandardMaterial color='green' />
				</mesh>
			</group>
			<CustomObjects />
		</>
	);
}

export default Experience;
