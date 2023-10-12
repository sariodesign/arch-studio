<script setup>
const intro = ref('Welcome to Arch Studio')

const content = ref([
	'We have a unique network and skillset to help bring your projects to life. Our small team of highly skilled individuals combined with our large network put us in a strong position to deliver exceptional results.',
	'Over the past 10 years, we have worked on all kinds of projects. From stations to high-rise buildings, we create spaces that inspire and delight.',
	'We work closely with our clients so that we understand the intricacies of each project. This allows us to work in harmony the surrounding area to create truly stunning projects that will stand the test of time.'
])

</script>

<template>
	<section>
		<span>Welcome</span>
		<div>
			<h1>{{ intro }}</h1>
			<p v-for="(p, i) in content" :key="i">{{ p }}</p>
		</div>
		<figure>
			<img src="/desktop/image-welcome.jpg" alt="Home welcome" />
		</figure>
	</section>
</template>

<style lang="scss" scoped>
	section {
		padding: 0 32px;
		
		@media screen and (min-width: 768px) {
			margin-bottom: 200px;
			padding: 0;
		}

		@media screen and (min-width: 1024px) {
			align-items: flex-end;
			column-gap: 125px;
			display: flex;
			justify-content: flex-end;
			position: relative;
		}

	}

	span {
		color: var(--very-light-grey);
		content: 'Welcome';
		display: none;
		font-family: "Spartan Bold";
		font-size: 120px;
		font-weight: 700;
		line-height: 1;
		margin-bottom: 20px;

		@media screen and (min-width: 768px) {
			display: block;
		}

		@media screen and (min-width: 1024px) {
			font-size: 200px;
			left: 0;
			position: absolute;
			top: -100px;
		}
	}

	h1 {
		font-size: 48px;
		line-height: 52px;
		margin: 0 0 22px;

		@media screen and (min-width: 768px) {
			font-size: 72px;
			font-weight: 700;
			line-height: 64px;
			width: 446px;
		}
	}

	div {
		margin: 0 auto;

		@media screen and (min-width: 1024px) {
			margin: 0 0 0 auto;
			width: 446px;
		}
	}

	p {
		color: var(--dark-grey);
		font-size: 18px;
		line-height: 24px;
		margin: 0 0 30px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	figure {
		display: none;
		margin: 0;

		@media screen and (min-width: 1024px) {
			display: block;
		}

		img {
			vertical-align: bottom;
		}
	}
</style>