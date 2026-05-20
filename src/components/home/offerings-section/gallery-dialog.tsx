import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import * as React from "react";
import type { Offering } from "./offerings-section.types";

interface GalleryDialogProps {
	isOpen: boolean;
	onClose: () => void;
	offerings: Offering[];
	initialIndex: number;
}

export function GalleryDialog({
	isOpen,
	onClose,
	offerings,
	initialIndex,
}: GalleryDialogProps) {
	const [activeIndex, setActiveIndex] = React.useState(initialIndex);

	React.useEffect(() => {
		if (isOpen) setActiveIndex(initialIndex);
	}, [isOpen, initialIndex]);

	React.useEffect(() => {
		if (!isOpen) return;
		if (offerings[activeIndex]?.video) return;

		const interval = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % offerings.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [isOpen, offerings, activeIndex]);

	const active = offerings[activeIndex];

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={onClose}
						className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm"
					/>

					{/* Dialog Content */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.9, y: 20 }}
						className="fixed inset-0 z-[101] m-auto flex h-fit max-w-3xl flex-col items-center justify-center p-4"
					>
						<div className="relative w-full rounded-2xl bg-white p-6 shadow-2xl">
							{/* Close Button */}
							<div className="mb-6 flex items-center justify-between">
								<h3 className="font-gilda text-2xl text-yv-dark-purple">
									{active.title}
								</h3>
								<button
									type="button"
									onClick={onClose}
									className="flex size-10 items-center justify-center rounded-full bg-yv-orange text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
								>
									<X className="size-6" />
								</button>
							</div>

							<div className="grid gap-4">
								<div className="overflow-hidden rounded-xl bg-black md:h-[480px]">
									{active.video ? (
										<motion.video
											key={`v-${activeIndex}`}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="mx-auto h-full w-auto object-contain"
											src={active.video}
											poster={active.image}
											autoPlay
											loop
											muted
											playsInline
											controls
										/>
									) : (
										<motion.img
											key={`i-${activeIndex}`}
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											className="h-auto w-full max-w-full object-cover object-center md:h-full"
											src={active.image}
											alt={active.title}
											loading="lazy"
											decoding="async"
										/>
									)}
								</div>
								<div className="grid grid-cols-5 gap-4">
									{offerings.map((offering, imgIdx) => (
										<div key={offering.title}>
											<button
												type="button"
												className="h-20 w-full cursor-pointer rounded-lg object-cover object-center transition-all"
												style={{
													backgroundImage: `url(${offering.image})`,
													backgroundSize: "cover",
												}}
												onClick={() => setActiveIndex(imgIdx)}
												onKeyDown={(e) => {
													if (e.key === "Enter" || e.key === " ") {
														setActiveIndex(imgIdx);
													}
												}}
												aria-label={`View ${offering.title}`}
											/>
										</div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}
