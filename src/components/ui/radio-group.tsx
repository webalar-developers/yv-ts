import { Radio as RadioPrimitive } from "@base-ui/react/radio";
import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group";

import { cn } from "@/lib/utils";

function RadioGroup<Value = string>({
	className,
	...props
}: RadioGroupPrimitive.Props<Value>) {
	return (
		<RadioGroupPrimitive
			data-slot="radio-group"
			className={cn("grid gap-2", className)}
			{...props}
		/>
	);
}

function RadioGroupItem<Value = string>({
	className,
	...props
}: RadioPrimitive.Root.Props<Value>) {
	return (
		<RadioPrimitive.Root
			data-slot="radio-group-item"
			className={cn(
				"aspect-square size-4 shrink-0 rounded-full border border-input bg-white shadow-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-yv-orange",
				className,
			)}
			{...props}
		>
			<RadioPrimitive.Indicator
				data-slot="radio-group-indicator"
				className="relative flex size-full items-center justify-center after:block after:size-2 after:rounded-full after:bg-yv-orange"
			/>
		</RadioPrimitive.Root>
	);
}

export { RadioGroup, RadioGroupItem };
