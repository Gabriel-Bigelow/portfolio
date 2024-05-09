import { SyntheticEvent, useEffect } from "react";
import { ProjectData } from "../../helpers";
import { StaticProjectProps } from "./Projects";

type ProjectProps = {
	projectData: ProjectData;
	staticProjectProps: StaticProjectProps;
};

export default function ProjectPreview({
	projectData,
	staticProjectProps,
}: ProjectProps) {
	const { hovered, selected, handleMouseEvent } = staticProjectProps;

	useEffect(() => {
		if (hovered !== selected) {
			const video = document.getElementById(
				`${hovered}-video`
			) as HTMLVideoElement;
			if (hovered.includes(projectData.title)) {
				video.currentTime = 0;
				video.play();
			}
		}
	}, [hovered]);

	return (
		<div
			id={projectData.title}
			className={`relative grid gap-[2rem] lg:w-[calc(25%-2rem)] p-[1rem] opacity-100 border-[1px] border-black/0  ${
				[hovered].includes(projectData.title) &&
				`bg-black/20 shadow-cool border-black/20 rounded-3xl backdrop-blur-[2px]`
			} duration-300 hover:scale-[1.1] cursor-pointer [&>*]:pointer-events-none`}
			onMouseOver={(e: SyntheticEvent) =>
				handleMouseEvent(e, projectData.title)
			}
			onMouseOut={(e: SyntheticEvent) =>
				handleMouseEvent(e, projectData.title)
			}
			onClick={(e: SyntheticEvent) =>
				handleMouseEvent(e, projectData.title)
			}
		>
			<div className="flex flex-col items-center">
				<div className="h-[3rem] w-[3rem]">
					{projectData?.links?.live?.logo}
				</div>
				<h2 className="font-bold font-lemonMilk text-center">
					{projectData.title}
				</h2>
			</div>
			<div className="grid grid-cols-1 grid-rows-1 classname pointer-events-none">
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
						className={`col-start-1 row-start-1 opacity-0 w-full pointer-events-none ${
							[hovered, selected].includes(projectData.title) &&
							"opacity-100"
						}`}
					>
						<source src={projectData.preview.video} />
					</video>
				)}
			</div>
			<h3 className="text-[1rem] font-semibold">
				{projectData.description.short}
			</h3>
		</div>
	);
}
