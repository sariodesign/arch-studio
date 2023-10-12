<script setup>
import { ref } from 'vue';

const featuredList = ref([
	{
		image: '/image-del-sol.jpg',
		responsive: {
			desktop: '/desktop/image-del-sol.jpg',
			tablet: '/tablet/image-del-sol.jpg'
		},
		name: 'Project Del Sol'
	},
	{
		image: '/image-228b.jpg',
		responsive: {
			desktop: '/desktop/image-228b.jpg',
			tablet: '/tablet/image-228b.jpg'
		},
		name: '228B Tower'
	},
	{
		image: '/image-prototype.jpg',
		responsive: {
			desktop: '/desktop/image-prototype.jpg',
			tablet: '/tablet/image-prototype.jpg'
		},
		name: 'Le Prototype'
	}
])

</script>

<template>
	<section class="featured">
		<h2 class="featured-title">Featured</h2>
		<ul class="featured-list">
			<li class="featured-item" v-for="featured in featuredList" :key="featured.name">
				<figure class="featured-image">
					<picture>
						<source :srcset="featured.responsive.desktop" media="(min-width: 1024px)" />
						<source :srcset="featured.responsive.tablet" media="(min-width: 768px)" />
						<img :src="featured.image" :alt="featured.name" />
					</picture>
				</figure>
				<div class="featured-content">
					<h2>{{ featured.name }}</h2>
					<NuxtLink to="/portfolio">View All Projects</NuxtLink>
				</div>
			</li>
		</ul>
		<NuxtLink class="btn-link" to="/portfolio">
			<span>See All</span>
			<img src="/icon-arrow.svg" alt="arrow icon" />
		</NuxtLink>
	</section>
</template>

<style lang="scss">
	.featured {
		display: flex;
		flex-direction: column;
		margin: 0 0 132px;
		padding: 0 32px;

		@media screen and (min-width: 768px) {
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 200px;
			padding: 0;
			row-gap: 85px;
		}

		.btn-link {
			align-self: center;
			width: 100%;

			@media screen and (min-width: 768px) {
				margin-left: auto;
				width: 169px;
			}
		}
	}

	.featured-item {
		counter-increment: count 1;
		position: relative;

		&:after {
			content: counter(count);
			color: var(--white);
			display: none;
			font-size: 250px;
			font-weight: 700;
			line-height: 200px;
			opacity: .5;
			position: absolute;
			right: 16px;
			top: 32px;
			z-index: 1;

			@media screen and (min-width: 768px) {
				display: block;
			}

			@media screen and (min-width: 1024px) {
				right: -16px;
			}
		}
	}

	.featured-content {
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

		a {
			color: var(--white);
			font-size: 18px;
			line-height: 24px;
			opacity: .75;
			text-decoration: none;
		}

		@media screen and (min-width: 1024px) {
			padding: 40px;
		}
	}

	.featured-title {
		font-size: 48px;
		line-height: 1;
		margin: 0;

		@media screen and (min-width: 768px) {
			font-size: 72px
		}
	}

	.featured-list {
		@media screen and (min-width: 768px) {
			flex: 1 0 100%;
			order: 3;
		}

		@media screen and (min-width: 1024px) {
			display: flex;
			column-gap: 30px;
		}
	}

	.featured-image {
		margin: 0 0 24px;

		@media screen and (min-width: 1024px) {
			margin: 0;
		}

		img {
			vertical-align: bottom;
		}
	}
</style>