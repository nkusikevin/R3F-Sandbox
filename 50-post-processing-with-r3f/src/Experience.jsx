import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import {
	EffectComposer,
	Vignette,
	Glitch,
	Noise,
	Bloom,
	DepthOfField,
	SSR,
} from "@react-three/postprocessing";
import { BlendFunction, GlitchMode } from "postprocessing";
import Effect from "./Effects";

export default function Experience() {
	return (
		<>
			<color attach='background' args={["#fff"]} />
			<EffectComposer multisampling={8}>
				<Vignette
					eskil={false}
					offset={0.1}
					darkness={1.1}
					blendFunction={BlendFunction.NORMAL}
				/>
				{/* <Glitch
					delay={[0.5, 1.5]}
					duration={[0.1, 0.5]}
					strength={[0.1, 0.5]}
					mode={GlitchMode.SPORADIC}
					blendFunction={BlendFunction.COLOR_BURN}
					active
				/> */}

				{/* <Noise blendFunction={BlendFunction.SOFT_LIGHT} opacity={0.1} /> */}

				<Bloom
					mipmapBlur
					luminanceThreshold={0}
					luminanceSmoothing={0.025}
					intensity={0.1}
					height={300}
				/>
				<DepthOfField
					focalLength={0.025}
					focusDistance={0.025}
					bokehScale={6}
				/>
				<Effect />
			</EffectComposer>

			<Perf position='top-left' />

			<OrbitControls makeDefault />

			<directionalLight castShadow position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<mesh castShadow position-x={-2}>
				<sphereGeometry />
				<meshStandardMaterial color='green' />
			</mesh>

			<mesh castShadow position-x={2} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color='orange' />
			</mesh>

			<mesh
				receiveShadow
				position-y={-1}
				rotation-x={-Math.PI * 0.5}
				scale={10}>
				<planeGeometry />
				<meshStandardMaterial color='black' metalness={0} roughness={0} />
			</mesh>
		</>
	);
}
