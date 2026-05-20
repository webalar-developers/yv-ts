import {
	BookOpen,
	Dumbbell,
	MapPin,
	Users,
	UtensilsCrossed,
	WashingMachine,
} from "lucide-react";
import type { Offering } from "./offerings-section.types";

export const offerings: Offering[] = [
	{
		title: "Choti Bhook",
		icon: UtensilsCrossed,
		image: "/home/offerings/offering5.png",
		video: "/home/offerings/choti-bhook.mp4",
		span: "col-span-1",
		description:
			"Late-night cravings or quick meals sorted. Access to an induction cooktop, microwave, and refrigerator—so you can cook, heat, and store with ease.",
	},
	{
		title: "Muskal Factory",
		icon: Dumbbell,
		image: "/home/offerings/wellness.jpg",
		video: "/home/offerings/muscle-factory.mp4",
		span: "col-span-1 md:row-span-2",
		description:
			"Because fitness is part of the lifestyle. A well-equipped gym area to keep your routine strong and consistent.",
	},
	{
		title: "Bajao Bindas",
		icon: Users,
		image: "/home/offerings/bajao-bindas.jpg",
		span: "col-span-2",
		description:
			"Entertainment, anytime you want. A common TV lounge to chill, binge-watch, or catch live matches with your tribe.",
	},
	{
		title: "Gyaani",
		icon: BookOpen,
		image: "/home/offerings/gyaani.jpg",
		video: "/home/offerings/gyaani.mp4",
		span: "col-span-1",
		description:
			"A quiet corner for focused minds. A mini library zone designed for reading, studying, or simply unwinding with a good book.",
	},
	{
		title: "Chill Zone",
		icon: MapPin,
		image: "/home/offerings/chill-zone.jpg",
		video: "/home/offerings/chill-zone.mp4",
		span: "col-span-1",
		description:
			"Your go-to space to relax and recharge. A dedicated hangout area to unwind, socialize, or just do nothing.",
	},
	{
		title: "Laundry",
		icon: WashingMachine,
		image: "/home/offerings/laundry.jpg",
		span: "col-span-1",
		description:
			"Hassle-free living, always. Enjoy 10 kg laundry service per month included, so you can focus on life—not chores.",
	},
];
