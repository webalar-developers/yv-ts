import { Button } from "@/components/ui/button";

export function AboutCta() {
	return (
		<section className="bg-[#f7f7f7] px-6 py-8 md:px-12 md:py-12 lg:px-20">
			<div
				className="mx-auto relative max-w-7xl rounded-[32px] px-8 py-16 text-center md:py-20 bg-linear-to-r from-[#330E32] to-[#5D235C]"
			>
				 <span
                    className="pointer-events-none absolute right-[-80px] blur-xl top-2 -translate-y-1/2 size-[220px] rounded-full"
                    style={{ background: "#FFFFFF1A" }}
                />
				<h2 className="mb-4 font-gilda text-[28px] text-white md:text-[40px] lg:text-[52px]">
					Be Part of Youthville — Grow 10x with us.
				</h2>
				<div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
					<Button className="h-13 rounded-none bg-white px-10 text-[16px] font-bold text-yv-orange hover:bg-white/90 font-roboto" >
					 Join Us (LinkedIn)
					</Button>
				</div>
			</div>
		</section>
	);
}
