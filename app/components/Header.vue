<script setup>
defineProps({
  mobileMenuVisible: Boolean,
})
</script>

<template>
	<header :class="{ 'menu-opened': mobileMenuVisible }">
		<NuxtLink to="/">
			<img class="logo" src="logo.svg" alt="logo" />
		</NuxtLink>
		<nav>
			<NuxtLink to="/portfolio">Portfolio</NuxtLink>
			<NuxtLink to="/about">About</NuxtLink>
			<NuxtLink to="/contact">Contact</NuxtLink>
		</nav>
		<button class="btn-menu" @click="mobileMenuVisible = !mobileMenuVisible">
			<img src="icon-hamburger.svg" alt="menu icon" />
		</button>
	</header>
</template>

<style lang="scss">
	header {
		align-items: center;
		display: flex;
		flex: 1 0 100%;
		justify-content: space-between;
		margin-bottom: 32px;
		overflow: hidden;
		padding: 0 32px;
		position: relative;

		@media screen and (min-width: 768px) {
			margin-bottom: 56px;
			justify-content: flex-start;
		}
	}

	.logo {
		@media screen and (min-width: 768px) {
			margin-right: 76px;
		}	

		@media screen and (min-width: 768px) {
			margin-right: 96px;
		}
	}

	nav {
		box-sizing: border-box;
		display: flex;
		column-gap: 60px;		

		@media screen and (max-width: 767px) {
			background-color: var(--very-light-grey);
			flex-direction: column;
			left: 0;
			padding: 40px 48px;
			position: fixed;
			row-gap: 16px;
			top: 96px;
			transform: translate(calc(100% + 32px));
			transition: all .25s linear;
			width: calc(100% - 32px);
		}

		.menu-opened & {
			transform: translate(32px);
		}

		a {
			color: var(--medium-grey);
			font-size: 18px;
			font-weight: 700;
			line-height: 1;
			text-decoration: none;

			@media screen and (max-width: 767px) {
				font-size: 32px;
				line-height: 40px;
			}

			&:hover {
				color: var(--very-dark-blue);
			}
		}
	}

	button {
		background-color: transparent;
		border: 0;
		cursor: pointer;

		@media screen and (min-width: 768px) {
			display: none;
		}
	}
</style>