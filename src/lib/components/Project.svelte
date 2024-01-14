<script lang="ts">
	import type { Project } from '$lib/Projects';

	export let project: Project;
</script>

<div class="project">
	<div class="header">
		<h2>
			{project.name}
		</h2>
		<p>
			{project.description}
		</p>
		<p>
			Contribution: {project.contribution}
		</p>
		<div class="techsContainer">
			Technologies:
			<!--		TODO: technologies should be visibly separated-->
			<!--		TODO: technologies should be clickable. on click - filter projects with specified technology -->
			<div class="techs">
				{#each project.technologies as tech}
					<div>{tech}</div>
				{/each}
			</div>
		</div>
		<!--		TODO: keyWords should be visibly separated, not only with comma-->
		<!--		TODO: keyWords should be clickable. on click - filter projects with specified keyWord -->
		{#if project.keyWords.length > 0}
			<div class="keyWordsContainer">
				Keys:
				<div class="keyWords">
					{#each project.keyWords as keyWord}
						<div>{keyWord}</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>
	{#if project.url}
		<a href={project.url} target="_blank" rel="noreferrer">
			<div class="button">Project url =></div>
		</a>
	{/if}
	<!--	TODO: background image for Project block, to visualise the project-->
</div>

<style>
	a {
		text-decoration: none;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	.project {
		text-align: start;
		box-sizing: border-box;
		display: flex;
		flex-direction: column;
		color: white;
		background: #111;
		padding: 2rem;
		width: 100%;
		border-radius: 5px;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
	}

	.project p {
		font-weight: 100;
		color: #708090;
	}

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.techs {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.techs > div {
		margin: 0 0 0 10px;
	}

	.keyWordsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;
	}

	.keyWords {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.keyWords > div {
		margin: 0 0 0 10px;
	}

	.button {
		display: flex;
		justify-content: center;
		align-items: center;
		color: white;
		border: 2px solid white;
		padding: 10px;
	}

	@media (min-width: 900px) {
		.project {
			min-height: 200px;
		}
		.button {
			max-width: 200px;
		}
	}
</style>
