import AboutMe from "../../components/applications/about/aboutMe.about";
import ContactMe from "../../components/applications/about/contactMe.about";
import Education from "../../components/applications/about/education.about";
import Experience from "../../components/applications/about/experience.about";
import Projects from "../../components/applications/about/projects.about";
import Resume from "../../components/applications/about/resume.about";
import Skills from "../../components/applications/about/skills.about";
import Chrome from "../../components/applications/chrome.application";
import JIOSaavn from "../../components/applications/jiosaavn.application";
import Mail from "../../components/applications/mail.application";
import SpreadsheetApp from "../../components/applications/spreadsheet.application";
import VSCode from "../../components/applications/vscode.application";
import Word from "../../components/applications/document.application";
import aboutMe from "../../assets/images/apps/aboutMe.png";
import chrome from "../../assets/images/apps/chrome.svg";
import jioSaavn from "../../assets/images/apps/jioSaavn.png";
import mail from "../../assets/images/apps/mail.png";
import word from "../../assets/images/apps/word.svg";
import spreadsheet from "../../assets/images/apps/spreadsheet.svg";
import vsCode from "../../assets/images/apps/vsCode.png";
import settings from "../../assets/images/apps/settings.svg";
import BackgroundSettings from "../../components/applications/settings/background.settings";
import MacOSSettings from "../../components/macOS/settings/macOSSettings";

const appConfig = [
	{
		id: "aboutMe",
		name: "About Me",
		order: 1,
		icon: aboutMe,
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
		icon: vsCode,
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
		icon: jioSaavn,
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
		icon: mail,
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
	{
		id: "chrome",
		name: "Chrome",
		order: 5,
		icon: chrome,
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "chrome",
				component: Chrome,
			},
		],
	},
	{
		id: "word",
		name: "Word",
		order: 6,
		icon: word,
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "word",
				component: Word,
			},
		],
	},
	{
		id: "spreadsheet",
		name: "Spreadsheet",
		order: 7,
		icon: spreadsheet,
		isApplication: true,
		showInDesktop: true,
		showLinks: true,
		subComponent: [
			{
				name: "spreedsheet",
				component: SpreadsheetApp,
			},
		],
	},
	{
		id: "settings",
		name: "Settings",
		order: 8,
		icon: settings,
		showInDesktop: false,
		isApplication: false,
		showLinks: true,
		subComponent: [
			{
				name: "Background",
				component: BackgroundSettings,
			},
			{
				name: "System Settings",
				component: MacOSSettings,
			},
		],
	},
];

export default appConfig;
