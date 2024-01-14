export class Technology {
	name: string;

	constructor(obj: { name: string }) {
		this.name = obj.name;
	}
}

export class Skill {
	name: string;
	technologies: Technology[];

	constructor(obj: { name: string; technologies: Technology[] }) {
		this.name = obj.name;
		this.technologies = obj.technologies;
	}
}

export class SkillArea {
	name: string;
	skills: Skill[];

	constructor(obj: { name: string; skills: Skill[] }) {
		this.name = obj.name;
		this.skills = obj.skills;
	}
}


export const skillAreas: (SkillArea | Skill)[] = [
	new Skill({
		name: 'Programming',
		technologies: [new Technology({ name: 'Python' }), new Technology({ name: 'JavaScript' })]
	}),
	new Skill({
		name: 'Python Libraries',
		technologies: [
			new Technology({ name: 'Django' }),
			new Technology({ name: 'Django Rest Framework' }),
			new Technology({ name: 'Django Polymorphic' }),
			new Technology({ name: 'Django Configs' }),
			new Technology({ name: 'FastAPI' }),
			new Technology({ name: 'Pydantic' }),
			new Technology({ name: 'Black' }),
			new Technology({ name: 'Celery' }),
			new Technology({ name: 'FactoryBoy' })
		]
	}),
	new Skill({
		name: 'Dev Ops Tools',
		technologies: [
			new Technology({ name: 'Poetry' }),
			new Technology({ name: 'Python Fabric' }),
			new Technology({ name: 'Ansible' }),
			new Technology({ name: 'Docker' }),
			new Technology({ name: 'Sentry' })
		]
	}),
	new Skill({
		name: 'Data Analytics',
		technologies: [
			new Technology({ name: 'Google BigQuery' }),
			new Technology({ name: 'Google Dashboards' }),
			new Technology({ name: 'Grafana' })
		]
	}),
	new SkillArea({
		name: 'Databases',
		skills: [
			new Skill({
				name: 'NoSQL',
				technologies: [
					new Technology({ name: 'Firebase Realtime Database' }),
					new Technology({ name: 'MongoDB' })
				]
			}),
			new Skill({
				name: 'SQL',
				technologies: [new Technology({ name: 'MySQL' }), new Technology({ name: 'PostgreSQL' })]
			})
		]
	}),
	new Skill({ name: 'Languages', technologies: [new Technology({ name: 'English' })] }),
	new Skill({
		name: 'Workflow Tools',
		technologies: [
			new Technology({ name: 'Trello' }),
			new Technology({ name: 'Jira' }),
			new Technology({ name: 'TeamCity' }),
			new Technology({ name: 'Confluence' }),
			new Technology({ name: 'Slack' }),
			new Technology({ name: 'ClickUp' })
		]
	}),
	new Skill({
		name: 'A bit of',
		technologies: [
			new Technology({ name: 'AWS configuring' }),
			new Technology({ name: 'Grafana charts configuring' })
		]
	})
];
