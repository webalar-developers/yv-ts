import { createHead, UnheadProvider } from "@unhead/react/client";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "@/router";
import "@/styles.css";

const head = createHead();
const rootElement = document.getElementById("root");

if (!rootElement) {
	throw new Error("Root element '#root' was not found.");
}

createRoot(rootElement).render(
	<StrictMode>
		<UnheadProvider head={head}>
			<RouterProvider router={router} />
		</UnheadProvider>
	</StrictMode>,
);
