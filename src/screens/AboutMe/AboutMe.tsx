import cert1 from "../../_resources/images/about/full-stack-cert.webp";
import cert2 from "../../_resources/images/about/front-end-cert.webp";
import headshot from "../../_resources/images/about/headshot.webp";
import resume from "../../_resources/resume.pdf";

import NavArrows from "../../_components/NavArrows";
import Terminal from "../../_components/Terminal";
import { CgFileDocument } from "react-icons/cg";
import { useEffect, useState } from "react";

export default function AboutMe() {
	const mainBodyTarget = [
		`My name is Gabriel Bigelow. I am a Full-Stack Developer from Toledo, Ohio.`,

		`I discovered my enthusiasm for programming in the summer of 2021 while helping my brother start a business, in which we
        had regular contact with web developers. Having always loved computers and technology, I decided to look into online coding
        classes, and it was love at first <span style="color:#FFBF00; font-weight:bold; cursor: pointer" onclick="alert('Hello world! :)')">helloWorld.js</span>.
		Since receiving certifications for Full-Stack Engineering, Front-End Development, and Back-End Development, I have worked as a Full-Stack Developer for FactoryPure.`,

		`I love learning, taking on challenges, and creating solutions. When I'm not coding, I like to play competitive video games like Counter-Strike and Rocket League.`,
	];

	const stylesImage = "flex justify-center w-full";

	const images = ["cert1", "cert2"];
	const [image, setImage] = useState(images[0]);
	useEffect(() => {}, []);

	useEffect(() => {
		setTimeout(() => {
			const index =
				images.findIndex((imageName) => imageName === image) || 0;
			const nextIndex = index >= images.length - 1 ? 0 : index + 1;
			setImage(images[nextIndex]);
		}, 2000);
	}, [image]);

	const certStyle = (name: string) =>
		name === image ? "opacity-100" : "opacity-0 pointer-events-none";

	const leftBody = (
		<div className="flex gap-[2rem] grow justify-end">
			<div className="grid items-center justify-center shrink grow">
				<a
					className={`${certStyle("cert1")} duration-300`}
					href="https://www.codecademy.com/profiles/Icy-Rex/certificates/ffd0f42cce1a44e9a0108b365047a0a6"
					target="_blank"
					rel="noreferrer"
					style={{ gridColumn: 1, gridRow: 1 }}
				>
					<img src={cert1} className="max-h-[15rem] w-full" />
				</a>
				<a
					className={`${certStyle("cert2")} duration-300`}
					href="https://www.codecademy.com/profiles/Icy-Rex/certificates/5f85dd867b67b60014ac9ea3"
					target="_blank"
					rel="noreferrer"
					style={{ gridColumn: 1, gridRow: 1 }}
				>
					<img src={cert2} className="max-h-[15rem]" />
				</a>
			</div>
			<div className="flex flex-col items-center gap-[2rem] shrink  min-w-[9.5rem]">
				<div className="flex grow justify-end">
					<img
						className="max-h-[200px] object-contain object-top"
						src={headshot}
						alt="Me! A nice, handsome, young man."
						title="Me! A nice, handsome, young man."
					/>
				</div>
				<a
					className="flex flex-col justify-center items-center"
					href={resume}
					target="_blank"
					rel="noreferrer"
				>
					<CgFileDocument className="h-[6rem] w-auto" />
					<span className="font-semibold text-[1.75rem] sm:text-[1.25rem] leading-[1.75rem]">
						Resume
					</span>
				</a>
			</div>
		</div>
	);

	return (
		<div>
			<NavArrows left="/" right="/projects" />
			<Terminal mainBodyTarget={mainBodyTarget} rightBody={leftBody} />
		</div>
	);
}
