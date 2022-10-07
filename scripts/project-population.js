class Populator {
	constructor(projectList) {
		this.projectList = projectList;
	}

	populateAllProjectCards(projectList) {
		projectList.forEach((project) => {
			this.makeProjectCard(project);
		});
	}

	makeProjectCard(project) {
		console.log("Making project card!");

		const projectsContainerElement =
			document.getElementById("project-container");

		const card = document.createElement("a");
		card.setAttribute("href", project.githubLink);
		card.setAttribute("class", "card");
		card.setAttribute("class", "col-sm-6");
		card.style.boxShadow = "rgba(0, 0, 0, 0.24) 0px 3px 8px";
		card.style.width = "26rem";
		card.style.minWidth = "420px";
		card.style.height = "36rem";
		card.style.minHeight = "36rem";
		card.style.objectFit = "cover";
		card.style.padding = "12px";
		card.style.margin = "12px";
		card.style.backgroundColor = "lightgrey";

		const imageDiv = document.createElement("div");
		imageDiv.style.height = "50%";
		const cardImage = document.createElement("img");
		cardImage.setAttribute("class", "card-img-top");
		cardImage.setAttribute("src", "images/projectLogos/" + project.imageLink);
		cardImage.style.maxWidth = "18rem";
		cardImage.style.maxHeight = "100%";
		imageDiv.appendChild(cardImage);
		card.appendChild(imageDiv);

		const cardBody = document.createElement("div");
		cardBody.setAttribute("class", "card-body");
		cardBody.style.height = "50%";
		const cardTitle = document.createElement("h3");
		cardTitle.setAttribute("class", "card-title");
		cardTitle.innerText = project.name;
		cardBody.appendChild(cardTitle);

		const cardTeam = document.createElement("h4");
		cardTeam.setAttribute("class", "card-title");
		cardTeam.innerText = project.team;
		cardBody.appendChild(cardTeam);

		const cardCompany = document.createElement("h4");
		cardCompany.setAttribute("class", "card-title");
		if (project.company != undefined) {
			cardCompany.innerText = project.company.name;
		} else {
			cardCompany.innerText = "Unknown Company";
		}
		cardBody.appendChild(cardCompany);

		// const cardText = document.createElement("p");
		// cardText.setAttribute("class", "card-text");
		// cardText.innerText =
		//	project.description;
		// cardBody.appendChild(cardText);

		card.appendChild(cardBody);

		projectsContainerElement.appendChild(card);
	}

	detailPopup() {
		var modal = document.getElementById("myModal");

		modal.style.display = "block";

		// add detail to modal

		// show modal
		
	}

	closeModal() {
		var modal = document.getElementById("myModal");
		modal.style.display = "none";
	}
}

class Project {
	constructor(
		company = undefined,
		name = "Name",
		team = "Team",
		githubLink = "No link!",
		emailAddress = "No address!",
		imageLink = "UP.png",
		description = "Description on its way!"
	) {
		this.company = company;
		this.name = name;
		this.team = team;
		this.githubLink = githubLink;
		this.emailAddress = emailAddress;
		this.imageLink = imageLink;
		this.description = description;
	}
}

class Company {
	constructor(name = "name", imageLink = "UP.png") {
		this.name = name;
		this.imageLink = imageLink;
	}
}

window.onload = init;

function init() {
	const testProjectList = new Array();
	const testCompany1 = new Company("Test Company");
	const testProject1 = new Project(testCompany1);
	const testPopulator = new Populator(testProjectList);

	const projectList = new ProjectList();

	projectList.generateList().forEach((project) => {
		testPopulator.makeProjectCard(project);
	});
}

class ProjectList {
	constructor(projectList = null) {
		this.projectList = projectList;
	}

	generateList() {
		const projects = [];
		const epiUse = new Company("Epi-Use");
		const mathU = new Company("MathU");
		const aws = new Company("Amazon");
		const retroRabbit = new Company("Retro Rabbit");
		const agileBridge = new Company("Agile Bridge");
		const derivco = new Company("Derivco");

		const officeBooker = new Project(
			this.epiUse,
			"Office Booker",
			"Kryptos Kode",
			"https://github.com/COS301-SE-2022/Office-Booker",
			"No Email",
			"office-booker-logo.png"
		);
		const teamUtilisationMonitor = new Project(
			epiUse,
			"Team Utilisation Monitor",
			"iCreateSoftware",
			"https://github.com/COS301-SE-2022/Team-Utilisation-Monitor",
			"No Email"
		);
		const voteVault = new Project(
			"Unknown Company",
			"Vote Vault",
			"SSDpressed",
			"https://github.com/COS301-SE-2022/Vote-Vault",
			"No Email",
			"ssdpressed.png"
		);
		const reverseHand = new Project(
			aws,
			"ReverseHand",
			"Cache Money",
			"https://github.com/COS301-SE-2022/ReverseHand",
			"email",
			"reverseHand.png",
			"ReverseHand is a mobile application built with the vision of connecting local contractors and customers with a focus on reducing the power imbalances customers may face when seeking trade services. To achieve this, the mobile application enables customers to advertise their need for services through job postings where contractors can submit bids for selection and employment. ReverseHand strives to make life easier for its users by integrating the entire process of finding a contractor into one application. All communication is done through an integrated chat-application and all payments are processed securely through the app."
		);
		const gameReserves = new Project(
			epiUse,
			"Map Out Game Reserves Using Aerial Pictures",
			"The Dylpickes",
			"https://github.com/COS301-SE-2022/Map-out-game-reserves-using-aerial-photographs",
			"email",
			"mapOut.png",
			"The Map Out Game Reserves Using Aerial Photographs application is an Angular desktop application that aims to take videography of game parks from drones and use intelligent image stitching to create an interactive map. This assists in not only animal-preservation but park-preservation too."
		);
		const freshProduce = new Project(
			epiUse,
			"Fresh Produce Inventory Tracker",
			"DACERS",
			"https://github.com/COS301-SE-2022/Fresh-Produce-Inventory-Tracker",
			"email",
			"UP.png",
			"The fresh-produce tracker will be implemented to allow fresh produce-store owners to track the stock and quality of their produce through various methods. These methods will include using a scale which is placed at the bottom of a shelf, the initial combined weight of all individual items on the shelf is compared to the current combined weight of items on the shelf in order to calculate the current quantity of that specific item in stock. Security measures will be implemented to ensure the safe and ethical use of the fresh-produce tracker."
		);
		const twitterSummariser = new Project(
			mathU,
			"Twitter Summariser",
			"BitByBit",
			"https://github.com/COS301-SE-2022/Twitter-Summariser",
			"email",
			"bitbybit.png",
			"A Progressive Web App to generate an article on a given trend using curated Tweets."
		);
		const trainingBuddy = new Project(
			epiUse,
			"Training Buddy",
			"Derived",
			"https://github.com/COS301-SE-2022/Training-Buddy",
			"email",
			"UP.png",
			"Training Buddy has the vision of providing a secure and user-friendly way for exercise enthusiasts of all levels to be able to enhance their fitness journeys by connecting with like-minded users with similar training interests and scheduling workouts together."
		);
		const tradeSim = new Project(
			epiUse,
			"TradeSim",
			"AiPi",
			"https://github.com/COS301-SE-2022/TradeSim",
			"email",
			"tradesim.png",
			"Our role is to build a TradeSim system that will be responsible for containing all information for a user to customize their own ETF's and set their own rules. The user will be able to track how well their ETF is doing, and use this to decide where they want to invest their real money in the future. The goal is to create a system that will consist of a user's customized account, to help the user construct a portfolio of stocks, and define rules on how they should be traded to mimic an index tracking ETF by creating their own mini-ETF. The result will show the user how much capital they'll need to invest in the various stocks to make their own “mini-ETF” competitive against the established ETF on the market. The user is able to download these rules to a file, so they can use them for future reference when investing with their real money."
		);
		const auPair = new Project(
			epiUse,
			"The Au Pair",
			"CheemsChaps",
			"https://github.com/COS301-SE-2022/The-Au-Pair",
			"email",
			"aupair.png",
			"The Au Pair is an Ionic cross-platform application that serves as an all in one management platform whereby parents and suitable au pairs can find each other, set-up employment, manage, and coordinate how the au pairs and parents interact, to keep track of children’s needs, schedules, financials, and live locations."
		);
		const pawdopt = new Project(
			epiUse,
			"PaWdopt",
			"Cloud5",
			"https://github.com/COS301-SE-2022/PaWdopt",
			"email",
			"pawdopt.png",
			"The PawDopt application will work like the well-known tinder app, except between dogs and people. It will allow users to view and adopt dogs on a mobile application. Rescue organizations will create a profile and add members that will manage the adoption process and upload the dogs to be adopted. We will implement an AI solution using machine learning that will automatically recognise the breed of a dog from a photo of the dog and prefill some of the characteristics of the dog based on the breed. The organizations will be able to report users that have a fake account or users that should not be allowed to adopt dogs due to their home not being suitable. Rescue organization members can approve or reject user applications for dogs. \n Dogs displayed to the user will be filtered based on the characteristics they are looking for. The users will also be able to change these filters to requirements, ensuring that they are met. The application will allow users to report organizations, in case of it being a fake profile. If the user swipes left on the dog, the dog will not be shown to the user again until they request for this to be reset. When the user swipes right on the dog, the application process will begin. During the process, appointments can be made to view the dog and a chat functionality between the user and the rescue organization is made available. If the user finds a dog, they will be able to report this on the system to get recommendations of the closest rescue organizations that can be contacted."
		);
		const japaneseWritingEvaluator = new Project(
			epiUse,
			"Japanese Writing Evaluator",
			"BugSlayer",
			"https://github.com/COS301-SE-2022/Japanese-Writing-Evaluator",
			"email",
			"bugslayer.jpg",
			"The system should allow the user to log into the system using their own credentials and it should match the user to existing users in the database, if the user is not recognized it should allow them to register their profile. Once a user is logged in it should allow them to upload an image of a symbol/word/sentence that they have written and detect which symbol it is supposed to be, the writing style (Kanji, Katakana or Hiragana), compare strokes and give the user points of improvement on the symbol(s) with a score of how well their symbol(s) matches the actual one. The system should also allow users to log out or either remember their credentials and keep them logged in after they have stopped using the app."
		);
		const gymKing = new Project(
			epiUse,
			"Gym King",
			"Codebusters",
			"https://github.com/COS301-SE-2022/Gym-King",
			"email",
			"gymking.jpg",
			"Gym King is an application designed to give gym goers an extra motivatinal boost. Gym King will allow gym users to improve their workout and earn badges for doing so. The application achieves this using a combination of Artifical Intelligence, Augmented Reality and Open Source Technologies."
		);
		const intelligentvms = new Project(
			epiUse,
			"Intelligent Visitor Management System (VMS)",
			"Firestorm",
			"https://github.com/COS301-SE-2022/Intelligent-VMS-Visitor-Management-System-",
			"email",
			"vms.png",
			"The VMS is an intelligent visitor management system that provides a platform for building residents to create invites for visitors, contractors or even prospective buyers. The visitor management platform will also allow the building management to view and analyse visiting data as they see fit. The system will also provide smart suggestions using a custom AI analytics engine."
		);
		const gridWatch = new Project(
			epiUse,
			"Grid Watch",
			"Denied Access",
			"https://github.com/COS301-SE-2022/Grid-Watch",
			"email",
			"UP.png",
			"This system attempts to provide a method for members of the public to be able to communicate, and resolve, municipal issues in their areas. From there the process of resolving these issues is communicated through the GridWatch System application."
		);
		const cryptoHub = new Project(
			epiUse,
			"CryptoHub",
			"Code Force",
			"https://github.com/COS301-SE-2022/CryptoHub",
			"email",
			"UP.png",
			"CryptoHub is an interactive and social application that allows a user to explore the world of crypto. Each user has the ability to share and explore investment recommendations, crypto stories as well as have insight into crypto coins and the current global crypto news."
		);
		const charitySpot = new Project(
			epiUse,
			"Charity Spot",
			"Seal Team 301",
			"https://github.com/COS301-SE-2022/Charity-Spot",
			"email",
			"charity.png",
			"Charity-Spot is intended to serve as a platform for organisations who would like to donate items to those in need, and to assist people in need to find the items that they require.\n\nAn interactive map with a set of filters can be used to find items that have been donated. The system also has an AI component that can be used to predict when items will be donated by assisting organisations. We use this information to inform people in need of organisations that are most likely able to assist them if the items they need are not available"
		);
		const similarityIndex = new Project(
			mathU,
			"MathU Similarity Index",
			"Segmentation Cult",
			"https://github.com/COS301-SE-2022/MathU-Similarity-Index",
			"email",
			"UP.png",
			"The MathU Similarity Index App accepts a mathematical problem as user input and returns a list of similar problems. The app provides a confidence score for each problem returned by the algorithm. This confidence score is used to show how similar the returned equation is to the user input. The MathU Learning App also has functionality to solve basic math problems and gives the users access to past papers and memos. The app will be used to help users better understand the problems they are struggling with and how to solve them."
		);
		const imageConverter = new Project(
			mathU,
			"Image Converter",
			"HardCode",
			"https://github.com/COS301-SE-2022/Image-Converter",
			"email",
			"UP.png",
			"With our current climate of easy access to information, we are faced with the problem of information overload. Therefore it is important that we are able to view data in a concise format. This will allow us to understand the data in a comprehensive manner without getting distracted by unnecessary information. Graphing is a way to counter the problem effectively. However, mismatched or unclear graphs fail to help us understand the data adequately. The Image converter is a tool created for a Content Management System (CMS). It hosts a variety of functions of image manipulation, such as image cleaning, classification and filtering. The tool also manages uploaded images in a concise and efficient way. The tool will be used solely by administrators of the CMS"
		);
		const tutorMe = new Project(
			retroRabbit,
			"TutorMe",
			"CapsOn",
			"https://github.com/COS301-SE-2022/Tutor-Me",
			"email",
			"RetroRabbit.png",
			"The Tutor Me project is an idea that aims to provide a platform where students that need help academically can easily find a tutor that can help them with specific modules. This project will be useful especially now that the covid-19 pandemic has made it much difficult to have face-to-face conversations, ask for help with their studies from fellow students, and interact with lecturers for additional assistance. As with the rest of the world, every matter related to students is moving towards being digital and virtual."
		);
		const loraTracking = new Project(
			epiUse,
			"Pure LoRa Tracking",
			"Harbinger",
			"https://github.com/COS301-SE-2022/Pure-LoRa-Tracking",
			"email",
			"lora.svg",
			"Pure LoRa tracking is a system used to track and monitor endangered wildlife through lower power IoT technology (LoRaWAN). The system monitors wildlife with sensors attached to the animals relaying packet data (Strength and Time of flight) to gateway devices. The gateway devices transmits the data over the internet to a server to be stored. The stored data is processed using the location of each tower to then calculate the approximate location of each sensor. The stored data will be processed using the location of each tower to calculate the approximate location of each sensor. The management portal is used to view the maps, sensors and tracking data of diffent parks and to manage parks, LoRaWAN Devices and staff."
		);
		const slipSnapper = new Project(
			epiUse,
			"Slip Snapper",
			"Anoobis",
			"https://github.com/COS301-SE-2022/Slip-Snapper",
			"email",
			"UP.png",
			"The Slip Snapper is a cross-platform application that assists in managing an individual's expenses. It will accomplish this by allowing a user to scan their receipts using optical character recognition (OCR) with a mobile device and create comprehensive expense reports."
		);
		const chopperCharlie = new Project(
			agileBridge,
			"Chopper Charlie",
			"BitCoders",
			"https://github.com/COS301-SE-2022/Chopper-Charlie",
			"email",
			"chopper.png",
			"Chopper Charlie is a real-time image analysis platform for images taken by a drone camera. The user will be able to modify the platform according to their needs for this platform. The main uses for this platform will be the recognition and counting of cars, as well as in agricultural terms,for example, the recognition and counting of trees in a fruit orchard."
		);
		const smartHybridWorkforce = new Project(
			epiUse,
			"Smart Hybrid Workforce Monitor",
			"Arche",
			"https://github.com/COS301-SE-2022/Smart-Hybrid-Workforce-manager",
			"email",
			"arche.png",
			"Smart Hybrid Workforce Manager aims to provide companies an easy to use system to manage company resources by allowing employees to book company spaces and resources while companies migrate to a Hybrid style of working. The system uses smart scheduling to maximise work productivity and team dynamics while lowering management costs within a company."
		);
		const happyMuncher = new Project(
			retroRabbit,
			"Happy Muncher",
			"CodeBlooded",
			"https://github.com/COS301-SE-2022/Happy-Muncher",
			"email",
			"muncher.png",
			"The Happy Muncher App is a useful food budgeting and management app. It can be essential for students who are transitioning to living on their own or users who are extremely busy with work or managing a home or large family. There are many things to consider when you become responsible for your own, or someone else's, food provision, such as price/spending, wastage and making healthy food choices."
		);
		const ssi = new Project(
			derivco,
			"Exploring Self Soveriegn Identity",
			"Code of Duty",
			"https://github.com/COS301-SE-2022/Exploring-Self-Sovereign-Identity",
			"email",
			"midentity.png",
			"This project focuses on the innovative web 3.0 as well as the metaverse, more specifically in the self-sovereign identity which can be seen as a universal digital identity."
		);
		const conversationCatcher = new Project(
			epiUse,
			"Conversation Catcher",
			"Multiprocessing Moguls",
			"https://github.com/COS301-SE-2022/Conversation-Catcher",
			"email",
			"catcher.png",
			"Multiprocessing Moguls - Conversation Catcher - The conversation catcher is used to record a conversation and convert it into structured text that can be analyzed to extract the main and important ideas of the conversation."
		);
		const carpool = new Project(
			epiUse,
			"Carpool",
			"BluLance Technologies",
			"https://github.com/COS301-SE-2022/Carpool",
			"email",
			"blulance.png",
			"This is a React Native application that helps students find and join safe car trips, e.g., short trips to/from campus or longer trips to return home for the holidays."
		);
		const boardGameApp = new Project(
			epiUse,
			"Board Game Companion App",
			"Frontend Forerunners",
			"https://github.com/COS301-SE-2022/Board-Game-Companion-App",
			"email",
			"game.png",
			"The board game companion app allows its users to keep track of their board game collections, gather play statistics and provides an opportunity to play against an AI opponent. The application also provides a built-in editor for writing and uploading scripts that are used by the AI opponent."
		);

		projects.push(
			officeBooker,
			teamUtilisationMonitor,
			voteVault,
			reverseHand,
			gameReserves,
			freshProduce,
			twitterSummariser,
			trainingBuddy,
			tradeSim,
			auPair,
			pawdopt,
			japaneseWritingEvaluator,
			tutorMe,
			similarityIndex,
			imageConverter,
			cryptoHub,
			gridWatch,
			gymKing,
			intelligentvms,
			boardGameApp,
			carpool,
			ssi,
			slipSnapper,
			smartHybridWorkforce,
			chopperCharlie,
			charitySpot,
			conversationCatcher,
			happyMuncher,
			loraTracking
		);

		return projects;
	}
}
