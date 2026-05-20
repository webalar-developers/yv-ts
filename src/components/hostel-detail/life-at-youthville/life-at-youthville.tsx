import { Card } from "@/components/ui/card";
import type { LifeAtYouthvilleItem } from "./life-at-youthville.types";

export function LifeAtYouthville({ items }: { items: LifeAtYouthvilleItem[] }) {
	return (
		<section>
			<h3 className="font-['Gilda_Display'] text-[27px] font-normal text-[#1f1a17]">
				Life at Youthville
			</h3>
			<div className="mt-7 grid gap-6 md:grid-cols-2">
				{items.map((item) => (
					<Card
						key={item.title}
						className="overflow-hidden rounded-xl border-0 bg-white py-0 ring-0"
					>
						<div className="relative h-[280px]">
							<img
								src={item.image}
								alt={item.title}
								className="h-full w-full object-cover"
								loading="lazy"
								decoding="async"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />
							<div className="absolute inset-x-0 bottom-0 p-6 text-white">
								<p className="text-[20px] leading-none font-bold">
									{item.title}
								</p>
								<p className="mt-2 text-[16px] font-normal text-white/88">
									{item.subtitle}
								</p>
							</div>
						</div>
					</Card>
				))}
			</div>
		</section>
	);
}
