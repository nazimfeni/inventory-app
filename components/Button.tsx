import React from "react";
import clsx from "clsx";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
};

export default function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...rest
}: ButtonProps) {
  const baseClasses =
	"inline-flex items-center justify-center rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition";

  const variantClasses =
	variant === "primary"
  	? "bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500"
  	: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 focus:ring-indigo-500";

  const sizeClasses =
	size === "sm"
  	? "px-3 py-1.5 text-sm"
  	: "px-4 py-2 text-sm";

  return (
	<button
  	className={clsx(baseClasses, variantClasses, sizeClasses, className)}
  	{...rest}
	>
  	{children}
	</button>
  );
}

