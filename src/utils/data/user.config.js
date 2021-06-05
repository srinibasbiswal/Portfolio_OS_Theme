import ResumePDF from "./Srinibas_Biswal_Resume.pdf";
import default_avatar from "../../assets/images/baseImages/default_avatar.svg";
import KloudGin from ".././../assets/images/data/KloudGin.png";
import Freelance from ".././../assets/images/data/Freelance.png";

const user = {
	firstName: "Srinibas",
	lastName: "Biswal",
	userImage: default_avatar,
	resume: ResumePDF,
	email: "srinibasbiswal02@gmail.com",
	linkedIn: "in/srinibasbiswal",
	gitHub: "srinibasbiswal",
	twitter: "srinibasbiswal",
	aboutMe: {
		intro: " I'm a Full Stack Software Development Engineer from India.",
		description:
			"I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development (React / Angular) and Software Development (Java / Python).",
		outro: "When I'm not developing any stuff , you will find me re-watching an episode of The Office or exploring a new place.",
	},
	experiences: [
		{
			organization: "KloudGin",
			organizationPicture: KloudGin,
			isCurrent: true,
			startDate: "Jun 2019",
			endDate: null,
			positions: [
				{
					positionName: "Software Engineer",
					startDate: "May 2021",
					endDate: " Present",
					isPresent: true,
					description:
						"During this time, I worked on the redesigning and development of the new UI for the product using AngularJS.I also developed multiple APIs to support the GIS feature and also worked on the configuration of the GIS in the product.",
				},
				{
					positionName: "Associate Software Engineer",
					startDate: "May 2020",
					endDate: "April 2021",
					isPresent: false,
					description:
						"During this time, I designed and developed multiple APIs for the EAM Module and Inventory Management Module. For the EAM module, I also developed and implemented APIs for supporting new features in the product such as Asset Criticality, Purchase Order, and Material Order modules.",
				},
				{
					positionName: "Trainee Engineer",
					startDate: "June 2019",
					endDate: "April 2020",
					isPresent: false,
					description:
						"During this time, I developed and implemented the User Management Module including the development of the supporting APIs and configuration of the UI for the dashboard using Java and KloudGin Platform. I also worked on the API documentation using Swagger API.",
				},
			],
		},
		{
			organization: "Freelance Developer",
			startDate: "2017",
			endDate: "2019",
			organizationPicture: Freelance,
			isCurrent: false,
			positions: [
				{
					positionName: "Fullstack Developer",
					startDate: "2017",
					endDate: "2019",
					isPresent: false,
					description:
						"I was a freelance developer during my Bachelor's degree where I worked with different established companies like Prelude, Ediolon and Youngster's Worldwide.",
				},
			],
		},
	],
	education: [
		{
			instituteName:
				"ITER, Siksha 'O' Anusandhan (Deemed to be University)",
			degree: "Bachelor's Degree in Computer Science and Engineering",
			year: "2019",
			id: 1,
		},
		{
			instituteName: "O.D.M. Public School, Bhubaneswar",
			degree: "Intermediate",
			year: "2015",
			id: 2,
		},
		{
			instituteName: "Prabhujee English Medium School, Bhubaneswar",
			degree: "Matriculation",
			year: "2013",
			id: 3,
		},
	],
	projects: [
		{
			projectName: "NoteStack",
			description:
				"A notes management platform/application where students can share their course notes easily with each other.",
			madeWith: ["Android", "Java", "Firebase", "Firestore"],
			link: "https://github.com/srinibasbiswal/NoteStack",
		},
		{
			projectName: "Bus Management",
			description:
				"A bus management system for ITER, BBSR which helps to know different bus routes and makes easy to decode which route to take.",
			madeWith: ["Python", "TKinter", "Firebase"],
			link: "https://iter-bus.firebaseapp.com/",
		},
		{
			projectName: "Seat Swapper",
			description:
				"A train seat swapping system where we can get our desired train seat without any extra payment. This was a project for IBS hackathon.",
			madeWith: [
				"Java",
				"MySQL",
				"BlockChain",
				"HTML",
				"CSS",
				"JavaScript",
			],
			link: "https://github.com/srinibasbiswal/IBS-Hackathon",
		},
		{
			projectName: "Flight Ticket Saver",
			description:
				"A flight booking system which was dealing with the bumping of seats with the help of Etherium Smart Contract. This was a project for IATA Hackathon.",
			madeWith: ["Python", "DJANGO", "HTML", "CSS", "JavaScript"],
			link: "https://github.com/srinibasbiswal/IATA-Hackathon",
		},
	],
	skills: [
		{
			name: "Language Proficiency",
			values: [
				"Python",
				"Java",
				"JavaScript",
				"ReactJS",
				"Firebase",
				"HTML",
				"CSS",
			],
		},
		{
			name: "Tools Proficiency",
			values: ["Git", "PyCharm", "Eclipse", "IntelliJ IDEA", "Postman"],
		},
		{
			name: "Database Proficiency",
			values: ["MySQL", "MongoDB", "Firestore"],
		},
	],
};

export default user;
