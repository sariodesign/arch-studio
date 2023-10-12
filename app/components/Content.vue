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
		<h1>{{ intro }}</h1>
		<p v-for="(p, i) in content" :key="i">{{ p }}</p>
	</section>
</template>

<style lang="scss" scoped>
	section {
		padding: 0 32px;
		
		@media screen and (min-width: 768px) {
			margin-bottom: 200px;
			padding: 0;
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

			&:before {
				font-family: "Spartan Bold";
				color: var(--very-light-grey);
				content: 'Welcome';
				display: block;
				font-size: 120px;
				font-weight: 700;
				line-height: 1;
				margin-bottom: 20px;
			}
		}
	}

	p {
		color: var(--dark-grey);
		font-size: 18px;
		line-height: 24px;
		margin: 0 0 22px;
	}
</style>