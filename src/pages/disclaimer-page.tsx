import { useEffect } from "react";
import { usePageHead } from "@/hooks/use-page-head";

export function DisclaimerPage() {
	usePageHead({
		title: "Disclaimer | Youthville Hostels",
		description:
			"Disclaimer for the Youthville Hostels website — content accuracy, third-party links, and limitation of liability.",
		path: "/disclaimer",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-white px-6 py-24">
			<div className="mx-auto max-w-4xl">
				<h1 className="mb-8 font-gilda text-4xl text-[#1f1a17]">Disclaimer</h1>
				<div className="prose prose-sm max-w-none space-y-6 text-[#6b635f]">
					<p>
						By accessing this website, the viewer acknowledges that the
						information (including brochures and marketing collaterals) is for
						informational purposes only. The viewer confirms that they have not
						relied on this information for making any booking or purchase in any
						project of Radiant Stays Pvt Ltd (formally known as Youthville
						Serviced Accommodations hereon). Nothing contained on this website
						shall be construed as advertising, marketing, booking, selling, or
						an offer for sale, or as an invitation to purchase any unit in any
						project by Youthville Serviced Accommodations.
					</p>

					<p>
						The Company shall not be held responsible for any consequences of
						actions taken by viewers relying on the material/information
						provided on this website.
					</p>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							General Information
						</h2>
						<p>
							The information provided on the website
							[https:
							is for general informational purposes only. Youthville Serviced
							Accommodations ("we," "us," or "our") makes no representations or
							warranties of any kind—express or implied—regarding the accuracy,
							completeness, reliability, suitability, or availability of the
							information, products, services, or related graphics on the
							Website. Any reliance you place on such information is strictly at
							your own risk.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Professional Advice
						</h2>
						<p>
							The content on the Website is not intended to substitute
							professional advice, including but not limited to legal,
							financial, investment, or real estate advice. We recommend
							consulting appropriate professionals before making any decisions
							or taking actions based on the information provided on this
							Website.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Updates and Modifications
						</h2>
						<p>
							While efforts are made to keep the information updated, Youthville
							Serviced Accommodations makes no guarantees regarding its
							timeliness, accuracy, or completeness. We reserve the right to
							modify, update, or remove content from the Website at any time
							without prior notice.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Third-Party Content and External Links
						</h2>
						<p>
							This Website may include content from third parties or links to
							third-party websites. Youthville Serviced Accommodations does not
							endorse or assume responsibility for the accuracy or legality of
							any such content or websites. Accessing third-party links is done
							at your own risk.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Limitation of Liability
						</h2>
						<p>
							Youthville Serviced Accommodations shall not be liable for any
							direct, indirect, incidental, special, or consequential damages,
							including but not limited to:
						</p>
						<ul className="list-disc pl-5 space-y-1">
							<li>Loss of profits, goodwill, data, or intangible losses</li>
							<li>Inability to use the Website</li>
							<li>Reliance on any content on the Website</li>
							<li>Use of third-party links or content</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Indemnification
						</h2>
						<p>
							You agree to indemnify and hold harmless Youthville Serviced
							Accommodations, its directors, employees, agents, and affiliates
							from any claims, damages, liabilities, or expenses (including
							legal fees) arising out of your use of the Website or any
							violation of this Disclaimer.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Governing Law and Jurisdiction
						</h2>
						<p>
							This Disclaimer shall be governed by and interpreted in accordance
							with the laws of the State of Maharashtra. Any disputes arising
							from the use of this Website shall fall under the exclusive
							jurisdiction of courts located in Pune, Maharashtra.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Severability
						</h2>
						<p>
							If any clause in this Disclaimer is found to be invalid or
							unenforceable under applicable law, the remaining provisions shall
							remain in full force and effect.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Changes to this Disclaimer
						</h2>
						<p>
							Youthville Serviced Accommodations reserves the right to revise
							this Disclaimer at any time. Any such changes shall become
							effective immediately upon being posted. Continued use of the
							Website implies acceptance of the revised terms.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Contact Information
						</h2>
						<p>For queries related to this Disclaimer, please contact us at:</p>
						<p className="mt-2">Phone: 73857 77377</p>
						<p>Email: info@youthvillehostel.com</p>
						<p className="mt-4 text-xs">
							Effective Date: This Disclaimer is effective as of 30 Apr 2026
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
