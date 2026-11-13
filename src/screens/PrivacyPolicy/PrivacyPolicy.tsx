import { ReactNode } from "react";

const APP_NAME = "MagNetWorth";
const WEBSITE_URL = "http://magnetworth.com/";
const PRIVACY_EMAIL = "gabriel@gabrielbigelow.com";

const H2 = ({ children }: { children: ReactNode }) => (
	<h2 className="text-[1.5rem] font-bold text-gold mt-[2rem] mb-[0.75rem]">
		{children}
	</h2>
);
const H3 = ({ children }: { children: ReactNode }) => (
	<h3 className="text-[1.15rem] font-bold text-white mt-[1.25rem] mb-[0.5rem]">
		{children}
	</h3>
);
const P = ({ children }: { children: ReactNode }) => (
	<p className="mb-[0.75rem]">{children}</p>
);
const UL = ({ items }: { items: ReactNode[] }) => (
	<ul className="list-disc pl-[1.5rem] mb-[0.75rem] flex flex-col gap-[0.25rem]">
		{items.map((item, i) => (
			<li key={i}>{item}</li>
		))}
	</ul>
);
const B = ({ children }: { children: ReactNode }) => (
	<strong className="text-white">{children}</strong>
);

export default function PrivacyPolicy() {
	return (
		<main className="max-w-[800px] mx-auto px-[1.5rem] py-[2rem] leading-[1.6]">
			<h1 className="text-[2.25rem] font-bold text-white mb-[1rem]">
				Privacy Policy
			</h1>
			<P>
				<B>Effective Date:</B> November 12, 2026
				<br />
				<B>Last Updated:</B> November 12, 2026
			</P>

			<P>
				{APP_NAME} ("we," "our," or "us") respects your privacy. This
				Privacy Policy explains how we collect, use, store, and share
				information when you use our website, application, and related
				services (collectively, the "Services").
			</P>
			<P>
				Our guiding principle is simple:{" "}
				<B>
					Your information is used to provide, maintain, and improve
					services that benefit you. We do not sell your personal
					information or financial data to third parties.
				</B>
			</P>
			<P>
				By using our Services, you acknowledge the practices described
				in this Privacy Policy.
			</P>

			<H2>1. Information We Collect</H2>
			<P>We collect information necessary to provide our Services.</P>

			<H3>Information You Provide</H3>
			<P>This may include:</P>
			<UL
				items={[
					"Name and email address.",
					"Account registration and login information.",
					"Bank bonus offers you choose to track.",
					"Promotional requirements, deadlines, and progress.",
					"Preferences and other information you voluntarily provide.",
				]}
			/>

			<H3>Financial Account Information</H3>
			<P>
				If you choose to connect a financial account, we may receive
				information such as:
			</P>
			<UL
				items={[
					"Financial institution name.",
					"Account names, types, and identifiers.",
					"Account balances, where authorized.",
					"Transaction history and transaction descriptions.",
					"Transaction dates and amounts.",
					"Information used to identify qualifying deposits or transfers.",
				]}
			/>
			<P>
				Financial account connections are facilitated through
				third-party providers, including Stripe Financial Connections.
				These providers securely facilitate access to your financial
				institution information according to the permissions you grant.
			</P>
			<P>
				We do not ask you to provide your bank login credentials
				directly to us. Authentication is handled through the
				applicable financial connection provider.
			</P>
			<P>
				The information we receive depends on the permissions you
				authorize and the features you use.
			</P>

			<H3>Automatically Collected Information</H3>
			<P>
				When you use our Services, we may collect technical and usage
				information, including:
			</P>
			<UL
				items={[
					"IP address.",
					"Browser and device information.",
					"Operating system.",
					"Usage activity and interactions with our Services.",
					"Cookies and similar technologies.",
					"Application performance and diagnostic information.",
				]}
			/>
			<P>
				We use this information to maintain security, troubleshoot
				issues, and improve the user experience.
			</P>

			<H2>2. How We Use Your Information</H2>
			<P>
				We use collected information for purposes related to providing,
				maintaining, securing, and improving our Services.
			</P>
			<P>These purposes include:</P>
			<UL
				items={[
					"Creating and maintaining your account.",
					"Displaying and tracking available bank promotional offers.",
					"Helping you understand promotional requirements.",
					"Monitoring connected financial accounts for qualifying transactions.",
					"Tracking deposits, transfers, deadlines, and bonus progress.",
					"Notifying you about important promotional milestones.",
					"Providing customer support.",
					"Processing subscriptions and payments.",
					"Improving platform functionality and reliability.",
					"Preventing fraud, unauthorized access, and misuse.",
				]}
			/>
			<P>
				We do not use your financial information to sell financial
				products, build advertising profiles for third parties, or
				market unrelated products to you.
			</P>

			<H2>3. We Do Not Sell Your Information</H2>
			<P>
				<B>
					We do not sell your personal information, financial account
					information, transaction history, or other user data to
					third parties.
				</B>
			</P>
			<P>
				Your financial information is not a product. We collect and
				process it to help you use our Services.
			</P>
			<P>
				We do not sell user transaction data, provide financial
				activity profiles to advertisers, or allow third parties to
				purchase access to your personal financial information.
			</P>

			<H2>4. When We Share Information</H2>
			<P>
				We do not sell your information. However, certain third-party
				service providers may need to process limited information to
				operate our platform and provide requested services.
			</P>
			<P>These providers may include:</P>
			<UL
				items={[
					<>
						<B>Financial connection providers:</B> Such as Stripe,
						which facilitates secure connections to financial
						institutions and provides authorized financial data.
					</>,
					<>
						<B>Cloud hosting and infrastructure providers:</B> To
						store information and operate our application.
					</>,
					<>
						<B>Payment processors:</B> To securely process
						subscription payments.
					</>,
					<>
						<B>Email and communication providers:</B> To send
						account notifications and service-related
						communications.
					</>,
					<>
						<B>Analytics providers:</B> Such as PostHog, to help us
						understand application usage, identify issues, and
						improve our Services.
					</>,
					<>
						<B>Financial transaction providers:</B> If you use
						premium automation features, providers that facilitate
						ACH transfers, direct-deposit changes, or other
						financial actions you authorize.
					</>,
				]}
			/>
			<P>
				These providers may process information only as necessary to
				perform services for us, subject to applicable contractual and
				legal requirements.
			</P>
			<P>
				We may also disclose information when required by law, to
				respond to valid legal requests, to protect our rights and
				users, or in connection with a business transaction such as a
				merger or acquisition, subject to applicable privacy
				requirements.
			</P>

			<H2>5. Financial Account Connections and Data Storage</H2>
			<P>Connecting a financial account is optional.</P>
			<P>
				When you connect an account, you authorize the applicable
				financial connection provider to retrieve the categories of
				information presented during the connection and authorization
				process.
			</P>
			<P>
				We use authorized financial information to identify qualifying
				transactions and track your progress toward bank promotional
				requirements.
			</P>
			<P>
				Financial transaction information retrieved through these
				connections may be stored in our own systems and databases to
				support account tracking, historical records, progress
				calculations, and other application functionality.
			</P>
			<P>
				We retain and process this information according to this
				Privacy Policy.
			</P>
			<P>
				You may disconnect a financial account through the available
				account settings or through the applicable financial connection
				provider.
			</P>
			<P>
				Disconnecting an account generally stops future access through
				that connection. Information previously retrieved may remain in
				our systems until it is deleted in accordance with this Privacy
				Policy and applicable retention requirements.
			</P>

			<H2>6. Financial Automation and User Authorization</H2>
			<P>
				Certain premium features may allow you to prepare, authorize,
				or facilitate financial actions intended to help you complete
				bank promotional requirements.
			</P>
			<P>These features may include:</P>
			<UL
				items={[
					"Preparing or facilitating ACH transfers between accounts you own.",
					"Assisting with direct-deposit allocation changes.",
					"Facilitating other financial actions supported by our third-party providers.",
				]}
			/>
			<P>
				<B>
					We will not initiate a financial action through our Services
					without your explicit confirmation of that action.
				</B>
			</P>
			<P>
				Before confirming an action, you will be provided with relevant
				information about the action, such as the accounts involved,
				the amount, and other applicable details.
			</P>
			<P>
				Depending on the action and provider, you may also be required
				to authenticate or provide additional authorization directly
				through your financial institution, payroll provider, or
				another third-party service.
			</P>
			<P>
				To facilitate an action you authorize, we may share the
				information necessary with the applicable financial institution
				or service provider.
			</P>
			<P>
				You remain responsible for reviewing and confirming financial
				actions before they are submitted. Availability of these
				features depends on supported institutions, providers, and
				applicable requirements.
			</P>

			<H2>7. Analytics and Product Improvement</H2>
			<P>
				We use PostHog to understand how users interact with our
				application and to improve our Services.
			</P>
			<P>Analytics information may include:</P>
			<UL
				items={[
					"Pages and application features visited.",
					"Buttons and features used.",
					"General usage patterns.",
					"Browser, device, and technical information.",
					"Application errors and performance information.",
				]}
			/>
			<P>
				We configure analytics to limit the information collected and
				avoid sending sensitive financial information, such as bank
				login credentials, full account numbers, account balances, and
				transaction-level financial details, to analytics providers.
			</P>
			<P>
				Analytics information is used to improve application
				functionality, reliability, and the overall user experience.
			</P>

			<H2>8. Data Security</H2>
			<P>
				We take reasonable administrative, technical, and
				organizational measures to protect your personal and financial
				information from unauthorized access, disclosure, alteration,
				and destruction.
			</P>
			<P>
				These measures may include access controls, encryption where
				appropriate, secure authentication, and monitoring for
				suspicious activity.
			</P>
			<P>
				No method of electronic storage or transmission is completely
				secure. While we work to protect your information, we cannot
				guarantee absolute security.
			</P>

			<H2>9. Data Retention and Deletion</H2>
			<P>
				We retain personal information for as long as reasonably
				necessary to provide our Services, maintain your account,
				comply with legal obligations, resolve disputes, and enforce
				our agreements.
			</P>
			<P>
				You may delete your account directly through the account
				settings available within our application.
			</P>
			<P>
				When you delete your account, we will take reasonable steps to
				delete or de-identify associated personal information,
				including stored financial transaction information, subject to
				applicable legal, security, and legitimate business retention
				requirements.
			</P>
			<P>
				Certain information may need to be retained for legal
				compliance, fraud prevention, accounting, dispute resolution,
				or other lawful purposes.
			</P>
			<P>
				Information stored in backups may remain for a limited period
				before being permanently overwritten or deleted.
			</P>

			<H2>10. Your Privacy Rights</H2>
			<P>
				Depending on where you live, you may have rights regarding your
				personal information, including the right to:
			</P>
			<UL
				items={[
					"Request access to personal information we maintain about you.",
					"Request correction of inaccurate information.",
					"Request deletion of personal information.",
					"Request a copy of certain information in a portable format.",
					"Withdraw consent for certain data processing.",
					"Disconnect financial accounts.",
					"Opt out of certain types of data processing where applicable.",
				]}
			/>
			<P>You may also delete your account through the application.</P>
			<P>
				For additional privacy requests, contact us at {PRIVACY_EMAIL}.
			</P>
			<P>
				We will respond to qualifying requests in accordance with
				applicable privacy laws.
			</P>

			<H2>11. Cookies and Similar Technologies</H2>
			<P>
				We may use cookies and similar technologies to maintain login
				sessions, remember preferences, protect account security, and
				understand how our Services are used.
			</P>
			<P>
				You can manage cookies through your browser settings. Disabling
				certain cookies may affect the functionality of our Services.
			</P>

			<H2>12. Third-Party Services</H2>
			<P>
				Our Services may integrate with third-party products and
				services, including financial institutions, financial
				connection providers, payment processors, analytics providers,
				and infrastructure providers.
			</P>
			<P>
				Those third parties may have their own privacy policies and
				terms governing their services.
			</P>
			<P>
				We encourage you to review the privacy policies of any
				third-party provider you interact with.
			</P>

			<H2>13. Children's Privacy</H2>
			<P>
				Our Services are intended for adults and are not directed
				toward children under the age of 18.
			</P>
			<P>
				We do not knowingly collect personal information from children
				under 18. If we become aware that such information has been
				collected, we will take reasonable steps to delete it.
			</P>

			<H2>14. Changes to This Privacy Policy</H2>
			<P>
				We may update this Privacy Policy as our Services evolve or as
				required by applicable law.
			</P>
			<P>
				When we make material changes, we will update the "Last
				Updated" date and provide additional notice when required.
			</P>
			<P>
				If a change materially affects how we collect, use, or share
				financial information, we will obtain any additional consent
				required by applicable law or our financial service providers.
			</P>

			<H2>15. Contact Us</H2>
			<P>
				If you have questions about this Privacy Policy, your personal
				information, or how we handle financial account data, please
				contact us:
			</P>
			<P>
				<B>{APP_NAME}</B>
				<br />
				Email: {PRIVACY_EMAIL}
				<br />
				Website:{" "}
				<a
					href={WEBSITE_URL}
					className="text-satblue hover:text-satblue/80 underline"
				>
					{WEBSITE_URL}
				</a>
			</P>
		</main>
	);
}
