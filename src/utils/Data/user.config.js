import ResumePDF from "./Srinibas_Biswal_Resume.pdf";

const user = {
	firstName: "Srinibas",
	lastName: "Biswal",
	userImage: null,
	resume: ResumePDF,
	email: "srinibasbiswal02@gmail.com",
	linkedIn: "in/srinibasbiswal",
	gitHub: "srinibasbiswal",
	twitter: "srinibasbiswal",
	aboutMe: {
		intro: " I'm a techno-functional Software Development Engineer from India.",
		description:
			"I enjoy taking up complex problems and converting to an usable format. My major domains are Web Development and Python Programming.",
		outro: "When I'm not coding, you will find me watching an episode of The Office or exploring a new place.",
	},
	experiences: [
		{
			organization: "KloudGin",
			organizationPicture: null,
			isCurrent: true,
			startDate: "Jun 2019",
			endDate: null,
			positions: [
				{
					positionName: "Software Engineer",
					startDate: "Jun 2021",
					endDate: " Present",
					isPresent: true,
					description: "",
				},
				{
					positionName: "Associate Software Engineer",
					startDate: "June 2021",
					endDate: "April 2021",
					isPresent: false,
					description: "",
				},
				{
					positionName: "Trainee Engineer",
					startDate: "June 2019",
					endDate: "April 2020",
					isPresent: false,
					description: "",
				},
			],
		},
		{
			organization: "Freelance Developer",
			startDate: "2017",
			endDate: "2019",
			organizationPicture: null,
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
