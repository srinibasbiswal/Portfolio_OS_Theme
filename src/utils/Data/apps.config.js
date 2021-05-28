import AboutMe from "../../components/Applications/AboutMe/AboutMe";
import Education from "../../components/Applications/AboutMe/Education";
import Experience from "../../components/Applications/AboutMe/Experience";
import Projects from "../../components/Applications/AboutMe/Projects";
import Resume from "../../components/Applications/AboutMe/Resume";
import Skills from "../../components/Applications/AboutMe/Skills";
import VSCode from "../../components/Applications/VSCode";

const appConfig = [
	{
		id: "aboutMe",
		name: "About Me",
		order: 1,
		icon: "",
		showInDesktop: true,
		isApplication: false,
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
			{
				name: "Skills",
				component: Skills,
			},
			{
				name: "Resume",
				component: Resume,
			},
		],
	},
	{
		id: "vscode",
		name: "VSCode",
		order: 2,
		icon: "",
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "VSCode",
				component: VSCode,
			},
		],
	},
];

export default appConfig;
