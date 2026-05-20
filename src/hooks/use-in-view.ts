import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
	rootMargin?: string;
	threshold?: number;
	triggerOnce?: boolean;
}

/**
 * Reusable IntersectionObserver hook.
 * Returns a ref to attach to the target element and a boolean indicating
 * whether that element is currently intersecting the viewport.
 *
 * triggerOnce: false by default so videos can pause when scrolled away.
 */
export function useInView<T extends Element = Element>({
	rootMargin = "200px",
	threshold = 0,
	triggerOnce = false,
}: UseInViewOptions = {}) {
	const ref = useRef<T>(null);
	const [isInView, setIsInView] = useState(false);

	useEffect(() => {
		const el = ref.current;
		if (!el) return;

		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setIsInView(true);
						if (triggerOnce) {
							observer.unobserve(el);
						}
					} else if (!triggerOnce) {
						setIsInView(false);
					}
				}
			},
			{ rootMargin, threshold },
		);

		observer.observe(el);

		return () => {
			observer.unobserve(el);
		};
	}, [rootMargin, threshold, triggerOnce]);

	return { ref, isInView };
}
