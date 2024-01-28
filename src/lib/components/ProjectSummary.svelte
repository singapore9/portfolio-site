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
			<p>
				{project.sumDescription}
			</p>
			<div class="techsContainer">
				<div class="techs">
					{#each project.technologies as tech}
						<div>{tech}</div>
					{/each}
				</div>
			</div>
		</div>
		{#if project.icon}
			<img src={project.icon} class="area" alt="project area" />
		{/if}
	</div>
</div>

<style lang="less">
	h2 {
		display: flex;
		margin: 0;
	}

	.project {
		margin: 0 10px 10px;
		color: white;
		background: #111;
		transition: transform 0.2s ease-in-out;
		border-radius: 25px;

		.inner {
			border-radius: 25px;
			overflow: hidden;
			position: relative;
			text-align: start;
			box-sizing: border-box;
			display: flex;
			flex-direction: column;
			padding: 20px;
			transition: transform 0.2s ease-in-out;

			p {
				font-weight: 100;
				color: #708090;
			}

			.header {
				z-index: 1;
			}

			.area {
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

	.techsContainer {
		display: flex;
		flex-wrap: wrap;
		gap: 10px;

		.techs {
			&:extend(.techsContainer);
			justify-content: space-between;
			align-items: center;

			div {
				padding: 3px 5px 0;
				border-radius: 3px;
				background-color: rgba(168, 192, 97, 0.37);

				&:hover,
				&:active {
					background-color: rgba(168, 192, 97, 0.7);
				}
			}
		}
	}

	@media (min-width: 900px) {
		.project {
			min-height: 200px;
		}
	}
</style>
