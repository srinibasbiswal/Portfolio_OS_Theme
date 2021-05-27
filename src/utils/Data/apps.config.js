import AboutMe from "../../components/Applications/AboutMe/AboutMe";
import Education from "../../components/Applications/AboutMe/Education";
import Experience from "../../components/Applications/AboutMe/Experience";
import Projects from "../../components/Applications/AboutMe/Projects";

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
			{
				name: "Education",
				component: Education,
			},
			{
				name: "Projects",
				component: Projects,
			},
		],
	},
	{
		id: "documents",
		name: "Documents",
		order: 2,
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
];

export default appConfig;
