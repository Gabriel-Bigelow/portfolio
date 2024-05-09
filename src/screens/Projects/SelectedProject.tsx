import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { ProfessionalExperienceData, ProjectData } from "../../helpers";
import ProjectLinks from "./ProjectLinks";
import CloseButton from "../../_components/CloseButton";
import { StaticProjectProps } from "./Projects";
import { useSearchParams } from "react-router-dom";
import Project from "./Project";
import ProfessionalExperience from "./ProfessionalExperience";

type ProjectProps = {
	data: ProfessionalExperienceData | ProjectData;
	staticProjectProps: StaticProjectProps;
	closeProject: Function;
};

export default function SelectedProject({
	data,
	staticProjectProps,
	closeProject,
}: ProjectProps) {
	const isPro = data instanceof ProfessionalExperienceData;

	const closeButtonFunction = (e: SyntheticEvent) => closeProject(e, true);

	return (
		<div
			id="js-selected-project__container"
			className="fixed top-0 left-0 block items-center justify-center p-[3rem] w-[100vw] h-[100vh] z-10 duration-300"
			onClick={(e: SyntheticEvent) => closeProject(e)}
			style={{ backgroundColor: "rgba(0,0,0,0)" }}
		>
			<div
				className={`relative left-[50%] translate-x-[-50%] top-0 flex items-center justify-center h-full`}
			>
				{isPro && (
					<ProfessionalExperience
						data={data}
						staticProjectProps={staticProjectProps}
						closeProject={closeButtonFunction}
					/>
				)}
				{!isPro && ProjectData && (
					<Project
						projectData={data}
						staticProjectProps={staticProjectProps}
						closeProject={closeButtonFunction}
					/>
				)}
			</div>
		</div>
	);
}
