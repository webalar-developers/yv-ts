"use client";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router";
import { SiteLogo } from "@/components/layout/site-logo/site-logo";
import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { navLinks } from "./site-header.data";

export function SiteHeader() {
	const scrolled = useScroll(10);
	const [mobileOpen, setMobileOpen] = useState(false);
	const [showContactMenu, setShowContactMenu] = useState(false);
	const location = useLocation();

	const contactNumbers = [
		{ label: "Pune", href: "tel:+917385777377", value: "+91 7385777377" },
		{ label: "Mumbai", href: "tel:+917387430080", value: "+91 7387430080" },
	];

	const isActive = (href: string) => {
		if (href === "/") return location.pathname === "/";
		return location.pathname.startsWith(href);
	};

	return (
		<header
			className={cn(
				"sticky top-0 z-50 w-full border-b border-transparent bg-white text-black transition-all duration-300",
				{
					"border-border shadow-sm": scrolled,
				},
			)}
		>
			<nav
				className={cn(
					"mx-auto flex w-full items-center justify-between px-5 transition-all duration-300",
					scrolled ? "h-16" : "h-20",
				)}
			>
				<div className="flex w-[150px] items-center lg:w-[250px]">
					<SiteLogo scrolled={scrolled} />
				</div>

				<div className="hidden flex-1 items-center justify-center lg:flex">
					{navLinks.map((link, index) => (
						<div key={link.label} className="flex items-center">
							<Button
								size="sm"
								variant="link"
								render={<Link to={link.href} />}
								nativeButton={false}
								className={cn(
									"text-sm font-medium text-black",
									isActive(link.href) && "text-yv-orange",
								)}
							>
								{link.label}
							</Button>
							{index < navLinks.length - 1 && (
								<div className="mx-2 h-4 w-px bg-black/15" aria-hidden="true" />
							)}
						</div>
					))}
				</div>

				<div className="flex w-[150px] items-center justify-end gap-3 rounded-none lg:w-[250px]">
					<Button
						variant="outline"
						className="hidden rounded-md border-black p-5 px-4 text-black transition-colors hover:bg-transparent hover:text-black sm:flex lg:px-7"
					>
						Schedule Visit
					</Button>
					<div className="relative hidden sm:block">
						<Button
							variant="yv-orange"
							className="rounded-md p-5 px-4 lg:px-7"
							type="button"
							onClick={() => setShowContactMenu((prev) => !prev)}
						>
							Call Now
							<ChevronDown className="size-4" />
						</Button>
						{showContactMenu && (
							<div className="absolute top-full right-0 mt-2 w-52 rounded-md border border-[#eddcd5] bg-white p-2 shadow-lg">
								{contactNumbers.map((contact) => (
									<a
										key={contact.label}
										href={contact.href}
										className="block rounded-md px-3 py-2 text-sm text-[#333333] transition-colors hover:bg-[#faf4f2] hover:text-yv-orange"
									>
										<span className="block text-[11px] font-semibold tracking-wide text-[#766f6a] uppercase">
											{contact.label}
										</span>
										<span>{contact.value}</span>
									</a>
								))}
							</div>
						)}
					</div>

					<button
						type="button"
						className="text-black lg:hidden"
						onClick={() => setMobileOpen(!mobileOpen)}
						aria-label="Toggle menu"
					>
						{mobileOpen ? (
							<X className="size-6" />
						) : (
							<Menu className="size-6" />
						)}
					</button>
				</div>
			</nav>

			{mobileOpen && (
				<div className="border-t bg-white px-4 py-4 lg:hidden">
					<div className="flex flex-col gap-1">
						{navLinks.map((link, index) => (
							<div key={link.label}>
								<Link
									to={link.href}
									className={cn(
										"block px-3 py-2 text-sm font-medium text-black hover:bg-muted",
										isActive(link.href) && "text-yv-orange",
									)}
									onClick={() => setMobileOpen(false)}
								>
									{link.label}
								</Link>
								{index < navLinks.length - 1 && (
									<div className="mx-3 h-px bg-black/10" aria-hidden="true" />
								)}
							</div>
						))}
						<Button
							variant="outline"
							className="mt-2 border-black text-black hover:bg-transparent hover:text-black"
						>
							Schedule Visit
						</Button>
						<Button
							variant="yv-orange"
							className="mt-2"
							type="button"
							onClick={() => setShowContactMenu((prev) => !prev)}
						>
							<Phone className="size-3.5" />
							Call Now
							<ChevronDown className="size-4" />
						</Button>
						{showContactMenu && (
							<div className="mt-2 rounded-md border border-[#eddcd5] bg-[#faf4f2] p-2">
								{contactNumbers.map((contact) => (
									<a
										key={contact.label}
										href={contact.href}
										className="block rounded-md px-3 py-2 text-sm text-[#333333] transition-colors hover:bg-white hover:text-yv-orange"
									>
										<span className="block text-[11px] font-semibold tracking-wide text-[#766f6a] uppercase">
											{contact.label}
										</span>
										<span>{contact.value}</span>
									</a>
								))}
							</div>
						)}
					</div>
				</div>
			)}
		</header>
	);
}
