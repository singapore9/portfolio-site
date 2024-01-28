<script>
	import projects from '$lib/Projects';
	import { GitHubUsername, GitHubLink } from '$lib/Constants';
	import ProjectSummaryComponent from '$lib/components/ProjectSummary.svelte';
</script>

<svelte:head>
	<title>Andrei | Projects</title>
</svelte:head>

<div class="projectsPage">
	<div class="pageSummary">
		<h1>Projects</h1>
		<p class="note">
			Note: part of my projects are under NDA so I am unable to share those projects. If there is
			anything you would like to see further, please feel free to contact me.
		</p>
		<p class="note">
			Note 2: the other part of my projects aren't interesting enough, so they are located only at
			my GitHub page.
		</p>
		<p class="note">
			My GitHub account: <a target="_blank" href={GitHubLink}>@{GitHubUsername}</a>
		</p>

		<div class="projectList">
			<!--		TODO: should be something like a filter: for keyWords, technologies, etc-->
			{#each projects as project}
				<div class="projectWrapper">
					<ProjectSummaryComponent {project} />
				</div>
			{/each}
		</div>
	</div>
</div>

<style lang="less">
	.projectsPage {
		width: 100%;
		max-width: 900px;
		display: flex;
		justify-content: center;
		box-sizing: border-box;
		text-align: center;
		padding: 1em;
		margin: 0 auto;

		.pageSummary {
			display: grid;
			grid-template-columns: 1fr;
			grid-gap: 40px;
			margin-top: 30px;
			width: 100%;
			margin-bottom: 10px;

			h1 {
				font-weight: 700;
				text-align: start;
			}

			.note {
				opacity: 0.5;
				margin: 0;
				max-width: 900px;
				text-align: left;
				a {
					color: white;
					text-decoration: underline;
				}
			}
		}

		.projectList {
			flex-flow: column wrap;
			column-count: 3;

			.projectWrapper {
				width: 270px;
				padding: 5px;
			}
		}
	}

	@media (max-width: 900px) {
		.projectsPage {
			.projectList {
				column-count: 1;

				.projectWrapper {
					width: 100%;
				}
			}
		}
	}
</style>
