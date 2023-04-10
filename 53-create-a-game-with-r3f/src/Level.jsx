import React from "react";
import * as THREE from "three";
import TrapSpinner from "./TrapSpinner";
import LimboBlock from "./LimboBlock";
import AxeBlock from "./AxeBlock";

THREE.ColorManagement.legacyMode = false;

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);

const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });

const obstacleMaterial = new THREE.MeshStandardMaterial({ color: "orangered" });
const wallMaterial = new THREE.MeshStandardMaterial({ color: "slategrey" });

function BockStart({ position }) {
	return (
		<group position={position}>
			<mesh
				geometry={boxGeometry}
				position={[0, -0.1, 0]}
				scale={[4, 0.2, 4]}
				receiveShadow
				material={floor1Material}></mesh>
		</group>
	);
}

function Level() {
	return (
		<>
			<BockStart position={[0, 0, 12]} />
			<TrapSpinner position={[0, 0, 8]} />
			<LimboBlock position={[0, 0, 4]} />
			<AxeBlock position={[0, 0, 0]} />
		</>
	);
}

export default Level;
