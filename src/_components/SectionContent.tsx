type SectionContentProps = {
	children: any;
};

export default function SectionContent({ children }: SectionContentProps) {
	return (
		<div className="flex justify-center mb-[2rem]">
			<div className="sm:w-full md:w-[70%]">{children}</div>
		</div>
	);
}
