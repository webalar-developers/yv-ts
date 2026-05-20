import { Checkbox as CheckboxPrimitive } from "@base-ui/react/checkbox";
import { CheckIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Checkbox({ className, ...props }: CheckboxPrimitive.Root.Props) {
	return (
		<CheckboxPrimitive.Root
			data-slot="checkbox"
			className={cn(
				"peer inline-flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input bg-white shadow-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 data-[checked]:border-yv-orange data-[checked]:bg-yv-orange data-[checked]:text-white",
				className,
			)}
			{...props}
		>
			<CheckboxPrimitive.Indicator
				data-slot="checkbox-indicator"
				className="flex items-center justify-center text-current"
			>
				<CheckIcon className="size-3" />
			</CheckboxPrimitive.Indicator>
		</CheckboxPrimitive.Root>
	);
}

export { Checkbox };
