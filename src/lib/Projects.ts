import tvSurvey from '$lib/assets/projectIcon/tvSurvey.png';
import projectGenerator from '$lib/assets/projectIcon/projectGenerator.png';
import deliveryService from '$lib/assets/projectIcon/deliveryService.png';
import urlShortener from '$lib/assets/projectIcon/urlShortener.png';
import investorAggregator from '$lib/assets/projectIcon/investorAggregator.png';

enum ProjectOwnershipType {
	petProject = 'PET',
	commercial = 'COMMERCIAL'
}

enum ProjectKeyWordEnum {
	externalApi = 'External API',
	atlassianApi = 'Atlassian API',
	OsmApi = 'OpenStreetMaps API',
	slackApi = 'Slack API',
	GoogleMapsApi = 'Google Maps API',
	GoogleBigQueryApi = 'Google BigQuery API',
	tvApi = "TV operators' API",
	telegramBotApi = 'Telegram Bot API',
	clioApi = 'Clio API',
	quickbooksApi = 'QuickBooks API',
	hubspotApi = 'HubSpot API',
	mathOptimization = 'Math Optimization',
	fullImplementation = 'Full service implementation',
	localization = 'Localization',
	awsEc2 = 'AWS EC2'
}

enum ProjectTechnologyEnum {
	python = 'Python',
	asyncio = 'Asyncio',
	mongodb = 'Mongo',
	django = 'Django',
	poetry = 'Poetry',
	firebaseRealtimeDb = 'Firebase Realtime Database',
	drf = 'Django Rest Framework',
	djangoFilters = 'Django Filters',
	swaggerOpenapi = 'Swagger OpenAPI',
	celery = 'Celery',
	fastApi = 'FastAPI',
	arduinoCpp = 'C++ Arduino',
	bash = 'Bash',
	docker = 'Docker'
}

export class Project {
	name: string;
	technologies: ProjectTechnologyEnum[];
	keyWords: (string | ProjectKeyWordEnum)[];
	description: string;
	sumDescription: string;
	contribution: string;
	ownershipType: ProjectOwnershipType;
	url: string | null;
	icon: string | null;

	constructor(obj: {
		name: string;
		technologies: ProjectTechnologyEnum[];
		description: string;
		sumDescription: string;
		url: string | null;
		ownershipType: ProjectOwnershipType;
		keyWords: ProjectKeyWordEnum[];
		contribution: string;
		icon: string | null;
	}) {
		this.name = obj.name;
		this.technologies = obj.technologies;
		this.description = obj.description;
		this.sumDescription = obj.sumDescription;
		this.url = obj.url;
		this.ownershipType = obj.ownershipType;
		this.keyWords = obj.keyWords;
		this.contribution = obj.contribution;
		this.icon = obj.icon;
	}
}

const projects: Project[] = [
	new Project({
		name: 'Projects initializer',
		technologies: [
			ProjectTechnologyEnum.docker,
			ProjectTechnologyEnum.bash,
			ProjectTechnologyEnum.fastApi,
			ProjectTechnologyEnum.poetry
		],
		keyWords: [ProjectKeyWordEnum.fullImplementation],
		description:
			"It solves annoying problem with manual project's initialization: creates repo in GitHub, " +
			'adds Poetry + FastAPI + Docker base setup',
		sumDescription: "It solves annoying problem with manual project's initialization",
		url: 'https://github.com/singapore9/projects-generator',
		ownershipType: ProjectOwnershipType.petProject,
		contribution: 'full project implementation',
		icon: projectGenerator
	}),
	new Project({
		name: 'TV surveys for consumers',
		technologies: [
			ProjectTechnologyEnum.django,
			ProjectTechnologyEnum.drf,
			ProjectTechnologyEnum.celery
		],
		keyWords: [ProjectKeyWordEnum.tvApi],
		description:
			"Surveys about TV programs for consumers. To get more info about consumers' interests.",
		sumDescription:
			"Surveys about TV programs for consumers. To get more info about consumers' interests.",
		url: null,
		ownershipType: ProjectOwnershipType.commercial,
		contribution: 'bugs fixing',
		icon: tvSurvey
	}),
	new Project({
		name: "Orders' delivery system",
		technologies: [ProjectTechnologyEnum.django, ProjectTechnologyEnum.drf],
		description:
			"The system is so-called as 'Uber for things/orders'. " +
			'Was implemented when taxi applications became popular. ' +
			"System can combine few orders for delivery to make more profit of driver's path",
		sumDescription: "So-called as 'Uber for things/orders'",
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.OsmApi,
			ProjectKeyWordEnum.GoogleMapsApi,
			ProjectKeyWordEnum.mathOptimization
		],
		url: null,
		ownershipType: ProjectOwnershipType.commercial,
		contribution: 'bugs fixing, tests coverage increasing',
		icon: deliveryService
	}),
	new Project({
		name: 'URLs shortener',
		technologies: [ProjectTechnologyEnum.django],
		description:
			"It's more cool to have service-related short url than 'bit.ly/...' or other wide-spread service's url",
		sumDescription: "Service-related short url than 'bit.ly/...'",
		keyWords: [ProjectKeyWordEnum.fullImplementation],
		url: null,
		ownershipType: ProjectOwnershipType.commercial,
		contribution: 'full service implementation',
		icon: urlShortener
	}),
	new Project({
		name: 'Web as single entry-point for internal services',
		technologies: [
			ProjectTechnologyEnum.django,
			ProjectTechnologyEnum.drf,
			ProjectTechnologyEnum.celery
		],
		description:
			'User can get result by 1-2 clicks on this system instead of clicking ' +
			'on few pages and waiting result from this pages.',
		sumDescription: 'User can get result by 1-2 clicks',
		keyWords: [ProjectKeyWordEnum.externalApi],
		url: null,
		ownershipType: ProjectOwnershipType.commercial,
		contribution: 'maintenance, bugs fixing, new integrations and features implementing',
		icon: null // TODO: add icon
	}),
	new Project({
		name: 'Workflow processes helper',
		technologies: [
			ProjectTechnologyEnum.python,
			ProjectTechnologyEnum.celery,
			ProjectTechnologyEnum.mongodb,
			ProjectTechnologyEnum.fastApi,
			ProjectTechnologyEnum.asyncio
		],
		description:
			"Helper handles lot's of difficult situations: " +
			'"who should do review of merge-request (with knowing about employees vacations)?", ' +
			'"does Jira issue have full info for specified status", ' +
			'"has specific user permission for making some actions/transitions"?',
		sumDescription: "Company's scrum master and processes optimizer",
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.atlassianApi,
			ProjectKeyWordEnum.slackApi,
			ProjectKeyWordEnum.mathOptimization
		],
		url: null,
		ownershipType: ProjectOwnershipType.commercial,
		contribution:
			'maintenance, bugs fixing, refactoring, new features / checks / integrations implementing, tests coverage increasing, optimization, making the system more flexible for other teams',
		icon: null // TODO: add icon
	}),
	new Project({
		name: 'Data Pipeline service',
		technologies: [
			ProjectTechnologyEnum.python,
			ProjectTechnologyEnum.celery,
			ProjectTechnologyEnum.mongodb
		],
		description:
			'Tool for making data-pipeline (extract / transform / aggregate) with different sources and Google BigQuery as destination. ' +
			"It also has optimization and mongo as cache for decreasing amount of requests to Google's service.",
		sumDescription:
			'Extract / transform / aggregate different sources to Google BigQuery as destination',
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.GoogleBigQueryApi,
			ProjectKeyWordEnum.mathOptimization,
			ProjectKeyWordEnum.fullImplementation
		],
		url: null,
		ownershipType: ProjectOwnershipType.commercial,
		contribution: 'full service implementation, bugs fixing, new integrations and sources adding',
		icon: null // TODO: add icon
	}),
	new Project({
		name: '11thestate.com | Platform for investors',
		technologies: [
			ProjectTechnologyEnum.python,
			ProjectTechnologyEnum.django,
			ProjectTechnologyEnum.drf
		],
		description:
			'Platform for communication between non-professional investors to accumulate their feedback and connect them with lawyers for work against business-owners',
		sumDescription: 'Accumulate investors feedback and connect them with lawyers',
		keyWords: [],
		url: 'https://11thestate.com/',
		ownershipType: ProjectOwnershipType.commercial,
		contribution: 'improvements, bugs fixing, new features delivering',
		icon: investorAggregator
	}),
	// company 5.
	// System for lawyers/customers
	// ● reason: much better to see prices and reviews of list of lawyers, than google about them on a whole web
	// ● Python, Django
	// ● my contribution: analyzing existing code for improvements, fixing old bugs, Django Admin
	// behavior customization, integration with HubSpot.
	new Project({
		name: 'retrievables.com | Platform for lawyers / customers',
		technologies: [
			ProjectTechnologyEnum.python,
			ProjectTechnologyEnum.django,
			ProjectTechnologyEnum.drf,
			ProjectTechnologyEnum.celery
		],
		description: 'Links customers with lawyers who can collect their debtors money',
		sumDescription: 'Lawyers who can collect your debtors money',
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.clioApi,
			ProjectKeyWordEnum.quickbooksApi,
			ProjectKeyWordEnum.hubspotApi
		],
		url: 'https://retrievables.com/',
		ownershipType: ProjectOwnershipType.commercial,
		contribution:
			'improvements, bugs fixing, new features delivering, integration with domain-related stores',
		icon: null // TODO: add icon
	}),
	new Project({
		name: 'Robotic Arm',
		technologies: [ProjectTechnologyEnum.arduinoCpp],
		description:
			'Robotic arm with 2 stepper motors, which must be able to get to specified points of ' +
			'the circle and do paint. 1st motor - rotates arm, 2nd motor - changes radius of circle.',
		sumDescription: 'Robotic arm with 2 stepper motors',
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.GoogleBigQueryApi,
			ProjectKeyWordEnum.mathOptimization,
			ProjectKeyWordEnum.fullImplementation
		],
		url: null,
		ownershipType: ProjectOwnershipType.petProject,
		contribution: 'full project implementation',
		icon: null // TODO: add icon
	}),
	new Project({
		name: 'Telegram Bot for keeping chats clear',
		technologies: [
			ProjectTechnologyEnum.python,
			ProjectTechnologyEnum.firebaseRealtimeDb,
			ProjectTechnologyEnum.asyncio
		],
		description: 'Block users by Name/Surname patterns, by message patterns',
		sumDescription: 'Smart bot who blocks spam-accounts by pattern',
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.telegramBotApi,
			ProjectKeyWordEnum.fullImplementation
		],
		url: 'https://github.com/singapore9/anti-spam-bot',
		ownershipType: ProjectOwnershipType.commercial,
		contribution: 'full project implementation',
		icon: null // TODO: add icon
	}),
	new Project({
		name: 'Telegram Bot for sport activities',
		technologies: [
			ProjectTechnologyEnum.python,
			ProjectTechnologyEnum.firebaseRealtimeDb,
			ProjectTechnologyEnum.fastApi,
			ProjectTechnologyEnum.asyncio
		],
		description:
			'Having statistic and history of exercise is one of ingredients for being motivated. ' +
			'The project has 3 parts: telegram-bot as data input, web-page as data presenter and back-end as data handler.',
		sumDescription:
			'The project has 3 parts to track your progress: telegram-bot, web-page and back-end.',
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.telegramBotApi,
			ProjectKeyWordEnum.fullImplementation,
			ProjectKeyWordEnum.localization
		],
		url: 'https://github.com/singapore9/sport-progress-bot',
		ownershipType: ProjectOwnershipType.petProject,
		contribution: 'full project implementation',
		icon: null // TODO: add icon
	}),
	new Project({
		name: 'MVP of Trello competitor',
		technologies: [
			ProjectTechnologyEnum.python,
			ProjectTechnologyEnum.django,
			ProjectTechnologyEnum.drf,
			ProjectTechnologyEnum.djangoFilters,
			ProjectTechnologyEnum.swaggerOpenapi
		],
		description:
			"MVP of Trello-like system: Cards, relations, 'due to' and other relations. " +
			'Not the easiest project to try more build- and deploy-related activities by myself',
		sumDescription: 'Just wanted to try build- / deploy-related activities',
		keyWords: [
			ProjectKeyWordEnum.externalApi,
			ProjectKeyWordEnum.fullImplementation,
			ProjectKeyWordEnum.awsEc2
		],
		url: null,
		ownershipType: ProjectOwnershipType.petProject,
		contribution: 'full project implementation',
		icon: null // TODO: add icon
	})
];

export default projects;
