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
				{project.description}
			</p>
			<p>
				Contribution: {project.contribution}
			</p>
			<div class="techsContainer">
				Technologies:
				<!--		TODO: technologies should be clickable. on click - filter projects with specified technology -->
				<div class="techs">
					{#each project.technologies as tech}
						<div>{tech}</div>
					{/each}
				</div>
			</div>
			<!-- 		TODO: move keyWords to project's page -->
			<!--		TODO: keyWords should be visibly separated, not only with comma-->
			<!--		TODO: keyWords should be clickable. on click - filter projects with specified keyWord -->
			<!--{#if project.keyWords.length > 0}-->
			<!--	<div class="keyWordsContainer">-->
			<!--		Keys:-->
			<!--		<div class="keyWords">-->
			<!--			{#each project.keyWords as keyWord}-->
			<!--				<div>{keyWord}</div>-->
			<!--			{/each}-->
			<!--		</div>-->
			<!--	</div>-->
			<!--{/if}-->
		</div>
		{#if project.url}
			<a href={project.url} target="_blank" rel="noreferrer">
				<div class="button">Project url =></div>
			</a>
		{/if}
		{#if project.icon}
			<img src={project.icon} class="area" alt="project area" />
		{/if}
	</div>
</div>

<style lang="less">
	a {
		text-decoration: none;
	}

	h2 {
		display: flex;
		margin: 0;
	}

	.project {
		padding: 20px;
		color: white;
		background: #111;
		width: 100%;
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
			padding: 2rem;
			transition: transform 0.2s ease-in-out;

			p {
				font-weight: 100;
				color: #708090;
			}

			.area {
				opacity: 64%;
				position: absolute;
				width: 150px;
				height: 150px;
				margin-right: -14px;
				margin-top: -25px;
				right: 0;
				top: 0;
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

	//.keyWordsContainer {
	//	display: flex;
	//	flex-wrap: wrap;
	//	gap: 10px;
	//
	//	.keyWords {
	//		&:extend(.keyWordsContainer);
	//		justify-content: space-between;
	//		align-items: center;
	//		div {
	//			margin: 0 0 0 10px;
	//		}
	//	}
	//}

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
