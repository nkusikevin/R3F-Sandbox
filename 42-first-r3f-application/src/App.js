import React from "react";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience";
import * as THREE from "three";

function App() {
	return (
		<Canvas
			gl={{
				antialias: true,
				toneMapping: THREE.ACESFilmicToneMapping,
				outputEncoding: THREE.LinearEncoding,
			}}
			camera={{
				position: [3, 2, 6],
				fov: 45,
				near: 0.1,
				far: 200,
			}}>
			<Experience />
		</Canvas>
	);
}

export default App;
