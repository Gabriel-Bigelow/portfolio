import { useEffect } from "react";
import { ProfessionalExperienceData } from "../../helpers";
import CloseButton from "../../_components/CloseButton";
import { NavLink } from "react-router-dom";

type ProfessionalExperienceProps = {
	data: ProfessionalExperienceData;
	staticProjectProps: any;
	closeProject: Function;
};

export default function ProfessionalExperience({
	staticProjectProps,
	data,
	closeProject,
}: ProfessionalExperienceProps) {
	const { handleMouseEvent, selected } = staticProjectProps;

	const titleLineStyle =
		"text-[1.25rem] leading-[1rem] font-semibold font-lemonMilk";

	type FeatureProps = {
		section: string;
		title: string;
		features: string[];
	};

	const clickedLink = decodeURI(window.location.hash.replaceAll("#", ""));

	function InfoPanel() {
		type ContentLinkProps = {
			linkId: string;
			linkInnerHTML?: string;
		};
		function ContentLink({
			linkId,
			linkInnerHTML = linkId,
		}: ContentLinkProps) {
			return (
				<a
					href={`#${linkId}`}
					className={`${
						clickedLink === linkId && "text-satblue"
					} hover:underline`}
				>
					{linkInnerHTML}
				</a>
			);
		}

		function TableOfContents() {
			return (
				<div className="flex flex-col max-w-full truncate ">
					<span className="text-center text-[1.25rem] font-bold">
						Contents
					</span>
					<ul>
						<li className="font-bold truncate text-[whitesmoke]">
							<ContentLink linkId="Summary" />
						</li>
						{data.sectionList.map((section, si) => (
							<li
								key={[si, section].join("-")}
								className="font-bold"
							>
								<ContentLink linkId={section.title} />
								<ol className="pl-[1rem] font-normal">
									{section.featureList?.map((feature, fi) => (
										<li
											className="truncate text-[whitesmoke]"
											key={[
												si,
												fi,
												section,
												feature,
											].join("-")}
										>
											<ContentLink
												linkId={[
													section.title,
													feature.title,
												].join("-")}
												linkInnerHTML={feature.title}
											/>
										</li>
									))}
								</ol>
							</li>
						))}
					</ul>
				</div>
			);
		}

		return (
			<div className="sticky top-0 flex flex-col gap-[2rem] max-w-[20rem]">
				<div className="flex flex-col gap-[1rem]">
					<p
						className={
							titleLineStyle +
							" text-[.75rem] pb-[.5rem] text-center"
						}
					>
						{data.startDate} - {data.endDate}
					</p>
					<div className="flex items-center justify-center">
						<div className="flex items-center justify-center max-w-[14rem] max-h-[14rem]">
							<img className="w-auto h-auto" src={data.preview} />
						</div>
					</div>
				</div>
				<TableOfContents />
			</div>
		);
	}

	function Feature({ section, title, features }: FeatureProps) {
		const id = [section, title].join("-");

		return (
			<li id={id}>
				<h5
					className={`font-semibold capitalize duration-300 ${
						clickedLink === id && "text-gold"
					}`}
				>
					{title}
				</h5>
				<ul className="list-[circle] pl-[1.25rem]">
					{features.map((f, i) => (
						<li className="" key={[f, i, "details"].join("-")}>
							{f}
						</li>
					))}
				</ul>
			</li>
		);
	}

	const roleCompany = [
		"pw",
		[data.role, data.organization].join("_at_"),
	].join("_");

	return (
		<div
			id="js-selected-project"
			style={{ scale: "0" }}
			onMouseOver={(e: any) => handleMouseEvent(e, roleCompany)}
			onMouseOut={handleMouseEvent}
			className={`js-selected-project relative flex gap-[2rem] pl-[1rem] pr-[0.5rem] py-[2rem] pt-[3rem] opacity-100 border-[1px] h-full  bg-black/80 shadow-cool border-black/20 rounded-3xl backdrop-blur-[2px] duration-300`}
		>
			<CloseButton onClick={closeProject} />
			<div className="relative flex gap-[2rem] h-full">
				{window.innerWidth >= 1000 && <InfoPanel />}
				<div className="grow flex flex-col gap-[.5rem]">
					<div className="grow">
						<span className={titleLineStyle}>
							{data.role}
							<span className="text-satblue"> · </span>
							{data.organization}
						</span>
					</div>
					<div className="flex flex-col gap-[.5rem] h-full overflow-auto pr-[1rem]">
						{data.technologies && (
							<div>
								{/* <h5 className="font-semibold">Technologies:</h5> */}
								<div className="flex flex-wrap gap-x-[1rem] gap-y-[4px] max-w-[45em]">
									{data.technologies.map((t) => (
										<span className="text-satblue rounded-3xl bg-blue/20 px-[6px]">
											{t}
										</span>
									))}
								</div>
							</div>
						)}

						<p
							id={"Summary"}
							className="max-w-[45em] text-[whitesmoke]"
						>
							{data.summary}
						</p>

						{/* long description */}
						{selected === roleCompany && (
							<div className="flex flex-col [&>*]:max-w-[45em] [&>p]:text-[whitesmoke]">
								<ul className="flex flex-col gap-[2rem]">
									{data.sectionList.map((section) => (
										<li
											className="flex flex-col gap-[1rem]"
											key={section.title}
										>
											<div id={section.title}>
												<h4
													className={`text-[1.25rem] font-semibold ${
														clickedLink ===
															section.title &&
														"text-gold"
													}`}
												>
													{section.title}
												</h4>
												<p>{section.summary}</p>
											</div>
											{section.featureList && (
												<ul className="flex flex-col gap-[1rem]">
													{section.featureList?.map(
														(f) => (
															<Feature
																section={
																	section.title
																}
																title={f.title}
																features={
																	f.features
																}
															/>
														)
													)}
												</ul>
											)}
										</li>
									))}
								</ul>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
