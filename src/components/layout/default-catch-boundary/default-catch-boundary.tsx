import {
	isRouteErrorResponse,
	Link,
	useLocation,
	useRevalidator,
	useRouteError,
} from "react-router";

export function DefaultCatchBoundary() {
	const error = useRouteError();
	const location = useLocation();
	const revalidator = useRevalidator();
	const isRoot = location.pathname === "/";
	const title = isRouteErrorResponse(error)
		? `${error.status} ${error.statusText}`
		: "Something went wrong";
	const message = isRouteErrorResponse(error)
		? error.data
		: error instanceof Error
			? error.message
			: "An unexpected error occurred.";

	console.error(error);

	return (
		<div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-6 p-4">
			<div className="max-w-xl space-y-3 text-center">
				<h1 className="text-2xl font-bold text-gray-900">{title}</h1>
				<p className="text-sm text-gray-600">
					{typeof message === "string"
						? message
						: "Please try again or return to a working page."}
				</p>
			</div>
			<div className="flex flex-wrap items-center gap-2">
				<button
					type="button"
					onClick={() => {
						revalidator.revalidate();
					}}
					className="rounded-sm bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700"
				>
					Try Again
				</button>
				{isRoot ? (
					<Link
						to="/"
						className="rounded-sm bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700"
					>
						Home
					</Link>
				) : (
					<button
						type="button"
						className="rounded-sm bg-gray-600 px-2 py-1 font-extrabold text-white uppercase dark:bg-gray-700"
						onClick={() => {
							window.history.back();
						}}
					>
						Go Back
					</button>
				)}
			</div>
		</div>
	);
}
