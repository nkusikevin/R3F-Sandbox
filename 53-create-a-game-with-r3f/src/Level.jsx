import React from "react";

function BockStart({ position }) {
	return (
		<group position={position}>
			<mesh receiveShadow p>
				<boxGeometry args={[4, 0.2, 4]} />
				<meshStandardMaterial color='limegreen' />
			</mesh>
		</group>
	);
}

function Level() {
	return (
		<>
			<BockStart osition={[0, -0.1, 0]} />
		</>
	);
}

export default Level;
