import { useEffect } from "react";
import { usePageHead } from "@/hooks/use-page-head";

export function TermsPage() {
	usePageHead({
		title: "Terms of Service | Youthville Hostels",
		description:
			"Terms governing your use of the Youthville Hostels website and services.",
		path: "/terms",
	});

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div className="min-h-screen bg-white px-6 py-24">
			<div className="mx-auto max-w-4xl">
				<h1 className="mb-8 font-gilda text-4xl text-[#1f1a17]">
					Terms & Conditions
				</h1>
				<div className="prose prose-sm max-w-none space-y-6 text-[#6b635f]">
					<p>
						Welcome to https:
						Terms and Conditions (“T&C”) carefully before using this Website,
						which is operated by Radiant Stays Pvt Ltd and its affiliated
						Companies (collectively known as, “Youthville Serviced
						Accommodations”). If you continue to browse and use this Website,
						you are agreeing to comply with and be bound by the following T&C of
						use, which together with our privacy policy govern Youthville
						Serviced Accommodation's relationship with you related to this
						Website. If you disagree with any part of these T&C, please do not
						use Youthville Serviced Accommodation 's Website.
					</p>

					<p>
						The term ' Youthville Serviced Accommodation ' or 'us' or 'we'
						refers to the owner of the Website. The term 'you' refers to the
						user or viewer of our Website.
					</p>

					<p>
						Please write to us at info@youthvillehostel.com if you wish to
						access these T&C or Privacy Policy in any of the languages listed in
						Schedule 8 of the Indian Constitution.
					</p>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							1. Content
						</h2>
						<p>
							Once a transaction is initiated, it cannot be cancelled through
							our platform. Please ensure that all transaction details are
							accurate before proceeding with the payment.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							2. Representation And Warranties
						</h2>
						<p className="mb-4">
							Neither Youthville Serviced Accommodations nor any third parties
							provide any warranty or guarantee as to the accuracy, timeliness,
							performance, completeness or suitability of the information and
							materials found or offered on this Website for any particular
							purpose.
						</p>
						<p className="mb-4">
							Youthville Serviced Accommodations makes no representation or
							warranty that the Website and Content are appropriate or available
							for use outside its home country, and the access and use of the
							Website and Content in jurisdictions where their access and use is
							illegal or prohibited. You are solely responsible for determining
							whether you are permitted to access and use the Website and
							Content under the laws of the jurisdiction from which you access
							and use them. You may not use, export or re-export the Content in
							violation of any applicable laws, rules or regulations.
						</p>
						<p className="mb-4 font-semibold">
							Your use of any information or materials on this Website is
							entirely at your own risk, for which we shall not be liable. It
							shall be your own responsibility to ensure that any products,
							services or information available through this Website meet your
							specific requirements.
						</p>
						<p className="mb-2">
							You hereby represent and warrant that you will not, and will not
							induce any third party to:
						</p>
						<ul className="list-disc pl-5 space-y-2">
							<li>
								use the Website or Content for, or in connection with, any
								illegal purpose, to solicit, facilitate, encourage, condone, or
								induce any illegal activity, or as otherwise prohibited by these
								T&C or applicable laws, rules or regulations, including, without
								limitation, laws applicable to the export of software and data;
								or breach any security measures implemented on the Website; or
								use any device, software or routine to interrupt or interfere
								with, or attempt to interrupt or interfere with, the proper
								operation and working of the Website, or with any other person's
								use of the Website; or track or seek to trace any information on
								any other person who visits the Website;
							</li>
							<li>
								or attempt to disable or circumvent any security mechanisms used
								by the Website or otherwise attempt to gain unauthorized access
								to any portion or feature of the Website or Content, or any
								other systems or networks connected to the Website, or to any
								server of Youthville Serviced Accommodations or its third-party
								service providers, by hacking, password “mining”, or any other
								illegal means; or use any “deep-link”, “page-scrape”, “robot”,
								“spider”, or other automatic device, program, algorithm or
								methodology, or any comparable manual process, to access,
								acquire, copy, or monitor any portion of the Website or Content
								without prior documented approval from the concerned management
								of Youthville Serviced Accommodations;
							</li>
							<li>
								copy, modify, create a derivative work of, reverse engineer,
								decompile, or otherwise attempt to extract the source code of
								any proprietary software used to provide, maintain, or otherwise
								applicable to, the Website or Content, or otherwise made
								available to you in connection with the Website or Content. In
								addition, you shall not upload, modify, publish, update, or
								share any information that: Belongs to another person and to
								which you do not have any right; Is obscene, pornographic,
								pedophilic, invasive of another's privacy, insulting or
								harassing on the basis of gender, racially or ethnically
								objectionable, relating or encouraging money laundering or
								gambling, or an online game that causes user harm, or promoting
								enmity between different groups on the grounds of religion or
								caste with the intent to incite violence; Is harmful to
								children; Infringes any patent, trademark, copyright or other
								proprietary rights; Deceives or misleads the addressee about the
								origin of the message or knowingly and intentionally
								communicates any misinformation or information which is patently
								false and untrue or misleading in nature or, in respect of any
								business of the Central Government, is identified as fake or
								false or misleading by such fact check unit of the Central
								Government as may be notified and published in the Official
								Gazette; Impersonates another person;
							</li>
							<li>
								Threatens the unity, integrity, defense, security or sovereignty
								of India, friendly relations with foreign States, or public
								order, or causes incitement to the commission of any cognizable
								offence, or prevents investigation of any offence, or is
								insulting another nation;
							</li>
							<li>
								Contains software virus or any other computer code, file or
								program designed to interrupt, destroy or limit the
								functionality of any computer resource; Is in the nature of an
								online game that is not verified as a permissible online game;
								Is in the nature of advertisement or surrogate advertisement or
								promotion of an online game that is not a permissible online
								game, or of any online gaming intermediary offering such an
								online game;
							</li>
							<li>
								Violates any law for the time being in force. If you breach any
								of T&C to use this Website, Youthville Serviced Accommodations
								will terminate access to the same immediately without the
								necessity of any notice being given to you. In any event, access
								to the Website may be terminated at any time by Youthville
								Serviced Accommodations without notice.
							</li>
						</ul>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							3. Communications
						</h2>
						<p>
							Whenever you visit the Website, Youthville Serviced Accommodations
							may ask you some information. If you fill such information, it
							will be presumed that you wish to communicate with Youthville
							Serviced Accommodations and give consent to Youthville Serviced
							Accommodations to receive communications from Youthville Serviced
							Accommodations. Youthville Serviced Accommodations will
							communicate with you through e-mail or call or by posting notices
							on the Website or by such other means as Youthville Serviced
							Accommodations may determine from time-to-time. You agree that all
							agreements, notices, disclosures and other communications that
							Youthville Serviced Accommodations provides to you satisfy any
							legal requirement that such communications be in writing, to the
							extent permitted by applicable law.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							4. Indemnification
						</h2>
						<p>
							You hereby agree to defend, indemnify and hold Youthville Serviced
							Accommodations harmless against any and all losses, liabilities,
							damages, and/or claims (including, without limitation, attorneys'
							fees and costs) arising due to the breach of these T&C or
							otherwise arising from your use or misuse of the Website or
							Content.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							5. Third-Party Sites
						</h2>
						<p>
							From time to time, this Website may also include links to other
							sites. These links are provided for your convenience to provide
							further information. They do not signify that we endorse the
							website(s). We have no responsibility for the content of the
							linked website(s). Your use of third- party sites is subject to
							the terms of use and privacy policies located on such third-party
							sites, which may be different from these T&C or Youthville
							Serviced Accommodation’s Privacy Policy.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							6. Limitation Of Liability
						</h2>
						<p>
							In no event, Youthville Serviced Accommodations shall be liable to
							you, or any third party, for any direct, special, indirect,
							incidental, punitive, exemplary, reliance, or consequential
							damages of any kind, including, but not limited to, compensation,
							reimbursement or damages in connection with, arising out of, or
							relating to, the use, or loss of use of, the Website and Content,
							loss of profits, loss of goodwill, loss of data or content, cost
							of procurement of substitute goods or services, subsequent or
							other commercial loss, or for any other reason of any kind,
							whether based on breach of any express or implied warranty or
							condition, breach of contract or tort (including, without
							limitation, negligence or strict liability), even if an Youthville
							Serviced Accommodations has been advised of the possibility of
							such damages..
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							7. Severability / Entire Agreement
						</h2>
						<p>
							These T&C, together with the Privacy Policy and any amendments
							or/and any additional agreements you may enter into with
							Youthville Serviced Accommodations in connection with the
							services, shall constitute the entire agreement between you and
							Youthville Serviced Accommodations concerning the services. If any
							provision of these T&C is deemed invalid, illegal or
							unenforceable, then that such provision shall be enforced to the
							maximum extent permissible so as to maintain the intent of these
							T&C, and all other remaining provisions of these T&C will remain
							in full force and effect.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							8. Assignment
						</h2>
						<p>
							These T&C, and any rights and licenses granted hereunder, shall
							not be transferred or assigned by you to anyone. Whereas,
							Youthville Serviced Accommodations can assign such rights and
							licenses without restriction.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							9. Governing Law
						</h2>
						<p>
							These T&C will be construed and enforced in all respects in
							accordance with the laws of India. Your use of this Website and
							any dispute arising out of such use of the Website is subject to
							the laws of India.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							10. Jurisdiction
						</h2>
						<p>
							Any court of India shall have sole and exclusive jurisdiction for
							all purposes in connection with any action or proceeding that
							arises from, or relates to, these T&C, and you hereby irrevocably
							waive any objection to such exclusive jurisdiction; provided
							however, that Youthville Serviced Accommodations may seek to
							enforce any judgment in its favor in any court of competent
							jurisdiction. Notwithstanding the foregoing, Youthville Serviced
							Accommodations may seek injunctive or other equitable relief in
							any court of competent jurisdiction to protect its proprietary and
							other rights. You agree that your breach or threatened breach of
							these T&C may result in immediate and irreparable damage to
							Youthville Serviced Accommodations for which there is no adequate
							remedy at law.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							11. Miscellaneous
						</h2>
						<p>
							This Website contains material which is owned by or licensed to
							us. This material includes, but is not limited to, the design,
							layout, look, appearance and graphics. Reproduction is prohibited
							other than in accordance with the copyright notice, which forms
							part of these T&C. All trademarks reproduced in this Website,
							which are not the property of, or licensed to the operator, are
							acknowledged on the Website. Unauthorized use of this Website may
							give rise to a claim for damages and/or be a criminal offence.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							12. Updation Of T&C
						</h2>
						<p>
							These T&C may be revised from time to time and the updated version
							will always be posted on the Website. If you do not agree to the
							new T&C, you will stop accessing the website.
						</p>
					</section>

					<section>
						<h2 className="mb-3 text-xl font-medium text-[#1f1a17]">
							13. Contact Us
						</h2>
						<p>
							If there are any questions regarding this T&C, you may contact us
							using the contact us page available on the Website.
						</p>
						<div className="mt-4 space-y-1">
							<p>Phone: 73857 77377</p>
							<p>Email: info@youthvillehostel.com</p>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
