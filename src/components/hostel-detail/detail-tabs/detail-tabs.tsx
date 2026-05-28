import { detailTabs } from "./detail-tabs.data";

export function DetailTabs() {
	const scrollToSection = (label: string) => {
		const id = label.toLowerCase();
		const element = document.getElementById(id);
		if (element) {
			const offset = 100;
			const bodyRect = document.body.getBoundingClientRect().top;
			const elementRect = element.getBoundingClientRect().top;
			const elementPosition = elementRect - bodyRect;
			const offsetPosition = elementPosition - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="mt-8 border-b border-[#d8d0cb]">
			<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
				{detailTabs.map((tab) => (
					<button
						type="button"
						key={tab.label}
						onClick={() => scrollToSection(tab.label)}
						onKeyDown={(e) => {
							if (e.key === "Enter" || e.key === " ") {
								e.preventDefault();
								scrollToSection(tab.label);
							}
						}}
						className={`flex cursor-pointer items-center gap-1.5 border-b-2 px-1 py-3 transition-all hover:border-yv-orange/50 md:gap-2.5 md:py-4 ${
							tab.active
								? "border-yv-orange text-[12px] font-bold text-[#231f1c] sm:text-[14px] md:text-[18px]"
								: "border-transparent text-[12px] font-normal text-[#847c77] sm:text-[14px] md:text-[18px]"
						}`}
					>
						<tab.icon className="size-5" />
						{tab.label}
					</button>
				))}
			</div>
		</div>
	);
}
