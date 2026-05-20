import { useEffect } from "react";
import { usePageHead } from "@/hooks/use-page-head";

export function PrivacyPolicyPage() {
	usePageHead({
		title: "Privacy Policy | Youthville Hostels",
		description:
			"How Youthville Hostels collects, uses, and protects your personal data. Read our full privacy policy.",
		path: "/privacy-policy",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-white px-6 py-24">
			<div className="mx-auto max-w-4xl">
				<h1 className="mb-8 font-gilda text-4xl text-[#1f1a17]">
					Privacy Policy
				</h1>
				<div className="prose prose-sm max-w-none space-y-6 text-[#6b635f]">
					<p>
						Thank you for visiting www.youthvillehostel.com. Our company
						respects the privacy of its visitors and considers it an important
						element of the business. Our company does not collect personal
						information about the visitors when they visit our company website
						unless they volunteer to provide that information to us.
					</p>

					<p>
						This privacy policy page sets out how “Youthville Serviced
						Accommodations” uses and protects any information that the visitors
						give our company when they use this website.
					</p>

					<p>
						“Youthville Serviced Accommodations” (referred to as “our company”)
						operates www.youthvillehostels.com (referred to as "website"). This
						page informs visitors of our company's policies regarding the
						collection, use and disclosure of Personal Information (as defined
						below) received from visitors to the website.
					</p>

					<p>
						Should our company ask its visitors to provide certain information
						by which they can be identified when using this website, then they
						can be assured that it will only be used in accordance with this
						privacy statement.
					</p>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Information Our Company May Collect
						</h2>
						<p>
							Information visitors give us. Visitors may give us information
							about themselves by filling in forms on our sites, or by
							submitting their CV, or by corresponding with us by phone, e-mail
							or otherwise. This includes information visitors provide when they
							register to use our sites, subscribe to our service, email us,
							arrange property viewings with us and request brochures from us.
							The information visitors give us may include their name, address,
							e-mail address, phone number and any other information relevant to
							their enquiry or request for information or services which our
							company may request.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Use Of The Information Collected
						</h2>
						<p>
							Our company may use personal information to contact visitors with
							newsletters, marketing or promotional materials and other
							information that might be of interest to the visitor.
						</p>
						<p>
							Visitors may opt out of these communications by clicking the
							unsubscribe option that is included in such communication to them.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">Cookies</h2>
						<p>
							Our company website may use cookies to distinguish visitors. This
							helps us to provide visitors with a good experience when they
							browse our website and also allows our company to improve our
							website. By continuing to browse our sites, visitors are agreeing
							to our use of cookies. A cookie is a small file of letters and
							numbers that we store on a visitor's browser or the hard drive of
							their computer if they agree. Cookies contain information that is
							transferred to their computer's hard drive.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Security
						</h2>
						<p>
							The security of visitors' personal information is important and
							our company has taken all reasonable measures to protect the same.
							However, our company reminds the visitors that no method of
							electronic transmission or storage is ever entirely secure, and
							that which our company uses commercially and ethically accepted
							means to protect personal information. Our company cannot
							guarantee absolute security. The visitor, by continued usage of
							the website, agrees and acknowledges the same, and will indemnify
							our company against any loss that may occur due to the breach of
							security not directly attributable to our company.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							Changes To This Privacy Policy
						</h2>
						<p>
							This Privacy Policy is effective as of 30 Apr 2026 and will remain
							in effect except with respect to any changes in its provisions in
							the future, which will be in effect immediately after being posted
							on this page.
						</p>
					</section>
				</div>
			</div>
		</div>
	);
}
