import { useEffect } from "react";
import { usePageHead } from "@/hooks/use-page-head";

export function RefundPolicyPage() {
	usePageHead({
		title: "Refund Policy | Youthville Hostels",
		description:
			"Read Youthville Hostels refund policy including eligibility, timelines, and refund request process.",
		path: "/refund-policy",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-white px-6 py-24">
			<div className="mx-auto max-w-4xl">
				<h1 className="mb-8 font-gilda text-4xl text-[#1f1a17]">Refund Policy</h1>
				<div className="prose prose-sm max-w-none space-y-6 text-[#6b635f]">
					<p>
						Last Updated: May 20, 2026
					</p>

					<p>
						Welcome to{" "}
						<a
							href="https://yv-ts.netlify.app/"
							target="_blank"
							rel="noreferrer"
						>
							YV-TS
						</a>
						. We value customer satisfaction and aim to provide transparent and
						fair refund practices.
					</p>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							1. Eligibility for Refunds
						</h2>
						<p>
							Refunds may be requested under the following conditions:
						</p>
						<ul className="list-disc space-y-1 pl-5">
							<li>The purchased service or product was not delivered as described.</li>
							<li>A duplicate payment was made accidentally.</li>
							<li>
								Technical issues from our side prevented access to the purchased
								service.
							</li>
							<li>
								The cancellation request is submitted within the eligible refund
								period.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							2. Non-Refundable Situations
						</h2>
						<p>Refunds will not be issued in the following cases:</p>
						<ul className="list-disc space-y-1 pl-5">
							<li>Change of mind after successful delivery.</li>
							<li>Failure to use the service after purchase.</li>
							<li>Incorrect information provided by the customer.</li>
							<li>Violations of our Terms of Service.</li>
							<li>Requests made after the refund eligibility period.</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							3. Refund Request Period
						</h2>
						<p>
							Customers must submit refund requests within 7 days of the original
							purchase date unless otherwise stated for a specific service or
							product.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							4. How to Request a Refund
						</h2>
						<p>To request a refund, contact us with:</p>
						<ul className="list-disc space-y-1 pl-5">
							<li>Full name</li>
							<li>Order or transaction ID</li>
							<li>Purchase date</li>
							<li>Reason for the refund request</li>
						</ul>
						<p>
							Send refund requests through the contact information available on{" "}
							<a
								href="https://yv-ts.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								YV-TS Contact Page
							</a>
							.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							5. Refund Processing Time
						</h2>
						<p>
							Approved refunds are typically processed within 5-10 business days
							depending on your payment provider or bank.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							6. Partial Refunds
						</h2>
						<p>
							In some situations, partial refunds may be granted if part of the
							service has already been delivered or used.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							7. Chargebacks
						</h2>
						<p>
							Before initiating a chargeback through your bank or payment
							provider, please contact us first so we can attempt to resolve the
							issue directly.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							8. Changes to This Policy
						</h2>
						<p>
							We reserve the right to update or modify this Refund Policy at any
							time. Changes will be posted on this page with the updated revision
							date.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							9. Contact Us
						</h2>
						<p>
							If you have any questions regarding this Refund Policy, please
							contact us through{" "}
							<a
								href="https://yv-ts.netlify.app/"
								target="_blank"
								rel="noreferrer"
							>
								https://yv-ts.netlify.app/
							</a>
							.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}