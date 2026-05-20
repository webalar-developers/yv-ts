import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
	return (
		<a
			href="https://wa.me/"
			target="_blank"
			rel="noopener noreferrer"
			className="fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-md bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95"
			aria-label="Chat on WhatsApp"
		>
			<MessageCircle className="size-7" />
		</a>
	);
}
