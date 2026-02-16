import React from "react";
import clsx from "clsx";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className }: CardProps) {
  return (
	<div
  	className={clsx(
    	"bg-white rounded-lg shadow-sm border border-gray-200 p-4",
    	className
  	)}
	>
  	{children}
	</div>
  );
}

