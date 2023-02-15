import React, { useRef } from "react";
import {
	Sparkles,
	useGLTF,
	useTexture,
	shaderMaterial,
} from "@react-three/drei";
import portalVertexShader from "./shaders/portal/vertex.glsl";
import portalFragmentShader from "./shaders/portal/fragment.glsl";
import * as THREE from "three";
import { extend, useFrame } from "@react-three/fiber";

const PortalMaterial = shaderMaterial(
	{
		uTime: 0,
		uColorStart: new THREE.Color("#ffffff"),
		uColorEnd: new THREE.Color("#000000"),
	},
	portalVertexShader,
	portalFragmentShader
);
extend({ PortalMaterial });
function Model() {
	const { nodes } = useGLTF("./model/portal.glb");

	const portalMaterial = useRef();

	const bakedTexture = useTexture("./model/baked.jpg");
	bakedTexture.flipY = false;

	useFrame((state, delta) => {
		portalMaterial.current.uTime += delta;
	});

	return (
		<>
			<mesh geometry={nodes.baked.geometry}>
				<meshBasicMaterial map={bakedTexture} />
			</mesh>

			<mesh
				geometry={nodes.poleLightA.geometry}
				position={nodes.poleLightA.position}>
				<meshBasicMaterial color='#ffffe5' />
			</mesh>

			<mesh
				geometry={nodes.poleLightB.geometry}
				position={nodes.poleLightB.position}>
				<meshBasicMaterial color='#ffffe5' />
			</mesh>

			{/* portal */}
			<mesh
				geometry={nodes.portalLight.geometry}
				position={nodes.portalLight.position}
				rotation={nodes.portalLight.rotation}>
				{/* <meshBasicMaterial/> */}
				<portalMaterial ref={portalMaterial} />
			</mesh>

			<Sparkles
				size={6}
				scale={[4, 2, 4]}
				position-y={1}
				speed={0.9}
				count={40}
			/>
		</>
	);
}

export default Model;
