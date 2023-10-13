<script setup>
	defineProps({
		content: {
			title: String,
			text: Array,
			image: String
		}
	})
</script>

<template>
	<section class="about-block">
		<div class="about-content">
			<h2>{{ content.title }}</h2>
			<p v-for="(item, index) in content.text" :key="index">{{ item }}</p>
		</div>
		<figure>
			<img :src="content.image" :alt="content.title">
		</figure>
	</section>

</template>

<style lang="scss" scoped>

	.about-block {
		margin-bottom: 112px;
		padding: 0 32px;

		@media screen and (min-width: 1024px) {
			display: flex;
		}
	}

	figure {
		display: none;

		@media screen and (min-width: 1024px) {
			display: block;
		}
	}

	h2 {
		font-size: 48px;
		line-height: 52px;
		margin: 0 0 22px;
		padding-top: 68px;

		&:before {
			background-color: var(--light-grey);
			content: '';
			display: block;
			height: 1px;
			left: 0;
			position: relative;
			top: -68px;
			width: 65px;
		}

		@media screen and (min-width: 768px) {
			font-size: 72px;
			font-weight: 700;
			line-height: 64px;
			margin: 0 0 62px;
			padding-top: 49px;
			width: 446px;

			&:before {
				top: -49px;
			}
		}
	}

	p {
		color: var(--dark-grey);
		font-size: 18px;
		line-height: 24px;
	}

</style>