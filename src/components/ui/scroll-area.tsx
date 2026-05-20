import { ScrollArea as ScrollAreaPrimitive } from "@base-ui/react/scroll-area";

import { cn } from "@/lib/utils";

function ScrollArea({
	className,
	children,
	...props
}: ScrollAreaPrimitive.Root.Props) {
	return (
		<ScrollAreaPrimitive.Root
			data-slot="scroll-area"
			className={cn("relative overflow-hidden", className)}
			{...props}
		>
			<ScrollAreaPrimitive.Viewport
				data-slot="scroll-area-viewport"
				className="size-full rounded-[inherit] outline-none"
			>
				{children}
			</ScrollAreaPrimitive.Viewport>
			<ScrollAreaPrimitive.Scrollbar
				data-slot="scroll-area-scrollbar"
				orientation="vertical"
				className="flex w-2.5 touch-none p-px transition-colors select-none data-[orientation=horizontal]:h-2.5 data-[orientation=horizontal]:w-full data-[orientation=horizontal]:flex-col"
			>
				<ScrollAreaPrimitive.Thumb
					data-slot="scroll-area-thumb"
					className="relative flex-1 rounded-full bg-yv-orange/40"
				/>
			</ScrollAreaPrimitive.Scrollbar>
		</ScrollAreaPrimitive.Root>
	);
}

export { ScrollArea };
