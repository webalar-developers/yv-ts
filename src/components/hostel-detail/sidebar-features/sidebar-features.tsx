import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardTitle,
} from "@/components/ui/card";
import type { PropertyFeature } from "../amenity-strip/amenity-strip.types";
import { featureDescriptions } from "./sidebar-features.data";
import { Dialog, DialogContent, DialogTrigger } from "#/components/ui/dialog";
import { ScheduleVisitForm } from "../schedule-visit-form/schedule-visit-form";

export function SidebarFeatures({
	eyebrow,
	title,
	features,
}: {
	eyebrow: string;
	title: string;
	features: PropertyFeature[];
}) {
	return (
		<Card className="h-fit rounded-none border-0 bg-[#f8ebdf] py-0 ring-1 ring-[#ead8ca]">
			<CardContent className="px-9 pt-8 pb-8">
				<CardDescription className="font-['Gilda_Display'] text-[18px] font-normal tracking-[0.12em] text-yv-orange uppercase">
					{eyebrow}
				</CardDescription>
				<CardTitle className="mt-1.5 text-[14px] font-medium text-[#312a26]">
					{title}
				</CardTitle>

				<div className="mt-6 space-y-5 border-t border-[#e6d3c5] pt-6">
					{features.map((feature, index) => (
						<div key={feature.label} className="flex items-start gap-4">
							{typeof feature.icon === "string" ? (
								<img
									src={feature.icon}
									alt=""
									className="mt-0.5 size-5 shrink-0"
								/>
							) : (
								<feature.icon className="mt-0.5 size-5 shrink-0 text-yv-orange" />
							)}
							<div>
								<p className="text-[16px] font-bold text-[#231f1c]">
									{feature.label}
								</p>
								<p className="text-[14px] leading-6 font-normal text-[#6a625d]">
									{featureDescriptions[index]}
								</p>
							</div>
						</div>
					))}
				</div>

				<Dialog>
					<DialogTrigger className="w-full">
						<Button
							variant="yv-orange"
							className="mt-7 h-14 w-full rounded-md text-[20px] font-bold"
						>
							Get Details
						</Button>
					</DialogTrigger>
					<DialogContent className="max-w-lg border-0 bg-transparent p-0 shadow-none sm:max-w-[500px]">
						<ScheduleVisitForm />
					</DialogContent>
				</Dialog>
				<p className="mt-4 text-center text-[12px] font-bold tracking-[0.16em] text-[#6b635f] uppercase">
					No hidden charges &bull; direct booking
				</p>
			</CardContent>
		</Card>
	);
}
