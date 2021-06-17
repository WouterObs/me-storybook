import React from "react";
export interface IProps {
	className?: string;
	btnColor: string;
	onClick?: (btnColor: string) => void;
}

const onClickTest = (args?: any) => {
	console.info("Buttone Clicked! : ", args);
};

export default (props: IProps) => {
	const { className, btnColor, onClick } = props;
	return (
		<button
			className={className}
			// style={{ btnColor }}
			style={{ color: btnColor }}
			onClick={() =>
				(onClick && onClick(btnColor)) || (onClickTest && onClickTest(btnColor))
			}
		>
			Color Button
		</button>
	);
};
