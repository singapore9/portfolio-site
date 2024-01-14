<script>
	import {skillAreas, Skill, SkillArea} from '$lib/Skills';
</script>

<svelte:head>
	<title>Andrei | About</title>
</svelte:head>

<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I am Andrei, web-developer in Poland.<br/>
			The Bachelor of Computer Science, have commercial IT experience from 2016.<br/>
			Most of this time I use Python (Django, FastAPI), but also did fun automations with VBA, C++, Arduino.<br/>
<!--			[TODO links/descriptions of automations].-->

			Since 2019 I'm a part of one big games-related company and my duties are connected with
			work with high-loaded web-services + microservices and different bots (Telegram, Slack).
		</p>
		<h2>Skills</h2>
		{#each skillAreas as skillAreaOrSkill}
			<ul>
				{#if skillAreaOrSkill instanceof Skill }
					{@const skill=skillAreaOrSkill}
					<li>
						<h4>
							{skill.name}:
						</h4>
						<div class="list">
							{#each skill.technologies as technology}
								<div>
									{technology.name}
								</div>
							{/each}
						</div>
					</li>
				{:else if (skillAreaOrSkill instanceof SkillArea)}
					{@const skillArea=skillAreaOrSkill}
					<li>
						<h4>
							{skillArea.name}:
						</h4>
						{#each skillArea.skills as skill}
							<h4>
								{skillArea.name} [{skill.name}]:
							</h4>
							<div class="list">
								{#each skill.technologies as technology}
									<div>
										{technology.name}
									</div>
								{/each}
							</div>
						{/each}
					</li>
				{/if}
			</ul>
		{/each}
	</main>
</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}

	h2 {
		margin-top: 50px;
	}

	.list {
		display: flex;
		flex-direction: column;
		gap: 30px;
	}

	@media (min-width: 900px) {
		.list {
			flex-direction: row;
		}
		main > h1 {
			font-size: 48px;
		}
	}
</style>
