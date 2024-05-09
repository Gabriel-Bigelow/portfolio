import { logos } from "../../../_resources/images/_logos/_logos";
import googleFlashCardsPic from "../../../_resources/images/projects/googleFlashCards/googleFlashCards.webp";
import googleFlashCardsVid from "../../../_resources/images/projects/googleFlashCards/googleFlashCardsVid.mp4";
import { ProjectData } from "../../../helpers";
import ProjectDescription from "../ProjectDescription";

export const googleFlashCards = new ProjectData(
	"Google Flash Cards",
	{
		short: `Google Flash Cards is a study app that utilizes the Google API to create and use your custom study guides wherever you go.`,
		long: <GoogleFlashCardsDescription />,
	},
	{
		static: googleFlashCardsPic,
		video: googleFlashCardsVid,
	},
	{
		github: "https://github.com/Gabriel-Bigelow/google-flash-cards",
		live: {
			href: "https://google-flash-cards.netlify.app/",
			logo: logos.Google(),
		},
	},
	<GoogleFlashCardsReflection />
);

function GoogleFlashCardsDescription() {
	return (
		<ProjectDescription>
			<iframe
				className="w-full sm:h-[300px] md:h-[500px] xl:h-[700px]"
				src="https://www.youtube.com/embed/xR3WueEZjko"
				title="YouTube video player"
				frameBorder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
			/>
			<p>
				Google Flash Cards IS useable without a Google account, but the
				created Topics, Quizzes, and flash cards will be lost if a user
				does not connect Google Flash Cards to their Google Account and
				leaves the app's webpage. Upon first login to Google Flash
				Cards, the app will check to see if a Flash Cards app - Saved
				Data document appears on a user's Google Drive account. If it
				does not, one will be created, and formatted to allow for data
				to be saved. If a saved data document does already exist, that
				data will be used to populate the Flash Cards app with elements,
				bringing the app's state back to the most recent version of the
				user's saved data.
			</p>
			<p>
				When a user creates, edits, or deletes a Topic or Quiz from
				Flash Cards, an update request will be sent to the Google API to
				make the appropriate changes to the Flash Cards app - Saved Data
				document.
			</p>
		</ProjectDescription>
	);
}
function GoogleFlashCardsReflection() {
	return (
		<p>
			This is one of my favorite projects because it is a helpful tool to
			study and quiz yourself on any topic you want, and the saved data
			can be accessed from anywhere in the world with an internet
			connection. I like to use my app to study up on programming terms
			and definitions, as well as practice interview questions.
		</p>
	);
}
