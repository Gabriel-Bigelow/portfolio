import superBallManiaPic from "../../../_resources/images/projects/superBallMania/superBallMania.webp";
import superBallManiaVid from "../../../_resources/images/projects/superBallMania/superBallManiaVid.mp4";
import logo from "../../../_resources/images/projects/superBallMania/logo.webp";
import { ProjectData } from "../../../helpers";
import ProjectDescription from "../ProjectDescription";

export const superBallMania = new ProjectData(
	"Super Ball Mania",
	{
		short: `Super Ball Mania is an action-packed minigame-based party game with XInput gamepad support.`,
		long: <SuperBallManiaDescription />,
	},
	{
		static: superBallManiaPic,
		video: superBallManiaVid,
	},
	{
		github: "https://github.com/Gabriel-Bigelow/super-ball-mania",
		live: {
			href: "https://super-ball-mania.netlify.app/",
			logo: <img src={logo} />,
		},
		steam: "https://store.steampowered.com/app/2101990/Super_Ball_Mania/",
	},
	<SuperBallManiaReflection />
);

function SuperBallManiaDescription() {
	return (
		<ProjectDescription>
			<p>
				{" "}
				Super Ball Mania is a JavaScript-based multiplayer party game
				that utilizes the HTML canvas element, Gamepad API, and vanilla
				JavaScript. It was originally written for myself and a couple
				friends, but after having so much fun with it, I decided to
				release it on the major global software-distribution platform,
				Steam, where it has since amassed over 10,000 unique users and
				positive reviews.
			</p>
			<p>
				The game is playable with up to 8 players (4 gamepads and 4
				keyboard players OR 8 gamepads, with the assistance of a
				third-party controller grouping software such as reWASD) who
				will duke it out in 10 unique minigames, competing to have the
				most total points by the end of the game. The game also has
				working online-multiplayer through the use of Steam Remote Play
				Together.
			</p>
		</ProjectDescription>
	);
}
function SuperBallManiaReflection() {
	return (
		<p>
			This is one of my favorite projects because it was my first
			experience creating an app with API integration, as well as OAuth2
			authentication. Although initially challenging, it taught me many
			things throughout, such as how to read API documentation, as well as
			how to work with authentication.
		</p>
	);
}
