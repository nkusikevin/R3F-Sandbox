import { OrbitControls, Center } from "@react-three/drei";
import Model from "./Model";

export default function Experience() {
	return (
		<>
			<color args={["#030202"]} attach='background' />
			<OrbitControls makeDefault />

			<Center>
				<Model />
			</Center>
		</>
	);
}
