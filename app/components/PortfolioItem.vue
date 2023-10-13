<script setup>
defineProps({
	portfolio: {
		name: String,
		date: String,
		image: String,
		responsive: Object
	}
})
</script>

<template>
	<div class="portfolio-item">
		<figure class="portfolio-image">
			<picture>
				<source :srcset="portfolio.responsive.desktop" media="(min-width: 1024px)" />
				<source :srcset="portfolio.responsive.tablet" media="(min-width: 768px)" />
				<img :src="portfolio.image" :alt="portfolio.name" />
			</picture>
		</figure>
		<div class="portfolio-content">
			<h2>{{ portfolio.name }}</h2>
			<span>{{ portfolio.date }}</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.portfolio-item {
	position: relative;

	@media screen and (hover: hover) {
		&:hover {
			cursor: pointer;
			opacity: .5;
		}
	}
}

.portfolio-content {
	background-color: rgba(0,0,0,.35);
	background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%);
	box-sizing: border-box;
	color: var(--white);
	display: flex;
	flex-direction: column;
	height: 100%;
	justify-content: flex-end;
	left: 0;
	padding: 24px;
	position: absolute;
	top: 0;
	width: 100%;
	z-index: 1;

	h2 {
		font-size: 32px;
		line-height: 40px;
		margin: 0;
	}

	span {
		color: var(--white);
		font-size: 18px;
		line-height: 24px;
		margin: 0;
		opacity: .75;
		text-decoration: none;
	}

	@media screen and (min-width: 1024px) {
		padding: 40px;
	}
}

.portfolio-image {

	@media screen and (min-width: 1024px) {
		margin: 0;
	}

	img {
		width: 100%
	}
}

</style>