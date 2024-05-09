import lurkerPic from "../../../_resources/images/projects/lurker/lurker.webp";
import lurkerVid from "../../../_resources/images/projects/lurker/lurkerVid.mp4";
import { ProjectData } from "../../../helpers";
import ProjectDescription from "../ProjectDescription";
import lurkerLogo from "../../../_resources/images/projects/lurker/logo.webp";

export const lurker = new ProjectData(
	"Lurker",
	{
		short: `Lurker is a Reddit clone that uses the Reddit API to
            create a streamlined "lurker" version of Reddit.`,
		long: <LurkerDescription />,
	},
	{
		static: lurkerPic,
		video: lurkerVid,
	},
	{
		github: "https://github.com/Gabriel-Bigelow/reddit-client",
		live: {
			href: "https://reddit-lurker.netlify.app/",
			logo: <img src={lurkerLogo} />,
		},
	},
	<LurkerReflection />
);

function LurkerDescription() {
	return (
		<ProjectDescription>
			<p>
				Lurker is Reddit clone built with React/Redux that forgoes all
				the unneccessary elements of the main Reddit site that a
				"lurker" would not need. By narrowing down the displayed content
				to only posts, upvotes, comments, and a subreddit list, the user
				has a much more streamlined and content-focused experience with
				Reddit. Users can still browse Reddit in the exact same way that
				they normally would, sans advertisements and all the buttons and
				features that the majority of users rarely access, such as
				posting, commenting, account settings, etc..
			</p>
			<p>
				Users can still browse Reddit in the exact same way they would
				on the main site, since the data is displayed in the same
				fashion that they are used to, with improvements:
			</p>
			<ul className="list-disc px-[1rem] mx-[1rem]">
				<li>Initial load times are noticeably decreased.</li>
				<li>
					Night Mode (dark theme) is built directly into the
					navigation bar for late-night browsing.
				</li>
				<li>
					The default popular Subreddit bar shows the top 25 most
					subscribed-to Subreddits, rather than an arbitrary list of
					subreddits.
				</li>
				<li>
					All posts are preloaded with top comments and rendered along
					with the post, so they can be accessed and read without
					having to navigate to a separate page, or open a new tab,
					decreasing overall load times, and user experience by
					removing the need to load an entirely new page and then
					scroll down to the comments.
				</li>
				<li>
					Text posts show up to 3 top comments by default, to increase
					the content of a text post (such as an AskReddit thread),
					without the need for user interaction.
				</li>
				<li>
					Image posts can be enlarged without navigating to a new
					page.
				</li>
				<li>
					Image gallery posts can be accessed without navigating to a
					new page.
				</li>
				<li>
					All video posts can be accessed without navigating to a new
					page.
				</li>
				<li>
					Hyperlink posts access the website directly from the post's
					container, given abiding XSS permissions.
				</li>
				<li>
					Navigating to different areas of the site is seamless, with
					the current page not changing until the next page is loaded.
				</li>
				<li>
					Subreddits can be accessed directly from a post, without the
					need to load another page.
				</li>
				<li>
					The search function can be used to find posts with a single
					input.
				</li>
			</ul>
		</ProjectDescription>
	);
}
function LurkerReflection() {
	return (
		<p>
			This is one of my favorite projects because it improved upon a
			product that I already enjoy. It also helped me solidify my
			understanding of React and Redux, as well as a working with APIs.
			Along with bettering my skills in React/Redux, I communicated
			regularly with a peer that was building a similar website, in which
			we helped each other talk through the problems we were having, and
			point out bugs to each other. Throughout this communication and
			production process, I learned a great deal about structuring a
			project, effectively communicating ideas to a peer, time management,
			and efficient programming. Overall, it was a pleasant preview of
			what my first experience to work in a team would be like.
		</p>
	);
}
