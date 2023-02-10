import React from "react";

function Experience() {
	return (
		<mesh scale={2} position={[2, 3, 3]}>
			<sphereGeometry args={[1.5, 32, 32]} />
			<meshBasicMaterial color='mediumpurple' wireframe />
		</mesh>
	);
}

export default Experience;
