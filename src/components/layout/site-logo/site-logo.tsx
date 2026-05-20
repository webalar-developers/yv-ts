import { cn } from "@/lib/utils";

export function SiteLogo({
	className,
	imgClassName,
	href = "/",
	scrolled = false,
}: {
	className?: string;
	imgClassName?: string;
	href?: string;
	scrolled?: boolean;
}) {
	return (
		<a href={href} className={cn("relative flex items-center", className)}>
			{/* Full Logo */}
			<img
				src="/layout/png/logo.png"
				alt="Youthville"
				className={cn(
					"h-12 transition-all duration-500 md:h-16",
					scrolled
						? "opacity-0 scale-95 pointer-events-none"
						: "opacity-100 scale-100",
					imgClassName,
				)}
			/>
			{/* Small/Icon Logo */}
			<img
				src="/shared/png/yv_logo.png"
				alt="YV"
				className={cn(
					"absolute left-0 h-8 transition-all duration-500 md:h-10",
					scrolled
						? "opacity-100 scale-100"
						: "opacity-0 scale-95 pointer-events-none",
					imgClassName,
				)}
			/>
		</a>
	);
}
