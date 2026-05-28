import { useEffect, useRef, useState } from "react";

interface UseInViewOptions {
	rootMargin?: string;
	threshold?: number;
	triggerOnce?: boolean;
}

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
