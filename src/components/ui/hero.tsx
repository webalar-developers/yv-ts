import {
	ArrowRight02Icon,
	Call02Icon,
	Rocket01Icon,
} from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-5xl">

			<div
				aria-hidden="true"
				className="absolute inset-0 isolate hidden overflow-hidden contain-strict lg:block"
			>
				<div className="absolute inset-0 -top-14 isolate -z-10 bg-[radial-gradient(35%_80%_at_49%_0%,--theme(--color-foreground/.08),transparent)] contain-strict" />
			</div>

			<div
				aria-hidden="true"
				className="absolute inset-0 mx-auto hidden min-h-screen w-full max-w-5xl lg:block"
			>
				<div className="absolute inset-y-0 left-0 z-10 h-full w-px bg-foreground/15 mask-y-from-80% mask-y-to-100%" />
				<div className="absolute inset-y-0 right-0 z-10 h-full w-px bg-foreground/15 mask-y-from-80% mask-y-to-100%" />
			</div>

			<div className="relative flex flex-col items-center justify-center gap-5 pt-32 pb-30">

				<div
					aria-hidden="true"
					className="absolute inset-0 -z-1 size-full overflow-hidden"
				>
					<div className="absolute inset-y-0 left-4 w-px bg-linear-to-b from-transparent via-border to-border md:left-8" />
					<div className="absolute inset-y-0 right-4 w-px bg-linear-to-b from-transparent via-border to-border md:right-8" />
					<div className="absolute inset-y-0 left-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:left-12" />
					<div className="absolute inset-y-0 right-8 w-px bg-linear-to-b from-transparent via-border/50 to-border/50 md:right-12" />
				</div>

				<a
					className={cn(
						"group mx-auto flex w-fit items-center gap-3 rounded-md border bg-card px-3 py-1 shadow",
						"animate-in transition-all delay-500 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in",
					)}
					href="#link"
				>
					<HugeiconsIcon
						icon={Rocket01Icon}
						strokeWidth={2}
						className="size-3 text-muted-foreground"
					/>
					<span className="text-xs">shipped new features!</span>
					<span className="block h-5 border-l" />

					<HugeiconsIcon
						icon={ArrowRight02Icon}
						strokeWidth={2}
						className="size-3 duration-150 ease-out group-hover:translate-x-1"
					/>
				</a>

				<h1
					className={cn(
						"animate-in text-center text-4xl tracking-tight text-balance delay-100 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in md:text-5xl lg:text-6xl",
						"text-shadow-[0_0px_50px_theme(--color-foreground/.2)]",
					)}
				>
					Building Teams Help <br /> You Scale and Lead
				</h1>

				<p className="mx-auto max-w-md animate-in text-center text-base tracking-wider text-foreground/80 delay-200 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in sm:text-lg md:text-xl">
					Conecting you with world-class talent <br /> to scale, innovate and
					lead
				</p>

				<div className="flex animate-in flex-row flex-wrap items-center justify-center gap-3 pt-2 delay-300 duration-500 ease-out fill-mode-backwards slide-in-from-bottom-10 fade-in">
					<Button className="rounded-md" size="lg" variant="secondary">
						<HugeiconsIcon
							icon={Call02Icon}
							strokeWidth={2}
							data-icon="inline-start"
						/>{" "}
						Book a Call
					</Button>
					<Button className="rounded-md" size="lg">
						Get started{" "}
						<HugeiconsIcon
							icon={ArrowRight02Icon}
							strokeWidth={2}
							data-icon="inline-end"
						/>
					</Button>
				</div>
			</div>
		</section>
	);
}
