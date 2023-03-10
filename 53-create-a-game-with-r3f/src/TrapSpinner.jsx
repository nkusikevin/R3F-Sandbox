import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { RigidBody } from "@react-three/rapier";
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor2Material = new THREE.MeshStandardMaterial({ color: "greenyellow" });
const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });

function TrapSpinner({ position }) {
	const trapSpinnerRef = useRef();

	const [speed] = useState(
		() => (Math.random() + 0.2) * (Math.random() < 0.5 ? -1 : 1)
	);

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const rotation = new THREE.Quaternion();
		rotation.setFromEuler(new THREE.Euler(0, time * speed, 0));
		trapSpinnerRef.current.setNextKinematicRotation(rotation);
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
				ref={trapSpinnerRef}
				type='kinematicPosition'
				position={[0, 0.3, 0]}
				restitution={0.2}
				friction={0}>
				<mesh
					geometry={boxGeometry}
					material={obstacleMaterial}
					scale={[3.5, 0.3, 0.3]}
					castShadow
					receiveShadow
				/>
			</RigidBody>
		</group>
	);
}

export default TrapSpinner;
