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
			{#each projects as project, index}
				<div class="projectWrapper div{index + 1}">
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
			display: grid;
			grid-template-columns: repeat(9, 1fr);
			grid-template-rows: repeat(9, 1fr);
			grid-gap: 20px;

			.div1 {
				grid-area: 1 / 1 / 2 / 10;
			}
			.div2 {
				grid-area: 2 / 1 / 4 / 4;
			}
			.div3 {
				grid-area: 2 / 4 / 3 / 10;
			}
			.div4 {
				grid-area: 3 / 4 / 4 / 7;
			}
			.div5 {
				grid-area: 3 / 7 / 5 / 10;
			}
			.div6 {
				grid-area: 4 / 1 / 6 / 3;
			}
			.div7 {
				grid-area: 4 / 3 / 6 / 7;
			}
			.div8 {
				grid-area: 5 / 7 / 7 / 10;
			}
			.div9 {
				grid-area: 6 / 1 / 7 / 7;
			}
			.div10 {
				grid-area: 7 / 1 / 9 / 5;
			}
			.div11 {
				grid-area: 7 / 5 / 8 / 10;
			}
			.div12 {
				grid-area: 8 / 5 / 9 / 10;
			}
			.div13 {
				grid-area: 9 / 1 / 10 / 10;
			}
		}
	}

	@media (max-width: 900px) {
		.projectsPage {
			.projectList {
				display: flex;
				flex-direction: column;

				.projectWrapper {
					width: 100%;
				}
			}
		}
	}
</style>
