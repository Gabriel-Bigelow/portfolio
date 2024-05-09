import { SyntheticEvent } from "react";
import { toast } from "react-toastify";

export const animationDelay = 500;

export const toastAutoCloseDelay = 3000;
export function sendToast(resOrErr: any) {
	toast(resOrErr.message, {
		position: "top-right",
		autoClose: toastAutoCloseDelay,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
		theme: "dark",
	});
}
export function closePopout(
	e: SyntheticEvent | MouseEvent,
	classNames: string | string[],
	setShowPopout: Function = () => {},
	value: any = false,
	cleanup = () => {}
) {
	if (typeof classNames === "string") classNames = [classNames];
	let element = e.target as HTMLElement;
	let inPopout = false;
	(() => {
		do {
			for (let name of classNames) {
				if (element.classList.contains(name)) return (inPopout = true);
			}
			element = element.parentNode as HTMLElement;
			if (!element) break;
		} while (element.parentNode);
	})();
	if (!inPopout) {
		setShowPopout(value);
		cleanup();
	}
	return !inPopout;
}

export const prettyLink = (link: string) =>
	link === "/"
		? "/"
		: link
				.replaceAll(/[-]/g, " ")
				.trim()
				.split(" ")
				.map((w) => [w[0].toUpperCase(), w.slice(1)].join(""))
				.join(" ");

export const prettierLink = (link: string) =>
	link === "/"
		? "/"
		: link
				.replaceAll(/[\/-]/g, " ")
				.trim()
				.split(" ")
				.map((w) => [w[0].toUpperCase(), w.slice(1)].join(""))
				.join(" ");

export const tagRegex = /<[^\/]+>|<\/\w+>/gm;
export const endTagRegex = /<\/\w+>/;

// types
export class ProfessionalExperienceData {
	constructor(
		role: string,
		organization: string,
		startDate: string,
		endDate: string,
		technologies: string[],
		summary: string,
		sectionList: {
			title: string;
			summary: string;
			featureList?: { title: string; features: string[] }[];
		}[],
		preview: any,
		links: { href: string; logo?: any }[]
	) {
		this.role = role;
		this.startDate = startDate;
		this.endDate = endDate;
		this.organization = organization;
		this.technologies = technologies;
		this.summary = summary;
		this.sectionList = sectionList;
		this.preview = preview;
		this.links = links;
	}
	role: string;
	startDate: string;
	endDate: string;
	organization: string;
	technologies?: string[];
	summary: string;
	sectionList: {
		title: string;
		summary: string;
		featureList?: { title: string; features: string[] }[];
	}[];
	preview: any;
	links: { href: string; logo?: any }[];
	reflection: any;
}

export class ProjectData {
	constructor(
		title: string,
		description: {
			short: string;
			long: any;
		},
		preview: {
			static: any;
			video: any;
		},
		links: {
			steam?: string;
			github: string;
			live?: { href: string; logo?: any };
		},
		reflection: any
	) {
		this.title = title;
		this.description = description;
		this.preview = preview;
		this.links = links;
		this.reflection = reflection;
	}
	title: string;
	description: { short: string; long: any };
	preview: { static: any; video: any };
	links: {
		steam?: string;
		github: string;
		live?: { href: string; logo?: any };
	};
	reflection: any;
}

export const paths = ["", "about-me", "projects", "skills", "contact"].map(
	(name) => `/${name}`
);

export const findLocationIndex = (pathToFind = window.location.pathname) =>
	paths.findIndex((pathname) => pathname === pathToFind);

export const navAnimationDelay = 150;
export function animateThenNav(navigate: Function, newLocation: string) {
	if (window.location.pathname === newLocation) return;
	const locationIndex = findLocationIndex(window.location.pathname);
	const newIndex = findLocationIndex(newLocation);

	const rightToLeft = [locationIndex, newIndex].every((num) =>
		[0, paths.length - 1].includes(num)
	)
		? newIndex < locationIndex
		: newIndex > locationIndex;

	const el = document.getElementById("content-container");
	if (!el) return;
	setTimeout(() => {
		el.style.transitionDuration = `${navAnimationDelay}ms`;
		el.style.left = "0%";
	}, 0);
	setTimeout(() => {
		el.style.left = rightToLeft ? "-100%" : "100%";
		setTimeout(() => {
			el.style.transitionDuration = "0s";
			setTimeout(() => navigate(newLocation), navAnimationDelay);
		}, navAnimationDelay);
	}, 100);
}
