<script setup>
	const page = 'Home'
</script>

<template>
	<main>
		<BookMark :page-name="page" />
		<HeroSlider />
		<Content />
		<AboutBlock />
		<Featured />
	</main>
</template>