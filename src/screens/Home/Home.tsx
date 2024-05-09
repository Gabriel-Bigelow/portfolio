import { useEffect } from "react";
import city from "../../_resources/images/home/city.webp";
import crane from "../../_resources/images/home/crane.webp";
import { useNavigate } from "react-router-dom";
import NavArrows from "../../_components/NavArrows";

export default function Home() {
	const navigate = useNavigate();
	useEffect(() => {
		animateHome();
	}, []);

	const textClassName = (num: number) => `js__lets-build-together-${num}`;
	const animationTextStyle = (num: number) =>
		`${textClassName(num)} duration-[500ms] opacity-0`;

	function animateHome(startTime = Date.now()) {
		const delay = 0.5;
		const runTime = parseFloat(
			((Date.now() - startTime) / 1000 - delay).toFixed(1)
		);
		const getEls = (className: string) =>
			document.getElementsByClassName(className) as any;

		function styleEls(els: HTMLElement[], property: string, value: string) {
			for (let el of els)
				(el as HTMLElement).style[property as any] = value;
		}
		function fadeIn(className: string) {
			const elements = getEls(className);
			styleEls(elements as any, "opacity", "1");
		}

		if (runTime === 0.5) fadeIn(textClassName(1));
		if (runTime === 0.7) styleEls(getEls(textClassName(1)), "right", "0");
		if (runTime === 1) fadeIn(textClassName(2));
		if (runTime === 1.3) styleEls(getEls(textClassName(2)), "top", "0");
		if (runTime === 1.5) fadeIn(textClassName(3));
		if (runTime === 1.8) styleEls(getEls(textClassName(3)), "left", "0");

		if (runTime > 5) return;

		setTimeout(() => {
			if (runTime < 5) animateHome(startTime);
		}, 1000 / 60);
	}

	return (
		<div id="home" className="bg-image relative">
			<div className="fixed bottom-0 w-[calc(100%-4rem)] pointer-events-none -z-10">
				<div className="fixed left-0 bottom-0 bg-gradient-to-t from-[#14263d] h-[70vh] w-[100vw]"></div>
				<div className="relative pointer-events-none [&>*]:blur-md">
					<img
						className="absolute bottom-0 left-[50%] translate-x-[-50%] min-w-[1000px]"
						src={city}
						alt="background image - a silhouette of the city of Toledo"
						width="100%"
					/>
				</div>

				<div className="relative">
					<img
						className="absolute bottom-0 left-[50%] translate-x-[-50%] min-w-[1000px]"
						src={city}
						alt="background image - a silhouette of the city of Toledo"
						width="100%"
					/>
					<img
						className="absolute bottom-0 right-[20%] h-[35vh]"
						src={crane}
						alt="background image - a silhouette of a crane holding the JavaScript logo"
					/>
				</div>
			</div>
			<NavArrows left={"/contact"} right={"/about-me"} />
			<div className="flex flex-col gap-[2rem] z-10">
				<div className="mt-[5rem]">
					<h1 className="text-center font-lemonMilk sm:text-[3rem] md:text-[4.5rem] font-400 duration-[500ms] leading-[4.5rem]">
						Gabriel Bigelow
					</h1>
					<h2 className="text-center font-lemonMilk sm:text-[1rem] md:text-[2rem] text-gold">
						Software engineer, Full-Stack Developer
					</h2>
				</div>
				<div className="flex justify-center">
					<div className="flex h-[6.25rem] w-[50%] justify-center gap-[.25rem] font-[600] text-[1.5rem]">
						<div className="relative w-[35%]">
							<span
								className={`${animationTextStyle(
									1
								)} absolute right-full`}
							>
								Let's
							</span>
						</div>
						<div className="relative">
							<div>
								<span className="opacity-0 pointer-events-none visiblity-hidden">
									build
								</span>
								<span
									className={`${animationTextStyle(
										2
									)} absolute left-0 top-full`}
								>
									build
								</span>
							</div>
						</div>
						<div className="relative w-[35%]">
							<span
								className={`${animationTextStyle(
									3
								)} absolute left-full`}
							>
								together.
							</span>
						</div>
					</div>
				</div>

				{/* <div className="text-[2rem] font-bold">
					Put something cool and eyecatching here.
				</div> */}
			</div>
		</div>
	);
}
