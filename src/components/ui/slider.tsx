import { Slider as SliderPrimitive } from "@base-ui/react/slider";

import { cn } from "@/lib/utils";

function Slider({ className, ...props }: SliderPrimitive.Root.Props) {
	return (
		<SliderPrimitive.Root
			data-slot="slider"
			className={cn(
				"relative flex w-full touch-none items-center select-none",
				className,
			)}
			{...props}
		>
			<SliderPrimitive.Control
				data-slot="slider-control"
				className="relative flex h-6 w-full grow items-center"
			>
				<SliderPrimitive.Track
					data-slot="slider-track"
					className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-secondary"
				>
					<SliderPrimitive.Indicator
						data-slot="slider-indicator"
						className="absolute h-full bg-yv-orange"
					/>
				</SliderPrimitive.Track>
				<SliderPrimitive.Thumb
					data-slot="slider-thumb"
					className="block size-4 rounded-full border-2 border-yv-orange bg-white shadow transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
				/>
			</SliderPrimitive.Control>
		</SliderPrimitive.Root>
	);
}

export { Slider };
