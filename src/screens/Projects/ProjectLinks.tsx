import { logos } from "../../_resources/images/_logos/_logos";

type ProjectLinksProps = {
	title: string;
	links: any;
};

export default function ProjectLinks({ title, links }: ProjectLinksProps) {
	const linkMap: any = {
		github: `Check out ${title}'s GitHub repository.`,
		live: `See ${title} in action here!`,
		steam: `Check out ${title} on Steam!`,
	};

	function linkLogo(linkName: string) {
		if (linkName === "github") return logos.GitHub();
		if (linkName === "steam") return logos.Steam();
		if (linkName === "live") return links[linkName].logo;
	}

	return (
		<div className="flex">
			<div className="flex flex-col gap-[1rem]">
				{Object.keys(links)
					.filter((link) => links[link])
					.map((link, i) => {
						return (
							<div
								className="flex"
								key={`${title}-link-${i}__${link}`}
							>
								<div>
									<a
										className="flex gap-[1rem] hover:underline text-satblue"
										href={links[link].href || links[link]}
										target="_blank"
										rel="noreferrer"
									>
										{linkMap[link]}
										<div className="h-[1.5rem] w-[1.5rem]">
											{linkLogo(link)}
										</div>
									</a>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
}
