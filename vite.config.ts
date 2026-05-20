import babel from "@rolldown/plugin-babel";
import tailwindcss from "@tailwindcss/vite";
import viteReact, { reactCompilerPreset } from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const config = defineConfig({
	resolve: { tsconfigPaths: true },
	build: {
		chunkSizeWarningLimit: 800,
		rolldownOptions: {
			output: {
				advancedChunks: {
					groups: [
						{
							name: "maplibre-gl",
							test: /[\\/]node_modules[\\/]maplibre-gl[\\/]/,
						},
						{
							name: "motion",
							test: /[\\/]node_modules[\\/](motion|framer-motion)[\\/]/,
						},
						{
							name: "react-router",
							test: /[\\/]node_modules[\\/]react-router[\\/]/,
						},
						{
							name: "react-vendor",
							test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
						},
					],
				},
			},
		},
	},
	plugins: [
		tailwindcss(),
		viteReact(),
		babel({ presets: [reactCompilerPreset()] }),
	],
});

export default config;
