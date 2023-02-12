import { OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { Perf } from "r3f-perf";

export default function Experience() {
	const { position, scale, color } = useControls("sphere", {
		position: { value: { x: -2, y: 0 }, step: 0.01, joystick: "invertY" },
		color: { value: "#ff0000" },
		scale: { value: 1, min: 0.1, max: 2, step: 0.1 },
		myButton: () => console.log("hello"),
		myInput: { value: "hello", onChange: (v) => console.log(v) },
		mySelect: { value: "b", options: { a: "A", b: "B", c: "C" } },
	});

	const { perfVisible } = useControls("perf", {
		perfVisible: true,
	});
	return (
		<>
			{perfVisible && <Perf position='top-left' />}
			<OrbitControls makeDefault />

			<directionalLight position={[1, 2, 3]} intensity={1.5} />
			<ambientLight intensity={0.5} />

			<mesh position={[position.x, position.y, 0]} scale={scale}>
				<sphereGeometry />
				<meshStandardMaterial color={color} />
			</mesh>

			<mesh position-x={2} scale={1.5}>
				<boxGeometry />
				<meshStandardMaterial color='mediumpurple' />
			</mesh>

			<mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
				<planeGeometry />
				<meshStandardMaterial color='greenyellow' />
			</mesh>
		</>
	);
}
