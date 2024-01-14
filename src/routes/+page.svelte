<script>
	import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
	import FaTelegramPlane from 'svelte-icons/fa/FaTelegramPlane.svelte';
	import FaEnvelope from 'svelte-icons/fa/FaEnvelope.svelte';
	import FaUpwork from '$lib/components/FaUpwork.svelte';
	import { modalOpened } from '$lib/store';
	import { GitHubLink, TelegramBotLink, UpWorkLink } from '$lib/Constants';
</script>

<svelte:head>
	<title>Andrei - Main page</title>
</svelte:head>
<main>
	<!--	TODO: add animation 'palm' does rotation throw 15 secs on the page-->
	<h1>Hi!✋ <br /> I'm Andrei, Web-developer &<br /> problems solver</h1>
	<h2>💻 👉 Poland, Warsaw</h2>
	<div class="icons">
		<div
			role="button"
			tabindex="0"
			on:keypress={() => {
				modalOpened.set(true);
			}}
			on:click={() => {
				modalOpened.set(true);
			}}
		>
			<div class="icon">
				<FaEnvelope />
			</div>
		</div>

		<a href={GitHubLink} aria-label="GitHub" target="_blank" rel="noopener noreferrer">
			<div class="icon">
				<FaGithub />
			</div>
		</a>
		<a href={UpWorkLink} aria-label="UpWork" target="_blank" rel="noopener noreferrer">
			<div class="icon">
				<FaUpwork />
			</div>
		</a>
		<!--	TODO: replace bot link with work-account link	-->
		<a href={TelegramBotLink} aria-label="Telegram Bot" target="_blank" rel="noopener noreferrer">
			<div class="icon">
				<FaTelegramPlane />
			</div>
		</a>
	</div>
</main>

<style>
	a {
		color: white;
		text-decoration: none;
	}
	main {
		text-align: center;
		padding: 0;
		margin: 0 auto;
		text-align: center;

		display: flex;
		flex-direction: column;
		height: calc(100vh - 80px - 88px);
		justify-content: center;
		align-items: center;
	}

	h1 {
		font-weight: 700;
	}

	main > h1 {
		margin: 50px 10px 0;
		font-size: 36px;
	}

	.icons {
		display: flex !important;
		justify-content: center !important;
		align-items: center;
		gap: 20px;
		cursor: pointer;
		font-size: 30px;
		display: flex;
		justify-content: space-between;
		max-width: 200px;
		margin: 50px auto 0;
	}

	.icon {
		cursor: pointer;
		transition: color 0.2s ease-in-out;
		width: 40px;
	}
	.icon:hover {
		color: #ca3c25;
	}

	@media (min-width: 900px) {
		main > h1 {
			font-size: 48px;
		}
	}

	@media (min-width: 600px) {
		main {
			max-width: none;
		}
	}
</style>
