import React from "react";
export interface IProps {
	className?: string;
	btnColor: string;
	onClick?: (btnColor: string) => void;
}

export default (props: IProps) => {
	const { className, btnColor, onClick } = props;
	return (
		<button
			className={className}
			style={{ color: btnColor }}
			onClick={() => onClick && onClick(btnColor)}
		>
			Color Button
		</button>
	);
};
