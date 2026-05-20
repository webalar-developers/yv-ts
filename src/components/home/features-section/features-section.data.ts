import {
	Heart,
	MapPin,
	Rocket,
	Shield,
	Sofa,
	ThumbsUp,
	Users,
	UtensilsCrossed,
} from "lucide-react";
import type { Feature } from "./features-section.types";

export const features: Feature[] = [
	{
		icon: UtensilsCrossed,
		title: "Daily Fresh Meals",
		subt: "Fresh & Nutritious",
		description: "Nutritious meals every day",
	},
	{
		icon: MapPin,
		title: "Prime Locations",
		subt: " Near Colleges",
		description: "Near colleges and offices",
	},
	{
		icon: Users,
		title: "Community Experience",
		subt: "Social & Fun",
		description: "Events and shared spaces",
	},
	{
		icon: ThumbsUp,
		title: "Trusted by Thousands",
		subt: "Proven Track Record",
		description: "Built on trust and experience",
	},
	{
		icon: Sofa,
		title: "Comfort Comes First",
		subt: "Hassle-Free Living",
		description: "Experience hassle-free living",
	},
	{
		icon: Heart,
		title: "Wellness-Led Living",
		subt: "Healthy Spaces",
		description: "Healthy, private-first spaces",
	},
	{
		icon: Shield,
		title: "24/7 Safety & Security",
		subt: "Secure Access",
		description: "Biometric access and CCTVs",
	},
	{
		icon: Rocket,
		title: "Empowerment & Opportunities",
		subt: "Growth & Success",
		description: "Opportunities to grow and thrive",
	},
];
