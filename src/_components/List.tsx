type ListProps = {
	items: string[];
	hovered: string;
	handleMouseEvent?: Function;
};

export default function List({
	items,
	hovered,
	handleMouseEvent = () => {},
}: ListProps) {
	return (
		<ul className="list-disc">
			{items.map((item) => (
				<li
					key={`skills__${item}-list-item`}
					className="ml-[1rem]"
					onMouseOver={(e) => handleMouseEvent(e, item)}
					onMouseOut={(e) => handleMouseEvent(e)}
				>
					<div
						className={`duration-300 origin-left ${
							hovered ===
								item.replaceAll(/\W/gm, "").toLowerCase() &&
							"scale-[1.25] text-gold"
						}`}
					>
						{item}
					</div>
				</li>
			))}
		</ul>
	);
}
