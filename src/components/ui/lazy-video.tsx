import { useEffect, useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";

interface LazyVideoProps {
	src?: string;
	poster?: string;
	loop?: boolean;
	muted?: boolean;
	playsInline?: boolean;
	controls?: boolean;
	paused?: boolean;
	className?: string;
}

/**
 * Lazy video wrapper that defers decode and playback until the element
 * approaches the viewport. When it scrolls back out, playback is paused.
 *
 * Keeps poster always visible so the user sees a thumbnail before play begins.
 * Never ships autoPlay in SSR HTML — playback is driven entirely by JS.
 */
export function LazyVideo({
	src,
	poster,
	loop = true,
	muted = true,
	playsInline = true,
	controls = false,
	paused = false,
	className,
}: LazyVideoProps) {
	const videoRef = useRef<HTMLVideoElement>(null);
	const { ref: containerRef, isInView } = useInView<HTMLDivElement>({
		rootMargin: "300px",
		triggerOnce: false,
	});

	useEffect(() => {
		const video = videoRef.current;
		if (!video || !src) return;

		if (isInView && !paused) {
			if (!video.src && src) {
				video.src = src;
				video.load();
			}

			const playPromise = video.play();
			if (playPromise !== undefined) {
				playPromise.catch(() => {});
			}
		} else {
			video.pause();
		}
	}, [isInView, src, paused]);

	return (
		<div ref={containerRef} className={cn("overflow-hidden", className)}>
			<video
				ref={videoRef}
				poster={poster}
				loop={loop}
				muted={muted}
				playsInline={playsInline}
				controls={controls}
				preload="none"
				className="h-full w-full object-cover"
			/>
		</div>
	);
}
