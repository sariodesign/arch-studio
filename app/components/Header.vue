<script setup>
import { computed, ref } from 'vue';
defineProps({
  mobileMenuVisible: Boolean,
})

const isMobile = ref(false)
const mobileMenuVisible = ref(false)

const toggleMobileMenu = () => {
  if (isMobile.value) {
    mobileMenuVisible.value = !mobileMenuVisible.value
  }
}

onMounted(() => {
	let mql = window.matchMedia("(max-width: 767px)");
  isMobile.value = mql.matches;
})

const headerClass = computed(() => ({
  'menu-opened': mobileMenuVisible.value,
}))
</script>

<template>
	<header :class="headerClass">
		<NuxtLink to="/">
			<img class="logo" src="/logo.svg" alt="logo" />
		</NuxtLink>
		<nav>
			<NuxtLink activeClass="header-active-link" @click="isMobile && toggleMobileMenu()" to="/portfolio">Portfolio</NuxtLink>
			<NuxtLink activeClass="header-active-link" @click="isMobile && toggleMobileMenu()" to="/about">About</NuxtLink>
			<NuxtLink activeClass="header-active-link" @click="isMobile && toggleMobileMenu()" to="/contact">Contact</NuxtLink>
		</nav>
		<button class="btn-menu" @click="toggleMobileMenu">
			<img src="/icon-hamburger.svg" alt="menu icon" />
		</button>
	</header>
</template>

<style lang="scss" scoped>
	header {
		align-items: center;
		background-color: #ffffff;
		display: flex;
		flex: 1 0 100%;
		justify-content: space-between;
		//margin-bottom: 32px;
		overflow: hidden;
		padding: 32px;
		//position: relative;
		position: sticky;
		top: 0;
		z-index: 1001;

		@media screen and (min-width: 768px) {
			padding: 56px 0;
			position: relative;
			justify-content: flex-start;
		}

		&:after {
			background-color: #000000;
			content: '';
			height: calc(100vh - 96px);
			left: 0;
			opacity: 0;
			position: fixed;
			top: 108px;
			transition: opacity .25s ease-in-out;
			width: 100%;
			visibility: hidden;
			z-index: 2;
		}

		&.menu-opened:after {
			opacity: .5;
			visibility: visible;
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
			top: 104px;
			transform: translate(calc(100% + 32px));
			transition: all .25s linear;
			width: calc(100% - 32px);
			z-index: 4;
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

	.header-active-link {
		color: var(--very-dark-blue);
		position: relative;

		@media screen and (min-width: 768px) {
			&:after {
				background-color: var(--very-dark-blue);
				bottom: -6px;
				content: '';
				height: 1px;
				left: 50%;
				position: absolute;
				transform: translateX(-50%);
				width: 24px;
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