<script setup>
</script>

<template>
	<footer>
		<nav class="footer-nav">
			<NuxtLink to="/portfolio">Portfolio</NuxtLink>
			<NuxtLink to="/about">About Us</NuxtLink>
			<NuxtLink to="/contact">Contact</NuxtLink>
		</nav>
		<NuxtLink class="btn-link" to="/portfolio">
			<span>See Our Portfolio</span>
			<img src="icon-arrow.svg" alt="arrow icon" />
		</NuxtLink>
	</footer>
</template>

<style lang="scss" scoped>
	footer {
		background-color: var(--very-light-grey);
		padding: 92px 0 48px;

		.btn-link {
			margin: 0 auto;
		}
	}
	.footer-nav {
		align-items: center;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin-bottom: 32px;
		row-gap: 32px;

		a {
			color: var(--medium-grey);
			font-size: 18px;
			font-weight: 700;
			text-decoration: none;
		}
	}
</style>