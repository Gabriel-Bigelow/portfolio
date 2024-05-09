import { useEffect, useState } from "react";
import NavArrow from "./NavArrow";

type NavArrowsProps = {
	left: string;
	right: string;
};

export default function NavArrows({ left, right }: NavArrowsProps) {
	const [render, setRender] = useState(false);

	useEffect(() => {
		const listenToWindow = () => setRender(window.innerWidth >= 900);
		window.addEventListener("resize", listenToWindow);
		if (window.innerWidth >= 900) setRender(true);
		return () => window.removeEventListener("resize", listenToWindow);
	}, []);
	return (
		<>
			{render && (
				<>
					<NavArrow link={left} direction="left" />
					<NavArrow link={right} direction="right" />
				</>
			)}
		</>
	);
}
