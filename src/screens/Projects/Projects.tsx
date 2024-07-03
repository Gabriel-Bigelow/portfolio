import { SyntheticEvent, useEffect, useState } from "react";
import NavArrows from "../../_components/NavArrows";
import Terminal from "../../_components/Terminal";
import Project from "./Project";
import { googleFlashCards } from "./projectData/googleFlashCards";
import { lurker } from "./projectData/lurker";
import {
	ProfessionalExperienceData,
	ProjectData,
	closePopout,
} from "../../helpers";
import { jammming } from "./projectData/jammming";
import { superBallMania } from "./projectData/superBallMania";
import ProjectPreview from "./ProjectPreview";
import ProfessionalExperiencePreview from "./ProfessionalExperiencePreview";
import { factoryPure } from "./professionalExperienceData/factoryPure";
import SelectedProject from "./SelectedProject";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export type StaticProjectProps = {
	hovered: string;
	selected: string;
	setSelected: Function;
	handleMouseEvent: Function;
};

export default function Projects() {
	const mainBodyTarget = [
		`My favorite projects always involve challenging myself, because they make me a better developer
    and scratch my itch for learning.`,
	];

	const professionalProjects = [factoryPure];
	const projects = [lurker, superBallMania, googleFlashCards, jammming];

	const params = new URLSearchParams(window.location.search);

	const [hovered, setHovered] = useState("");
	const [selected, setSelected] = useState(params.get("project") || "");

	const selectedProfessionalProject =
		selected.startsWith("pw_") &&
		professionalProjects.find(
			(p) =>
				p.role === selected.split("pw_")[1].split("_at_")[0] &&
				p.organization === selected.split("pw_")[1].split("_at_")[1]
		);
	const selectedProject =
		!selectedProfessionalProject &&
		projects.find((p) => p.title === selected);

	function handleMouseEvent(event: SyntheticEvent, title: string) {
		if (hovered !== title && event.type === "mouseover") setHovered(title);
		if (event.type === "mouseout") setHovered("");
		if (event.type === "click" && selected !== title && title) {
			setSelected(title);
			window.history.pushState(
				undefined,
				title,
				`/projects?project=${title}`
			);
		}
	}
	function animateProjectOpening() {
		const projectContainerEl = document.getElementById(
			"js-selected-project__container"
		);
		const projectEl = document.getElementById("js-selected-project");
		if (!projectContainerEl || !projectEl) return;
		setTimeout(() => {
			projectContainerEl.style.backgroundColor = "rgba(0,0,0,0.4)";
			projectEl.style.scale = "1";
		}, 0);
	}
	function animateProjectClosing() {
		const projectContainerEl = document.getElementById(
			"js-selected-project__container"
		);
		const projectEl = document.getElementById("js-selected-project");
		if (!projectContainerEl || !projectEl) return;
		projectContainerEl.style.backgroundColor = "rgba(0,0,0,0)";
		projectEl.style.scale = "0";
	}

	const closeProject = (e: SyntheticEvent, skipClassCheck = false) => {
		function close() {
			animateProjectClosing();
			setTimeout(() => {
				window.history.pushState("", "", "/projects");
				setSelected("");
			}, 200);
		}

		if (selected) {
			if (skipClassCheck) return close();
			closePopout(e, ["js-selected-project"], close);
		}
	};

	useEffect(() => {
		animateProjectOpening();
	}, [selected]);

	const staticProjectProps: StaticProjectProps = {
		hovered,
		selected,
		setSelected,
		handleMouseEvent,
	};

	return (
		<div className="flex flex-col gap-[2rem]">
			<NavArrows left="/about-me" right="/skills" />
			<Terminal mainBodyTarget={mainBodyTarget}>
				<div className="flex flex-col w-full items-center mb-[4rem] gap-[2rem]">
					<h3 className="text-[2rem] font-bold text-center">
						Professional Experience
					</h3>
					<ProfessionalExperiencePreview
						staticProjectProps={staticProjectProps}
						data={factoryPure}
					/>
				</div>
				<div className="flex flex-col gap-[2rem]">
					<p className="text-[1.5rem] font-semibold text-center">
						Check out some of my personal projects!
					</p>
					<div className="js-projects relative flex justify-between gap-[2rem] flex-wrap duration-300 mb-[2rem]">
						{projects.map((p) => (
							<ProjectPreview
								projectData={p}
								staticProjectProps={staticProjectProps}
								key={p.title}
							/>
						))}
					</div>
				</div>
			</Terminal>

			{(selectedProfessionalProject || selectedProject) && (
				<SelectedProject
					data={
						(selectedProfessionalProject || selectedProject) as
							| ProjectData
							| ProfessionalExperienceData
					}
					staticProjectProps={staticProjectProps}
					closeProject={closeProject}
				/>
			)}
		</div>
	);
}
