import { logos } from "../../../_resources/images/_logos/_logos";
import jammmingPic from "../../../_resources/images/projects/jammming/jammming.webp";
import jammmingVid from "../../../_resources/images/projects/jammming/jammmingVid.mp4";
import { ProjectData } from "../../../helpers";
import ProjectDescription from "../ProjectDescription";

export const jammming = new ProjectData(
	"Jammming",
	{
		short: `Jammming is a playlist editor app written using
        React native, HTML, CSS, and the Spotify API.`,
		long: <JammmingDescription />,
	},
	{
		static: jammmingPic,
		video: jammmingVid,
	},
	{
		github: "https://github.com/Gabriel-Bigelow/jammming",
		live: {
			href: "https://jammming-to-music.netlify.app/",
			logo: logos.Spotify(),
		},
	},
	<JammmingReflection />
);

function JammmingDescription() {
	return (
		<ProjectDescription>
			<p>
				Jammmming is a single-page application written with React, that
				takes advantage of the Spotify API to handle playlist creation,
				cloning, and deletion. When a user first visits Jammming, they
				will be prompted to authorize the application to make changes to
				their Spotify account, so that it can pull their current
				playlists, in order to update, clone, or delete them, as well as
				add brand-new playlists, based on user actions.
			</p>
		</ProjectDescription>
	);
}
function JammmingReflection() {
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
