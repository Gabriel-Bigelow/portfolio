import { MouseEvent, SyntheticEvent } from "react";
import { logos } from "../../_resources/images/_logos/_logos";
import { skillsLogosMap } from "./Skills";

type SkillsLogosProps = {
	hovered: string;
	handleMouseEvent: Function;
};

export default function SkillsLogos({
	hovered,
	handleMouseEvent,
}: SkillsLogosProps) {
	return (
		<div className="flex flex-wrap gap-[2rem] justify-around">
			{skillsLogosMap.map((logoName) => {
				return (
					<div
						className={`flex items-end h-[5rem] w-auto duration-300 p-[.5rem] ${
							hovered &&
							hovered ===
								logoName.replaceAll(/\W/gm, "").toLowerCase()
								? "scale-[1.2] shadow-cool-aura bg-[hsla(217,60%,60%,0.10)] rounded-3xl"
								: "opacity-90 shadow-none"
						} [&>*]:h-full`}
						key={logoName}
						id={`skills__logos__${logoName}`}
						onMouseOver={(e: SyntheticEvent) =>
							handleMouseEvent(e, logoName)
						}
						onMouseOut={(e: SyntheticEvent) =>
							handleMouseEvent(e, logoName)
						}
						title={logoName}
					>
						{(logos as any)[logoName]()}
					</div>
				);
			})}
		</div>
	);
}
