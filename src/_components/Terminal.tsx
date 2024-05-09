import gitbash from "../_resources/images/git-bash.svg";
import { useLocation } from "react-router-dom";
import {
	animationDelay,
	endTagRegex,
	prettierLink,
	tagRegex,
} from "../helpers";
import { useEffect, useRef, useState } from "react";
import SectionContent from "./SectionContent";

type TerminalProps = {
	leftBody?: any;
	rightBody?: any;
	mainBodyTarget: string | string[];
	children?: any;
};

export default function Terminal({
	leftBody,
	rightBody,
	mainBodyTarget,
	children,
}: TerminalProps) {
	const location = useLocation();
	const programName = `${prettierLink(location.pathname).replaceAll(
		" ",
		""
	)}`;
	const childrenRef = useRef(null);
	const childrenContainerRef = useRef(null);

	const targetTitle = `node ${programName}.js`;
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	const bodyTarget = formatTerminalOutput(mainBodyTarget);

	function formatTerminalOutput(stringArray: string | string[]) {
		const array = Array.isArray(stringArray) ? stringArray : [stringArray];
		return array
			.map((paragraph) =>
				paragraph
					.replaceAll(/ {2,}/gm, "")
					.replaceAll("\n", " ")
					.replaceAll(/\t{2,}/gm, "")
			)
			.join("\n\n");
	}
	function animateTerminalText(
		currentValue: string,
		targetValue: string,
		setValue: Function,
		elementId?: string
	) {
		const fps = currentValue === title ? 60 : 600;
		const msDelay = 500;

		if (currentValue.length < targetValue.length) {
			setTimeout(
				() => {
					const start = currentValue.length;
					const end = (() => {
						const remainingCharacters = targetValue.slice(
							currentValue.length
						);
						const match = (() =>
							remainingCharacters.match(endTagRegex))();
						if (remainingCharacters[0] !== "<" || !match)
							return start + 1;
						return match[0].length + (match.index || 0) + start;
					})();

					const newValue = [
						currentValue,
						targetValue.slice(start, end),
					].join("");
					setValue(newValue);
					if (!elementId || !document.getElementById(elementId))
						return;
					document.getElementById(elementId)!.innerHTML = newValue;
				},
				currentValue ? 1000 / fps : msDelay
			);
		}
	}
	function animateTerminalChildren() {
		(
			childrenContainerRef.current as unknown as HTMLElement
		).style.height = `${
			(
				childrenRef.current as unknown as HTMLElement
			).getBoundingClientRect().height
		}px`;

		const container =
			childrenContainerRef.current as unknown as HTMLElement;
		container.style.height = `${
			(
				childrenRef.current as unknown as HTMLElement
			).getBoundingClientRect().height
		}px`;
		setTimeout(() => {
			container.style.height = "auto";
			container.style.overflow = "visible";
		}, animationDelay);
	}

	useEffect(() => {
		if (title.length < targetTitle.length)
			animateTerminalText(title, targetTitle, setTitle);
		else if (body.length < bodyTarget.length)
			animateTerminalText(body, bodyTarget, setBody, "terminal-body");
		else if (body.length >= bodyTarget.length) animateTerminalChildren();
	}, [title, body]);

	return (
		<SectionContent>
			<div id="js-terminal" className="relative">
				<div className="absolute block w-full h-full bg-[rgba(20,20,20,0.7)] -z-10 blur-sm border-[5px] border-[hsla(217,60%,60%,0.125)]" />

				<div className="flex w-full gap-[.5rem] p-[.25rem] items-center justify-start text-[hsla(217,60%,80%)] bg-[rgba(22,27,54,0.8)] z-20">
					<img className="h-[1.25rem]" src={gitbash} alt="gitbash" />
					<p>
						MINGW64:/gb/portfolio/
						{location.pathname.replaceAll("/", "")}
					</p>
				</div>

				<div className="relative flex flex-col gap-[2rem] py-[1rem] px-[2rem] z-10">
					<div className="flex gap-[2rem] justify-between">
						{leftBody}
						<div className="flex gap-[2rem] w-full max-w-[40em]">
							<div className="flex flex-col gap-[1rem] grow">
								<h2 className="flex gap-[.5rem] text-[1.75rem] font-bold">
									<span className="text-satblue">$</span>
									<span>{title.slice(0, 5)}</span>
									<span className="text-gold">
										{title.slice(5).trim()}
									</span>
								</h2>

								<section className="relative grid gap-[2rem]">
									<pre
										style={{
											gridRow: 1,
											gridColumn: 1,
											visibility: "hidden",
										}}
										className="whitespace-pre-wrap font-nunito pointer-events-none opacity-0 max-w-[40em]"
									>
										{bodyTarget.replaceAll(tagRegex, "")}
									</pre>
									<pre
										id={"terminal-body"}
										style={{
											gridRow: 1,
											gridColumn: 1,
										}}
										className="whitespace-pre-wrap font-nunito max-w-[40em]"
									/>
								</section>
							</div>
						</div>
						{rightBody}
					</div>
					<div
						className="row-span-2 h-[0px] duration-500 overflow-hidden"
						ref={childrenContainerRef}
						style={{
							gridRow: 2,
							gridColumn: 1,
						}}
					>
						<div ref={childrenRef}>{children}</div>
					</div>
				</div>
			</div>
		</SectionContent>
	);
}
