import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import {
	Debug,
	Physics,
	RigidBody,
	CuboidCollider,
	BallCollider,
} from "@react-three/rapier";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Experience() {
	const cube = useRef();
	const twister = useRef();

	const cubeJump = () => {
		const mass = cube.current.mass();
		cube.current.applyImpulse({ x: 0, y: 5 * mass, z: 0 });
		cube.current.applyTorqueImpulse({
			x: Math.random() - 0.5,
			y: Math.random() - 0.5,
			z: Math.random() - 0.5,
		});
	};

	useFrame((state) => {
		const time = state.clock.getElapsedTime();
		const euler = new THREE.Euler(0, time, 0);
		const quaternion = new THREE.Quaternion();
		quaternion.setFromEuler(euler);
		twister.current.setNextKinematicRotation(quaternion);

		const angle = time * 0.5;
		const x = Math.cos(angle) * 2;
		const z = Math.sin(angle) * 2;
		twister.current.setNextKinematicTranslation({ x, y: -0.8, z });
	});
	return (
		<>
			<Perf position='top-left' />

			<OrbitControls makeDefault />

			<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />
			<Physics gravity={[0, -9.08, 0]}>
				<Debug />
				<RigidBody colliders='ball'>
					<mesh castShadow position={[-2, 4, 0]}>
						<sphereGeometry />
						<meshStandardMaterial color='orange' />
					</mesh>
				</RigidBody>
				<RigidBody colliders={false} ref={cube} restitution={0} friction={0.7}>
					<mesh castShadow onClick={cubeJump}>
						<boxGeometry />
						<meshStandardMaterial color='mediumpurple' />
					</mesh>
					<CuboidCollider args={[0.5, 0.5, 0.5]} mass={1} />
				</RigidBody>
				<RigidBody type='fixed'>
					<mesh receiveShadow position-y={-1.25}>
						<boxGeometry args={[10, 0.5, 10]} />
						<meshStandardMaterial color='greenyellow' />
					</mesh>
				</RigidBody>
				<RigidBody
					position={[0, -0.8, 0]}
					friction={0}
					type='kinematicPosition'
					ref={twister}>
					<mesh castShadow scale={[0.4, 0.4, 3]}>
						<boxGeometry />
						<meshStandardMaterial color='red' />
					</mesh>
				</RigidBody>
			</Physics>
		</>
	);
}
