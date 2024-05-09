import { Link, useLocation, useNavigate } from "react-router-dom";
import { animateThenNav, prettierLink, prettyLink } from "../helpers";
import { SyntheticEvent } from "react";

const linkStyle =
	"duration-[500ms] hover:scale-[1.3] hover:text-white text-[rgb(100,100,100)] duration-[500ms] pointer-events-auto";

export default function Navbar() {
	const location = useLocation();
	const navigate = useNavigate();

	type NavbarLinkProps = {
		to: string;
	};

	function handleNavigate(e: SyntheticEvent, location: string) {
		e.preventDefault();
		animateThenNav(navigate, location);
	}

	function NavbarLink({ to }: NavbarLinkProps) {
		const activeLink = (to: string) =>
			location.pathname.includes(to) && "!text-gold";

		return (
			<li
				className={`${linkStyle} ${activeLink(to)} font-bold uppercase`}
			>
				<Link
					to={to}
					title={`Navigate to ${prettierLink(to)} section.`}
					onClick={(e) => handleNavigate(e, to)}
				>
					{prettyLink(to)}
				</Link>
			</li>
		);
	}

	return (
		<div
			id="navbar"
			className="flex p-[2rem] sm:p-[1rem] justify-around items-center sm:items-end"
		>
			<Link
				to="/"
				onClick={(e) => handleNavigate(e, "/")}
				className={`h-[100%] text-[2rem] sm:[&>*]:leading-[2rem] whitespace-nowrap flex gap-[0.25rem] font-oswald items-center ${linkStyle}`}
			>
				<span className="text-blue">&lt;</span>
				<span className="text-white">gb/</span>
				<span className="text-gold">&gt;</span>
			</Link>
			<ul className="flex gap-[1.5rem] flex-wrap items-center justify-center">
				<NavbarLink to="/about-me" />
				<NavbarLink to="/projects" />
				<NavbarLink to="/skills" />
				<NavbarLink to="/contact" />
			</ul>
		</div>
	);
}
