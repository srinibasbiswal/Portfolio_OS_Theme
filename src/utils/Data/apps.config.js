import AboutMe from "../../components/Applications/AboutMe/AboutMe";
import Experience from "../../components/Applications/AboutMe/Experience";

const appConfig = [
	{
		id: "aboutMe",
		name: "About Me",
		order: 1,
		icon: "",
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "About Me",
				component: AboutMe,
			},
			{
				name: "Experience",
				component: Experience,
			},
		],
	},
	{
		id: "documents",
		name: "Documents",
		order: 2,
		icon: "",
		showInDesktop: true,
	},
];

export default appConfig;
