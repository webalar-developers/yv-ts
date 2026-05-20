import { Toggle as TogglePrimitive } from "@base-ui/react/toggle";
import { ToggleGroup as ToggleGroupPrimitive } from "@base-ui/react/toggle-group";

import { cn } from "@/lib/utils";

function ToggleGroup<Value extends string = string>({
	className,
	...props
}: ToggleGroupPrimitive.Props<Value>) {
	return (
		<ToggleGroupPrimitive
			data-slot="toggle-group"
			className={cn(
				"inline-flex items-center rounded-full border bg-white p-1 shadow-sm",
				className,
			)}
			{...props}
		/>
	);
}

function ToggleGroupItem<Value extends string = string>({
	className,
	...props
}: TogglePrimitive.Props<Value>) {
	return (
		<TogglePrimitive
			data-slot="toggle-group-item"
			className={cn(
				"inline-flex items-center justify-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-500 transition-colors outline-none hover:bg-gray-100 focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 data-[pressed]:bg-yv-orange data-[pressed]:text-white data-[pressed]:hover:bg-yv-orange-hover",
				className,
			)}
			{...props}
		/>
	);
}

export { ToggleGroup, ToggleGroupItem };
