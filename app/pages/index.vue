<script setup>
	useHead({
		title: 'Home',
		meta: [
			{ name: 'description', content: 'Arch Studio Homepage' }
		],
		htmlAttrs: {
			lang: 'en'
		}
	})
	const page = 'Home'
</script>

<template>
	<main>
		<BookMark :page-name="page" />
		<HeroSlider />
		<Content />
		<AboutBlockHome />
		<Featured />
	</main>
</template>