import { Link } from "react-router";

export function CtaSection() {
	return (
		<section className="mt-10 bg-[#5f1d60] px-6 py-16 text-white md:px-12 md:py-20">
			<div className="mx-auto w-full text-center">
				<h3 className="mb-6 font-['Gilda_Display'] text-[45px] leading-tight font-normal">
					Ready to experience the YouthVille lifestyle?
				</h3>
				<div className="mt-8 flex flex-col gap-4 md:flex-row md:justify-center md:gap-6">
					<Link
						to="/hostels"
						className="inline-flex h-14 w-full cursor-pointer items-center justify-center rounded-md bg-yv-orange px-8 text-[18px] font-medium text-white shadow-[0_30px_60px_rgba(0,0,0,0.18)] md:h-20 md:w-auto md:px-12"
					>
						Secure Your Room
					</Link>

					<a
						href="https://wa.me/919595200200"
						target="_blank"
						rel="noreferrer"
						className="inline-flex h-14 w-full items-center justify-center rounded-md border border-white/35 bg-transparent px-8 text-[18px] font-medium text-white transition-colors hover:bg-white/10 hover:text-white md:h-20 md:w-auto md:px-12"
					>
						Talk to Consultant
					</a>
				</div>
			</div>
		</section>
	);
}
