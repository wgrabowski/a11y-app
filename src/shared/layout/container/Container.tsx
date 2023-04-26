import "./Container.css";
import { ReactNode } from "react";

export const Container = ({
	children,
	className,
}: {
	children: ReactNode;
	className?: string;
}) => {
	return <div className={`Container ${className}`}>{children}</div>;
};
