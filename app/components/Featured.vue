<script setup>
import { ref } from 'vue';

const featuredList = ref([
	{
		image: '/image-del-sol.jpg',
		name: 'Project Del Sol'
	},
	{
		image: '/image-228b.jpg',
		name: '228B Tower'
	},
	{
		image: '/image-prototype.jpg',
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
					<img :src="featured.image" :alt="featured.name" />
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

		.btn-link {
			align-self: center;
		}
	}

	.featured-item {
		position: relative
	}

	.featured-content {
		background-color: rgba(0,0,0,.35);
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
	}

	.featured-image {
		margin: 0 0 24px;

		img {
			vertical-align: bottom;
		}
	}
</style>