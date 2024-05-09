import { ProfessionalExperienceData } from "../../helpers";

type ProfessionalExperienceProps = {
	data: ProfessionalExperienceData;
	staticProjectProps: any;
};

export default function ProfessionalExperiencePreview({
	staticProjectProps,
	data,
}: ProfessionalExperienceProps) {
	const { hovered, handleMouseEvent } = staticProjectProps;

	const titleLineStyle =
		"text-[1.25rem] leading-[1.25rem] font-semibold font-lemonMilk";

	const roleCompany = [
		"pw",
		[data.role, data.organization].join("_at_"),
	].join("_");
	return (
		<div
			onMouseOver={(e: any) => handleMouseEvent(e, roleCompany)}
			onMouseOut={handleMouseEvent}
			onClick={(e: any) => handleMouseEvent(e, roleCompany)}
			className={`relative flex sm:flex-wrap gap-[2rem] p-[1rem] opacity-100 border-[1px] border-black/0 max-h-[70vh] overflow-auto  ${
				[hovered].includes(roleCompany) &&
				`bg-black/20 shadow-cool border-black/20 rounded-3xl backdrop-blur-[2px]`
			} duration-300 justify-center cursor-pointer [&>*]:pointer-events-none`}
		>
			<div className="sticky top-0">
				<p className={titleLineStyle + " text-[1rem] pb-[.5rem] "}>
					{data.startDate} - {data.endDate}
				</p>
				<div className="flex items-center justify-center">
					<div className="flex items-center justify-center max-w-[14rem] max-h-[14rem]">
						<img className="w-auto h-auto" src={data.preview} />
					</div>
				</div>
			</div>
			<div className="grow flex flex-col gap-[.5rem]">
				<span className={titleLineStyle}>
					{data.role}
					<span className="text-satblue"> · </span>
					{data.organization}
				</span>
				<p className="max-w-[40em] text-[whitesmoke]">{data.summary}</p>
			</div>
		</div>
	);
}
