<script lang="ts">
	import type { Project } from '$lib/Projects';

	export let project: Project;
</script>

<div class="project">
	<div class="inner">
		<div class="header">
			<h2>
				{project.name}
			</h2>
		</div>
		<div class="summary">
			{project.sumDescription}
		</div>
		<div class="techsContainer">
			<div class="techs">
				{#each project.technologies as tech}
					<div>{tech}</div>
				{/each}
			</div>
		</div>
		{#if project.icon}
			<img src={project.icon} class="icon" alt="project area" />
		{/if}
	</div>
</div>

<style lang="less">
	h2 {
		display: flex;
		margin: 0;
	}

	.project {
		width: 100%;
		height: 100%;
		color: white;
		background: #111;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;
		display: flex;
		flex-direction: column;

		.inner {
			margin: 10px;
			border-radius: 15px;
			overflow: hidden;
			position: relative;
			text-align: start;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 100%;
			padding: 20px;
			transition: transform 0.2s ease-in-out;

			& > * {
				z-index: 1;
			}

			.summary {
				font-weight: 100;
				flex-grow: 1;
				padding-top: 20px;
				padding-bottom: 20px;
				color: #708090;
			}

			.techs {
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 10px;
				align-items: center;

				div {
					width: fit-content;
					padding: 3px 5px 0;
					border-radius: 3px;
					background-color: rgba(168, 192, 97, 0.37);

					&:hover,
					&:active {
						background-color: rgba(168, 192, 97, 0.7);
					}
				}
			}

			.icon {
				z-index: 0;
				opacity: 30%;
				position: absolute;
				width: 150px;
				height: 150px;
				margin-right: -14px;
				margin-bottom: -25px;
				right: 0;
				bottom: 0;
			}
		}
	}

	@media (min-width: 900px) {
		.project {
			min-height: 200px;
		}
	}
</style>
