import {
	ChevronDown,
	Link2,
	Mail,
	MessageSquareText,
	Phone,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

import {
	archiveLinks,
	legalLinks,
	locations,
	quickLinks,
} from "./site-footer.data";
import type { FooterColumnProps } from "./site-footer.types";

export function SiteFooter() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<footer className="bg-[#0f0f0f] text-white">
			<div className="px-6">
				<section className="grid gap-12 py-16 md:grid-cols-2 xl:grid-cols-4">
					<FooterColumn title="Upcoming Locations">
						{locations.map((item) => (
							<p key={item}>{item}</p>
						))}
					</FooterColumn>

					<FooterColumn title="Quick Links">
						<div className="space-y-3">
							{quickLinks.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className="block transition-colors hover:text-white/85"
								>
									{item.name}
								</Link>
							))}
						</div>
					</FooterColumn>

					<FooterColumn title="Contact">
						<div className="space-y-4">
							<div className="flex items-center gap-3">
								<Phone className="size-4 text-yv-orange" />
								<a href="tel:+917385777377" className="hover:text-white/85">
									Pune: +91 7385777377
								</a>
							</div>
							<div className="flex items-center gap-3">
								<Phone className="size-4 text-yv-orange" />
								<a href="tel:+917387430080" className="hover:text-white/85">
									Mumbai: +91 7387430080
								</a>
							</div>
							<div className="flex items-center gap-3">
								<Mail className="size-4 text-yv-orange" />
								<span>info@youthvillehostel.com</span>
							</div>
						</div>
						<div className="flex items-center gap-3 pt-3">
							{[Link2, MessageSquareText].map((Icon) => (
								<button
									type="button"
									key={`contact-${Icon.name || Icon.displayName}`}
									className="flex size-10 items-center justify-center rounded-md bg-white/6 text-white/75 transition-colors hover:bg-white/10"
								>
									<Icon className="size-4" />
								</button>
							))}
						</div>
					</FooterColumn>

					<FooterColumn title="Newsletter">
						<p className="">
							Join our archive for exclusive residential insights and early
							access to new locations.
						</p>
						<div className="pt-2">
							<form className="flex w-full max-w-md overflow-hidden rounded-md border border-white/10 bg-white/5">
								<input
									type="email"
									placeholder="Email Address"
									className="h-12 flex-1 bg-transparent px-4 text-[0.9rem] text-white placeholder:text-white/30 focus:outline-none"
								/>
								<Button
									type="submit"
									variant="yv-orange"
									className="h-12 shrink-0 rounded-md bg-yv-orange px-8 text-[0.85rem] font-bold tracking-wider text-white hover:bg-yv-orange/90"
								>
									JOIN
								</Button>
							</form>
						</div>
					</FooterColumn>
				</section>
			</div>

			{/* Toggle Button with Line */}
			<div className="relative mb-8 px-6">
				<div
					className="absolute inset-0 flex items-center px-6"
					aria-hidden="true"
				>
					<div className="w-full border-t border-white/6" />
				</div>
				<div className="relative flex justify-center">
					<button
						type="button"
						onClick={() => setIsExpanded(!isExpanded)}
						className="flex size-11 items-center justify-center rounded-md border border-white/10 bg-[#0f0f0f] text-white/60 transition-all hover:border-white/20 hover:text-white hover:shadow-[0_0_15px_rgba(255,255,255,0.05)]"
						aria-expanded={isExpanded}
						aria-label="Toggle Residential Archives"
					>
						<ChevronDown
							className={cn(
								"size-5 text-yv-orange transition-transform duration-500 ease-in-out",
								isExpanded && "rotate-180",
							)}
						/>
					</button>
				</div>
			</div>

			{/* Expandable Archives Section */}
			<AnimatePresence initial={false}>
				{isExpanded && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
						className="overflow-hidden"
					>
						<div className="px-6 pb-20">
							<section className="">
								<h2 className="mb-10 text-[16px] font-bold tracking-[0.10em] text-white/95 uppercase">
									Popular Residential Archives – Pune
								</h2>
								<div className="grid gap-y-4 text-[14px] font-normal text-white/56 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
									{archiveLinks.map((column) => (
										<div key={`archive-col-${column[0]}`} className="space-y-4">
											{column.map((item) => (
												<p
													key={item}
													className="leading-relaxed transition-colors hover:text-white/90 cursor-default"
												>
													{item}
												</p>
											))}
										</div>
									))}
								</div>
							</section>
						</div>
					</motion.div>
				)}
			</AnimatePresence>

			<div className="border-t border-white/6 bg-black">
				<div className="mx-auto flex flex-col gap-6 px-6 py-7 text-[0.84rem] text-white/45 lg:flex-row lg:items-center lg:justify-end">

					<div className="flex flex-col gap-4 text-[0.84rem] lg:flex-row lg:items-center lg:gap-8">
						<p>© 2026 Youthville. All rights reserved.</p>
						<div className="flex flex-wrap gap-6">
							{legalLinks.map((item) => (
								<Link
									key={item.name}
									to={item.href}
									className="transition-colors hover:text-white/80"
								>
									{item.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

function FooterColumn({ title, children }: FooterColumnProps) {
	return (
		<div>
			<h3 className="mb-7 !text-[20px] !font-bold text-white">{title}</h3>
			<div className="space-y-3.5 text-base leading-relaxed font-normal text-white/56">
				{children}
			</div>
		</div>
	);
}
