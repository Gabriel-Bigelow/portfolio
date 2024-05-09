import AWS from "./AWS";
import AdobePhotoshop from "./AdobePhotoshop";
import AdobePremierePro from "./AdobePremierePro";
import Chai from "./Chai";
import ChartJS from "./ChartJS";
import ChromeDevTools from "./ChromeDevTools";
import CommandLine from "./CommandLine";
import CSS from "./CSS";
import DBeaver from "./DBeaver";
import EDI from "./EDI";
import ExpressJS from "./ExpressJS";
import Git from "./Git";
import GitHub from "./GitHub";
import Gmail from "./Gmail";
import GraphQL from "./GraphQL";
import HTML from "./HTML";
import JavaScript from "./JavaScript";
import Jest from "./Jest";
import LinkedIn from "./LinkedIn";
import Mocha from "./Mocha";
import MySQL from "./MySQL";
import Netlify from "./Netlify";
import NodeJS from "./NodeJS";
import NodePackageManager from "./NodePackageManager";
import PostgreSQL from "./PostgreSQL";
import Postman from "./Postman";
import React from "./React";
import Redux from "./Redux";
import Shopify from "./Shopify";
import Steam from "./Steam";
import Tailwind from "./Tailwind";
import TypeScript from "./TypeScript";
import postbird from "./postbird.png";
import Google from "./Google";
import Spotify from "./Spotify";
import VisualStudioCode from "./VisualStudioCode";
import Accessibility from "./Accessibility";
import Toastify from "./Toastify";
import Liquid from "./liquid128.webp";
import Pdf from "./Pdf";

export const logos = {
	Accessibility,
	"Adobe Photoshop": AdobePhotoshop,
	"Adobe Premiere Pro": AdobePremierePro,
	AWS,
	Chai,
	"Chart.js": ChartJS,
	"Chrome Dev Tools": ChromeDevTools,
	"Command Line": CommandLine,
	CSS,
	DBeaver,
	EDI,
	"Express.js": ExpressJS,
	Git,
	GitHub,
	Gmail,
	Google,
	"Google APIs": Google,
	GraphQL,
	HTML,
	JavaScript: JavaScript,
	Jest,
	LinkedIn,
	Liquid: () => <img src={Liquid} />,
	Mocha,
	MySQL,
	Netlify,
	"Node.js": NodeJS,
	"Node Package Manager": NodePackageManager,
	pdfmake: Pdf,
	Postbird: () => <img src={postbird} />,
	PostgreSQL,
	Postman,
	React,
	Redux,
	Shopify,
	Spotify,
	Steam,
	Tailwind,
	Toastify,
	TypeScript,
	"Visual Studio Code": VisualStudioCode,
};
