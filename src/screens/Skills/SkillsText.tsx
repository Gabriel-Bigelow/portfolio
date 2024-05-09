import List from "../../_components/List";

type SkillsTextProps = {
	frontEndList: string[];
	backEndList: string[];
	skillsList: string[];
	techList: string[];
	handleMouseEvent: Function;
	hovered: string;
};

export default function SkillsText({
	frontEndList,
	backEndList,
	skillsList,
	techList,
	handleMouseEvent,
	hovered,
}: SkillsTextProps) {
	const titleStyle = "text-[2rem] font-bold text-[#ffde7c]";

	return (
		<ul className="flex flex-wrap gap-[2rem] justify-between [&>*]:max-w-[50%]">
			<li>
				<span className={titleStyle}>Front-End</span>
				<List
					items={frontEndList}
					hovered={hovered}
					handleMouseEvent={handleMouseEvent}
				/>
			</li>
			<li>
				<span className={titleStyle}>Back-End</span>
				<List
					items={backEndList}
					hovered={hovered}
					handleMouseEvent={handleMouseEvent}
				/>
			</li>
			<li>
				<span className={titleStyle}>Add. Skills</span>
				<List
					items={skillsList}
					hovered={hovered}
					handleMouseEvent={handleMouseEvent}
				/>
			</li>
			<li>
				<span className={titleStyle}>Tools</span>
				<List
					items={techList}
					hovered={hovered}
					handleMouseEvent={handleMouseEvent}
				/>
			</li>
		</ul>
	);
}
