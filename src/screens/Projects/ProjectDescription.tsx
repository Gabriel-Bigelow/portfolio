type ProjectDescriptionProps = {
	children: any;
};

export default function ProjectDescription({
	children,
}: ProjectDescriptionProps) {
	return <div className="flex flex-col gap-[1rem]">{children}</div>;
}
