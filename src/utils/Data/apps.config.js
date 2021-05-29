import AboutMe from "../../components/Applications/AboutMe/AboutMe";
import ContactMe from "../../components/Applications/AboutMe/ContactMe";
import Education from "../../components/Applications/AboutMe/Education";
import Experience from "../../components/Applications/AboutMe/Experience";
import Projects from "../../components/Applications/AboutMe/Projects";
import Resume from "../../components/Applications/AboutMe/Resume";
import Skills from "../../components/Applications/AboutMe/Skills";
import JIOSaavn from "../../components/Applications/JIOSaavn";
import Mail from "../../components/Applications/Mail";
import VSCode from "../../components/Applications/VSCode";
import Word from "../../components/Applications/Word";

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
			{
				name: "Contact Me",
				component: ContactMe,
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
	{
		id: "jioSaavn",
		name: "JIO Saavn",
		order: 3,
		icon: "",
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "jioSaavn",
				component: JIOSaavn,
			},
		],
	},
	{
		id: "mail",
		name: "Contact Me",
		order: 4,
		icon: "",
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "mail",
				component: Mail,
			},
		],
	},
];

export default appConfig;
