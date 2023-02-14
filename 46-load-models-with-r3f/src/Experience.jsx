import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Model from "./Model";
import Ford from "./Ford";
import PlaceHolder from "./PlaceHolder";

export default function Experience() {
	return (
		<>
			<Perf position='top-left' />

			<OrbitControls makeDefault />

			<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<mesh
				receiveShadow
				position-y={-1}
				rotation-x={-Math.PI * 0.5}
				scale={2000}>
				<planeGeometry />
				<meshStandardMaterial color='#36454F' />
			</mesh>

			<Suspense fallback={<PlaceHolder position-y={0.5} scale={[2, 3, 2]} />}>
				{/* <Model /> */}
				<Ford scale={0.35} />
			</Suspense>
		</>
	);
}
