type CloseButtonProps = {
	onClick: Function;
};

export default function CloseButton({ onClick = () => {} }: CloseButtonProps) {
	return (
		<button
			onClick={(e) => onClick(e)}
			className="absolute top-[1rem] right-[.5rem] z-index-4 text-[red] dark:text-lightred font-extrabold text-[32px] leading-[1] cursor-pointer"
		>
			&times;
		</button>
	);
}
