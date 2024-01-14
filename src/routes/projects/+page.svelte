<script>
	import projects from '$lib/Projects';
	import { GitHubUsername, GitHubLink } from '$lib/Constants';
	import ProjectComponent from '$lib/components/Project.svelte';
</script>

<svelte:head>
	<title>Andrei | Projects</title>
</svelte:head>

<div class="projectContainer">
	<div class="projects">
		<h1>Projects</h1>
		<p class="note">
			Note: part of my projects are under NDA so I am unable to share those projects. If there is
			anything you would like to see further, please feel free to contact me.
		</p>
		<p class="note">
			Note 2: the other part of my projects aren't interesting enough, so they are located only at my GitHub page.
		</p>
		<p class="note">My GitHub account: <a target='_blank' style="color: white; text-decoration: underline;" href="{GitHubLink}">@{GitHubUsername}</a></p>

		{#each projects as project}
			<ProjectComponent {project} />
		{/each}
	</div>
</div>

<style>
	.projectContainer {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;
		text-align: center;
	}

	.note {
		opacity: 0.5;
		margin: 0;
		max-width: 900px;
		text-align: left;
	}

	.projectContainer .projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-gap: 40px;
		margin-top: 30px;
	}

	h1 {
		font-weight: 700;
		text-align: start;
	}

	.projects {
		width: 100%;
		margin: 50px auto;
		display: grid;
		grid-gap: 1rem;
		grid-template-columns: 1fr;
		margin-bottom: 10px;
	}


	@media (min-width: 900px) {
		.projectContainer {
			padding: 0;
		}
		.projects > h1 {
			font-size: 48px;
			margin: 50px 0 0 0;
		}

		.projects {
			grid-template-columns: 1fr;
		}
	}

	@media (min-width: 600px) {
		.projects {
			grid-template-columns: 1fr;
		}
	}
</style>
