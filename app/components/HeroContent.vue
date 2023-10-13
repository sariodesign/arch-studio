<script setup>
defineProps({
	content: {
		title: String,
		content: String,
		image: String,
		responsive: Object
	}

})
</script>

<template>
	<section class="hero-content">
		<figure class="hero-content-image"> 
			<picture>
				<source :srcset="content.responsive.desktop" media="(min-width: 1024px)" />
				<source :srcset="content.responsive.tablet" media="(min-width: 768px)" />
				<img :src="content.image" :alt="content.title" />
			</picture>
		</figure>
		<div class="hero-content-text">
			<h1>{{ content.title }}</h1>
			<p>{{ content.text }}</p>
		</div>
	</section>
</template>

<style lang="scss">
	.hero-content {
		margin-bottom: 76px;
		position: relative
	}

	.hero-content-image {
		margin-bottom: 20px;
	}

	.hero-content-text {
		padding: 0 32px;
		position: relative;

		@media screen and (min-width: 768px) {
			background-color: var(--white);
			bottom: 0;
			box-sizing: border-box;
			padding: 0 58px;
			position: absolute;
			right: -57px;
			width: 573px;
		}

		@media screen and (min-width: 1024px) {
			right: 0;
			padding: 0 0 0 182px;
			width: 628px;
		}

		h1 {
			font-size: 48px;
			line-height: 52px;
			margin: 0;

			@media screen and (min-width: 768px) {
				font-size: 72px;
				line-height: 64px;
				margin-bottom: 38px;
				padding-top: 162px;

				&:before {
					background-color: var(--light-grey);
					content: '';
					display: block;
					height: 1px;
					left: 0;
					position: relative;
					top: -73px;
					width: 65px;
				}
			}

			@media screen and (min-width: 1024px) {
				padding-top: 218px
			}
		}

		p {
			color: var(--dark-grey);
			font-size: 18px;
			line-height: 24px;
			margin: 0;
		}

		&:before {
			background-color: var(--white);
			content: '';
			position: absolute;
			left: 0;
			height: 45px;
			top: -65px;
			width: 83%;

			@media screen and (min-width: 768px) {
				background-color: transparent;
				content: 'About';
				color: var(--very-light-grey);
				font-family: "Spartan Bold";
				font-size: 120px;
				font-weight: bold;
				left: auto;
				line-height: 1;
				right: 57px;
				top: -57px;
				width: auto;
			}

			@media screen and (min-width: 1024px) {
				font-size: 200px;
				left: -8px;
				right: auto;
				top: -112px;
			}
		}
	}
</style>