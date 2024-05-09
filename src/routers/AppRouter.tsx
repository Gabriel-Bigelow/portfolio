import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../screens/Home/Home";
import SectionContent from "../_components/SectionContent";
import { useEffect, useState } from "react";
import {
	animationDelay,
	findLocationIndex,
	navAnimationDelay,
	paths,
} from "../helpers";
import Contact from "../screens/Contact/Contact";
import Skills from "../screens/Skills/Skills";
import Projects from "../screens/Projects/Projects";
import AboutMe from "../screens/AboutMe/AboutMe";

export default function AppRouter() {
	const location = useLocation();

	const [initialRender, setInitialRender] = useState(true);
	const [locationIndex, setLocationIndex] = useState(findLocationIndex());

	useEffect(() => {
		setInitialRender(false);
	}, []);

	function animateFromNav() {
		const newLocation = window.location.pathname;
		const newIndex = findLocationIndex(newLocation);

		const el = document.getElementById("content-container");
		if (!el) return;

		const leftToRight = [locationIndex, newIndex].every((num) =>
			[0, paths.length - 1].includes(num)
		)
			? newIndex > locationIndex
			: newIndex < locationIndex;

		setTimeout(() => {
			el.style.left = leftToRight ? "-100%" : "100%";
			// el.style.left = newIndex < locationIndex ? "-100%" : "100%";
		}, 0);
		setTimeout(() => {
			el.style.transitionDuration = `${navAnimationDelay * 2}ms`;
			el.style.left = "0%";
			setTimeout(() => {
				el.style.transitionDuration = "0s";
			}, navAnimationDelay);
		}, 100);
	}

	function animateContentContainer(newIndex: number) {
		animateFromNav();
	}

	useEffect(() => {
		const newLocationIndex = findLocationIndex();
		if (!initialRender) animateContentContainer(newLocationIndex);
		setLocationIndex(newLocationIndex);
	}, [location.pathname]);

	return (
		<div id="content-container" className="relative">
			<div id="content-container__inner">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about-me" element={<AboutMe />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/skills" element={<Skills />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</div>
		</div>
	);
}
