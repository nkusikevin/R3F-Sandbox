import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });

function AxeBlock({ position }) {
	const obstacle = useRef();

	const [timeOffset] = useState(() => Math.random() * Math.PI * 2);

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const x = Math.sin(time + timeOffset) * 1.25;
		obstacle.current.setNextKinematicTranslation({
			x: position[0] + x,
			y: position[1] + 0.75,
			z: position[2],
		});
	});
	return (
		<group position={position}>
			<mesh
				geometry={boxGeometry}
				position={[0, -0.1, 0]}
				scale={[4, 0.2, 4]}
				receiveShadow
				material={floor2Material}></mesh>
			<RigidBody
				ref={obstacle}
				type='kinematicPosition'
				position={[0, 0.3, 0]}
				restitution={0.2}
				friction={0}>
				<mesh
					geometry={boxGeometry}
					material={obstacleMaterial}
					scale={[1.5, 1.5, 0.3]}
					castShadow
					receiveShadow
				/>
			</RigidBody>
		</group>
	);
}

export default AxeBlock;
