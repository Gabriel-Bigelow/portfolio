import { SyntheticEvent, useEffect, useState } from "react";
import NavArrows from "../../_components/NavArrows";
import Terminal from "../../_components/Terminal";
import SkillsText from "./SkillsText";
import SkillsLogos from "./SkillsLogos";
import { logos } from "../../_resources/images/_logos/_logos";
import { sendToast, toastAutoCloseDelay } from "../../helpers";

export type StaticProjectProps = {
	hovered: string;
	selected: string;
	setSelected: Function;
	handleMouseEvent: Function;
};

const frontEndList = [
	"TypeScript",
	"JavaScript",
	"React",
	"Redux",
	"HTML",
	"CSS",
	"Liquid",
	"Tailwind",
	"Toastify",
	"Chart.js",
];
const backEndList = [
	"Node.js",
	"Express.js",
	"MySQL",
	"PostgreSQL",
	"GraphQL",
	"Jest",
	"Mocha",
	"Chai",
];
const skillList = [
	"RESTful API design / development",
	"API versioning and maintenance",
	"API Security",
	"Troubleshooting / debugging",
	"Performance monitoring / optimization",
	"UX / UI",
	"Unit Testing",
	"Accessibility",
	"EDI",
	"AWS",
	"Netlify",
	"Shopify",
	"Google APIs",
	"pdfmake",
];
const techList = [
	"Visual Studio Code",
	"Git",
	"Command Line",
	"DBeaver",
	"Postbird",
	"Postman",
	"Node Package Manager",
	"Adobe Photoshop",
	"Adobe Premiere Pro",
	"Chrome Dev Tools",
];

export const skillsLogosMap = [
	...frontEndList,
	...backEndList,
	...skillList,
	...techList,
].filter((logoName) => (logos as any)[logoName]);

export default function Skills() {
	const mainBodyTarget = [`These are some of the technologies that I use!`];

	const [hovered, setHovered] = useState("");
	const [toastDisplayed, setToastDisplayed] = useState(false);

	function handleMouseEvent(e: SyntheticEvent, logoName: string) {
		if (
			e.type === "mouseover" &&
			logoName === "Toastify" &&
			!toastDisplayed
		) {
			sendToast({ message: "This is Toastify!" });
			setToastDisplayed(true);
			setTimeout(() => {
				setToastDisplayed(false);
			}, toastAutoCloseDelay);
		}
		if (e.type === "mouseover")
			setHovered(logoName.replaceAll(/\W/gm, "").toLowerCase());
		if (e.type === "mouseout") setHovered("");
	}

	return (
		<div className="flex flex-col gap-[2rem]">
			<NavArrows left="/projects" right="/contact" />
			<Terminal mainBodyTarget={mainBodyTarget}>
				<div className="flex flex-col gap-[2rem]">
					<SkillsText
						frontEndList={frontEndList}
						backEndList={backEndList}
						skillsList={skillList}
						techList={techList}
						handleMouseEvent={handleMouseEvent}
						hovered={hovered}
					/>
					<SkillsLogos
						handleMouseEvent={handleMouseEvent}
						hovered={hovered}
					/>
				</div>
			</Terminal>
		</div>
	);
}
