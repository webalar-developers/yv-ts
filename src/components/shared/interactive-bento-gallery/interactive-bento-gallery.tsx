import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type React from "react";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

export interface MediaItemType {
	id: number;
	type: string;
	title: string;
	desc: string;
	url: string;
	span: string;
	icon?: React.ComponentType<{ className?: string }>;
}

const MediaItem = ({
	item,
	className,
	onClick,
}: {
	item: MediaItemType;
	className?: string;
	onClick?: () => void;
}) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [isInView, setIsInView] = useState(false);
	const [isBuffering, setIsBuffering] = useState(true);

	useEffect(() => {
		const options = {
			root: null,
			rootMargin: "50px",
			threshold: 0.1,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				setIsInView(entry.isIntersecting);
			});
		}, options);

		if (videoRef.current) {
			observer.observe(videoRef.current);
		}

		return () => {
			if (videoRef.current) {
				observer.unobserve(videoRef.current);
			}
		};
	}, []);

	useEffect(() => {
		let mounted = true;

		const handleVideoPlay = async () => {
			if (!videoRef.current || !isInView || !mounted) return;

			try {
				if (videoRef.current.readyState >= 3) {
					setIsBuffering(false);
					await videoRef.current.play();
				} else {
					setIsBuffering(true);
					await new Promise((resolve) => {
						if (videoRef.current) {
							videoRef.current.oncanplay = resolve;
						}
					});
					if (mounted) {
						setIsBuffering(false);
						await videoRef.current.play();
					}
				}
			} catch (error) {
				console.warn("Video playback failed:", error);
			}
		};

		if (isInView) {
			handleVideoPlay();
		} else if (videoRef.current) {
			videoRef.current.pause();
		}

		return () => {
			mounted = false;
			if (videoRef.current) {
				videoRef.current.pause();
				videoRef.current.removeAttribute("src");
				videoRef.current.load();
			}
		};
	}, [isInView]);

	if (item.type === "video") {
		return (
			<div className={`${className} relative overflow-hidden`}>
				<video
					ref={videoRef}
					className="w-full h-full object-cover"
					onClick={onClick}
					playsInline
					muted
					loop
					preload="auto"
					style={{
						opacity: isBuffering ? 0.8 : 1,
						transition: "opacity 0.2s",
						transform: "translateZ(0)",
						willChange: "transform",
					}}
				>
					<source src={item.url} type="video/mp4" />
				</video>
				{isBuffering && (
					<div className="absolute inset-0 flex items-center justify-center bg-black/10">
						<div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
					</div>
				)}
			</div>
		);
	}

	return (
		<button
			type="button"
			className={cn(
				className,
				"p-0 border-none bg-transparent block w-full h-full overflow-hidden cursor-pointer",
			)}
			onClick={onClick}
		>
			<img
				src={item.url}
				alt={item.title}
				className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
				loading="lazy"
				decoding="async"
			/>
		</button>
	);
};

interface GalleryModalProps {
	selectedItem: MediaItemType;
	isOpen: boolean;
	onClose: () => void;
	setSelectedItem: (item: MediaItemType | null) => void;
	mediaItems: MediaItemType[];
}
export const GalleryModal = ({
	selectedItem,
	isOpen,
	onClose,
	setSelectedItem,
	mediaItems,
}: GalleryModalProps) => {
	const [dockPosition, setDockPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		if (!isOpen) return;

		const handleKeyDown = (e: KeyboardEvent) => {
			const currentIndex = mediaItems.findIndex(
				(item) => item.id === selectedItem?.id,
			);
			if (e.key === "ArrowRight") {
				const nextIndex = (currentIndex + 1) % mediaItems.length;
				setSelectedItem(mediaItems[nextIndex]);
			} else if (e.key === "ArrowLeft") {
				const prevIndex =
					(currentIndex - 1 + mediaItems.length) % mediaItems.length;
				setSelectedItem(mediaItems[prevIndex]);
			} else if (e.key === "Escape") {
				onClose();
			}
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => window.removeEventListener("keydown", handleKeyDown);
	}, [selectedItem, mediaItems, setSelectedItem, onClose, isOpen]);

	if (!isOpen) return null;

	return (
		<>

			<motion.div
				initial={{ scale: 0.98 }}
				animate={{ scale: 1 }}
				exit={{ scale: 0.98 }}
				transition={{
					type: "spring",
					stiffness: 400,
					damping: 30,
				}}
				className="fixed inset-0 w-full h-full backdrop-blur-2xl bg-black/40
                          overflow-hidden z-[100]"
			>

				<div className="h-full flex flex-col pt-16 pb-20">
					<div className="flex-1 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center">
						<AnimatePresence mode="wait">
							<motion.div
								key={selectedItem.id}
								className="w-full max-w-4xl flex flex-col"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{ duration: 0.3 }}
							>

								<div className="mb-6 text-center">
									<h3 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
										{selectedItem.title}
									</h3>
									<p className="text-white/80 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
										{selectedItem.desc}
									</p>
								</div>

								<button
									type="button"
									className="relative aspect-video w-full rounded-md overflow-hidden shadow-2xl bg-black/20 cursor-pointer p-0 border-none block"
									onClick={onClose}
									aria-label="Close view"
								>
									<MediaItem
										item={selectedItem}
										className="w-full h-full object-contain"
										onClick={() => {}}
									/>
								</button>
							</motion.div>
						</AnimatePresence>
					</div>
				</div>

				<motion.button
					className="absolute top-6 right-6 z-[110]
                              p-3 rounded-md bg-black/60 text-white hover:bg-black/80
                              backdrop-blur-md transition-colors shadow-2xl border border-white/20"
					onClick={onClose}
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					aria-label="Close modal"
				>
					<X className="size-6" />
				</motion.button>
			</motion.div>

			<motion.div
				drag
				dragMomentum={false}
				dragElastic={0.1}
				initial={false}
				animate={{ x: dockPosition.x, y: dockPosition.y }}
				onDragEnd={(_, info) => {
					setDockPosition((prev) => ({
						x: prev.x + info.offset.x,
						y: prev.y + info.offset.y,
					}));
				}}
				className="fixed z-[120] left-1/2 bottom-4 -translate-x-1/2 touch-none"
			>
				<motion.div
					className="relative rounded-md bg-sky-400/20 backdrop-blur-xl
                             border border-blue-400/30 shadow-lg
                             cursor-grab active:cursor-grabbing"
				>
					<div className="flex items-center -space-x-2 px-3 py-2">
						{mediaItems.map((item, index) => (
							<motion.div
								key={item.id}
								onClick={(e) => {
									e.stopPropagation();
									setSelectedItem(item);
								}}
								style={{
									zIndex:
										selectedItem.id === item.id
											? 30
											: mediaItems.length - index,
								}}
								className={`
                                    relative group
                                    w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 flex-shrink-0
                                    rounded-md overflow-hidden
                                    cursor-pointer hover:z-20
                                    ${
																			selectedItem.id === item.id
																				? "ring-2 ring-white/70 shadow-lg"
																				: "hover:ring-2 hover:ring-white/30"
																		}
                                `}
								initial={{ rotate: index % 2 === 0 ? -15 : 15 }}
								animate={{
									scale: selectedItem.id === item.id ? 1.2 : 1,
									rotate:
										selectedItem.id === item.id
											? 0
											: index % 2 === 0
												? -15
												: 15,
									y: selectedItem.id === item.id ? -8 : 0,
								}}
								whileHover={{
									scale: 1.3,
									rotate: 0,
									y: -10,
									transition: { type: "spring", stiffness: 400, damping: 25 },
								}}
							>
								<MediaItem
									item={item}
									className="w-full h-full"
									onClick={() => setSelectedItem(item)}
								/>
								<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white/20" />
								{selectedItem.id === item.id && (
									<motion.div
										layoutId="activeGlow"
										className="absolute -inset-2 bg-white/20 blur-xl"
										initial={{ opacity: 0 }}
										animate={{ opacity: 1 }}
										transition={{ duration: 0.2 }}
									/>
								)}
							</motion.div>
						))}
					</div>
				</motion.div>
			</motion.div>
		</>
	);
};

interface InteractiveBentoGalleryProps {
	mediaItems: MediaItemType[];
	title: string;
	description: string;
	gridClass?: string;
	itemClass?: string;
}

const InteractiveBentoGallery: React.FC<InteractiveBentoGalleryProps> = ({
	mediaItems,
	title,
	description,
	gridClass = "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[250px]",
	itemClass = "relative overflow-hidden rounded-md cursor-move",
}) => {
	const [selectedItem, setSelectedItem] = useState<MediaItemType | null>(null);
	const [items, setItems] = useState(mediaItems);
	const [isDragging, setIsDragging] = useState(false);

	return (
		<div className="w-full py-8">
			<div className="mb-8 text-center">
				<motion.h1
					className="text-2xl sm:text-3xl md:text-4xl font-bold bg-clip-text text-transparent
                             bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900
                             dark:from-white dark:via-gray-200 dark:to-white"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					{title}
				</motion.h1>
				<motion.p
					className="mt-2 text-sm sm:text-base text-gray-600 dark:text-gray-400"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{description}
				</motion.p>
			</div>
			<AnimatePresence mode="wait">
				{selectedItem ? (
					<GalleryModal
						selectedItem={selectedItem}
						isOpen={true}
						onClose={() => setSelectedItem(null)}
						setSelectedItem={setSelectedItem}
						mediaItems={items}
					/>
				) : (
					<motion.div
						className={gridClass}
						initial="hidden"
						animate="visible"
						exit="hidden"
						variants={{
							hidden: { opacity: 0 },
							visible: {
								opacity: 1,
								transition: { staggerChildren: 0.1 },
							},
						}}
					>
						{items.map((item, index) => (
							<motion.div
								key={item.id}
								layoutId={`media-${item.id}`}
								className={cn(itemClass, item.span)}
								onClick={() => !isDragging && setSelectedItem(item)}
								variants={{
									hidden: { y: 50, scale: 0.9, opacity: 0 },
									visible: {
										y: 0,
										scale: 1,
										opacity: 1,
										transition: {
											type: "spring",
											stiffness: 350,
											damping: 25,
											delay: index * 0.05,
										},
									},
								}}
								whileHover={{ scale: 1.02 }}
								drag
								dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
								dragElastic={1}
								onDragStart={() => setIsDragging(true)}
								onDragEnd={(_e, info) => {
									setIsDragging(false);
									const moveDistance = info.offset.x + info.offset.y;
									if (Math.abs(moveDistance) > 50) {
										const newItems = [...items];
										const draggedItem = newItems[index];
										const targetIndex =
											moveDistance > 0
												? Math.min(index + 1, items.length - 1)
												: Math.max(index - 1, 0);
										newItems.splice(index, 1);
										newItems.splice(targetIndex, 0, draggedItem);
										setItems(newItems);
									}
								}}
							>
								<MediaItem
									item={item}
									className="absolute inset-0 w-full h-full"
									onClick={() => !isDragging && setSelectedItem(item)}
								/>
								<div className="absolute inset-0 z-20 flex flex-col justify-end p-6 pointer-events-none">
									<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
									<div className="relative">
										{item.icon && (
											<item.icon className="size-10 mb-3 text-white" />
										)}
										<h3 className="text-white text-xl md:text-2xl font-bold leading-tight">
											{item.title}
										</h3>
									</div>
								</div>
							</motion.div>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default InteractiveBentoGallery;
