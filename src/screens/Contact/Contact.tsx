import { SyntheticEvent, useRef, useState } from "react";
import NavArrows from "../../_components/NavArrows";
import Terminal from "../../_components/Terminal";
import { logos } from "../../_resources/images/_logos/_logos";
import emailjs from "@emailjs/browser";
import { sendToast } from "../../helpers";

const serviceId = process.env.REACT_APP_SERVICE_ID || "";
const templateId = process.env.REACT_APP_TEMPLATE_ID || "";
const publicKey = process.env.REACT_APP_PUBLIC_KEY || "";

export default function Contact() {
	const mainBodyTarget = "Let's get in touch.";

	const formRef = useRef(null);

	const [senderName, setSenderName] = useState("");
	const [senderEmail, setSenderEmail] = useState("");
	const [message, setMessage] = useState("");

	function sendEmail(e: SyntheticEvent) {
		e.preventDefault();
		emailjs.init({
			publicKey,
		});
		emailjs
			.send(serviceId, templateId, {
				from_name: senderName,
				from_email: senderEmail,
				message,
			})
			.then(
				(response) => {
					sendToast({ message: "Email sent." });
					setSenderEmail("");
					setSenderName("");
					setMessage("");
				},
				(error) => {
					sendToast({ message: "Email sent." });
				}
			);
	}

	const inputStyle =
		"px-[8px] py-[4px] border-[1px] border-blue/50 bg-blue/10 rounded focus:border-satblue outline-0 duration-300";

	return (
		<div className="flex flex-col gap-[2rem]">
			<NavArrows left="/skills" right="/" />
			<Terminal mainBodyTarget={mainBodyTarget}>
				<div className="flex flex-col gap-[2rem]">
					<div className="relative flex justify-between max-w-[1000px] left-[50%] translate-x-[-50%] [&>*]:flex [&>*]:h-[4rem]">
						<a
							href="https://www.linkedin.com/in/gabriel-bigelow-b37b24232/"
							title="Gabriel Bigelow's LinkedIn"
						>
							{logos.LinkedIn()}
						</a>
						<a
							href="mailto:gabriel@gabrielbigelow.com"
							title="Send me an email"
						>
							{logos.Gmail()}
						</a>
						<a
							href="https://github.com/Gabriel-Bigelow"
							title="Check out my GitHub"
						>
							{logos.GitHub()}
						</a>
					</div>
					<div className="flex justify-center">
						<form
							className="flex flex-col gap-[1rem] max-w-[1000px] grow"
							onSubmit={sendEmail}
							ref={formRef}
						>
							<div className="flex gap-[1rem] grow">
								<input
									className={`${inputStyle} min-w-[200px] grow`}
									name="name"
									placeholder="Name"
									value={senderName}
									onChange={(e) =>
										setSenderName(e.target.value)
									}
									required
								/>
								<input
									className={`${inputStyle} min-w-[200px] grow`}
									name="email"
									type="email"
									placeholder="Email"
									value={senderEmail}
									onChange={(e) =>
										setSenderEmail(e.target.value)
									}
									required
								/>
							</div>
							<textarea
								className={`${inputStyle} min-h-[10rem]`}
								name="message"
								placeholder="Message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
								required
							/>
							<div className="flex justify-center">
								<input
									className={`${inputStyle} text-[1.25rem] font-bold text-satblue hover:text-satblue/80 px-[16px] cursor-pointer hover:bg-blue/20 duration-100`}
									type="submit"
									value="SEND"
								/>
							</div>
						</form>
					</div>
				</div>
			</Terminal>
		</div>
	);
}
