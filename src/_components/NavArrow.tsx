import "./component_styles/navArrow.css";
import arrow from "../_resources/images/arrow.svg";
import { useNavigate } from "react-router-dom";
import { animateThenNav, prettierLink } from "../helpers";

type NavArrowProps = {
	link: string;
	direction?: "left" | "right";
};

export default function NavArrow({ link, direction = "right" }: NavArrowProps) {
	const navigate = useNavigate();

	return (
		<img
			className={`nav-arrow fixed z-10 duration-[500ms] h-[4.375rem] hover:scale-[1.2] cursor-pointer top-[10rem] ${
				direction !== "right"
					? "left-[1rem] rotate-180"
					: "right-[1rem]"
			}`}
			src={arrow}
			alt={`navigate to ${prettierLink(link)}`}
			title={`navigate to ${prettierLink(link)}`}
			onClick={() => animateThenNav(navigate, link)}
		/>
	);
}
