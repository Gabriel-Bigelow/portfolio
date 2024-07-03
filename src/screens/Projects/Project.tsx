import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { ProjectData, closePopout } from "../../helpers";
import ProjectLinks from "./ProjectLinks";
import CloseButton from "../../_components/CloseButton";
import { StaticProjectProps } from "./Projects";

type ProjectProps = {
	projectData: ProjectData;
	staticProjectProps: StaticProjectProps;
	closeProject: Function;
};

export default function Project({
	projectData,
	staticProjectProps,
	closeProject,
}: ProjectProps) {
	const { hovered, selected, handleMouseEvent } = staticProjectProps;

	useEffect(() => {
		const video = document.getElementById(
			`${selected}-video`
		) as HTMLVideoElement;
		if (selected.includes(projectData.title)) {
			video.src = projectData.preview.video;
			setTimeout(() => {
				video.currentTime = 0;
				// video.play();
			});
		}
	}, [selected]);

	return (
		<div
			id="js-selected-project"
			className={`js-selected-project relative py-[2rem] pt-[3rem] px-[.5rem] h-full w-full border-black/20 max-w-[calc(50em+2rem)] ${
				[hovered, selected].includes(projectData.title) &&
				`bg-black/80 shadow-cool border-[1px] rounded-3xl backdrop-blur-[2px]`
			} duration-300`}
			style={{ scale: "0" }}
		>
			<div className="flex flex-col gap-[2rem] h-full overflow-y-auto px-[1rem]">
				<CloseButton onClick={closeProject} />
				<div className="flex flex-col items-center">
					<div className="h-[5rem] w-[5rem]">
						{projectData?.links?.live?.logo}
					</div>
					<h2 className="font-bold font-lemonMilk text-center text-[2.5rem]">
						{projectData.title}
					</h2>
				</div>
				<div className="grid grid-cols-1 grid-rows-1 classname">
					{projectData.preview.static && (
						<img
							src={projectData.preview.static}
							className="col-start-1 row-start-1 w-full h-auto"
							alt={`${projectData.title} preview`}
						/>
					)}
					{projectData.preview.video && (
						<video
							id={`${projectData.title}-video`}
							onClick={(e: any) => e.preventDefault()}
							loop
							muted
							autoPlay
							className={`col-start-1 row-start-1 opacity-0 w-full pointer-events-none ${
								[hovered, selected].includes(
									projectData.title
								) && "opacity-100"
							}`}
						>
							<source src={projectData.preview.video} />
						</video>
					)}
				</div>
				<h3 className="text-[1rem] font-semibold">
					{projectData.description.short}
				</h3>
				{selected === projectData.title && (
					<div
						className={` flex flex-col gap-[2rem] ${
							selected === projectData.title ? "h-full" : "h-0"
						}`}
					>
						{projectData.description.long}
						<ProjectLinks
							title={projectData.title}
							links={projectData.links}
						/>
						{projectData.reflection}
					</div>
				)}
			</div>
		</div>
	);
}
