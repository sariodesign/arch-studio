<script setup>
import { ref } from 'vue';

useHead({
	title: 'About',
	meta: [
		{ name: 'description', content: 'Arch Studio About' }
	],
	htmlAttrs: {
		lang: 'en'
	}
})
	
const page = "About"

const content = ref({
	title: 'Your team of professionals',
	text: 'Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.',
	image: '/image-hero.jpg',
	responsive: {
		desktop: '/desktop/image-hero.jpg',
		tablet: '/tablet/image-hero.jpg'
	}
})

const content2 = ref({
	title: 'Our Heritage',
	text: [
		'Founded in 2007, we started as a trio of architects. Our complimentary skills and relentless attention to detail turned Arch into one of the most sought after boutique firms in the country.',
		'Speciliazing in Urban Design allowed us to focus on creating exceptional structures that live in harmony with their surroundings. We consider every detail from every surrounding element to inform our designs.',
		'Our small team of world-class professionals provides input on every project.'
	],
	image: '/desktop/image-heritage.jpg'
})

const members = ref([
	{
		name: "Jake Richards",
		role: "Chief Architect",
		photo: "/avatar-jake.jpg",
		linkedin: "#",
		twitter: "#"
	},
	{
		name: "Thompson Smith",
		role: "Head of Finance",
		photo: "/avatar-thompson.jpg",
		linkedin: "#",
		twitter: "#"
	},
	{
		name: "Jackson Rourke",
		role: "Lead Designer",
		photo: "/avatar-jackson.jpg",
		linkedin: "#",
		twitter: "#"
	},
	{
		name: "Maria Simpson",
		role: "Senior Architect",
		photo: "/avatar-maria.jpg",
		linkedin: "#",
		twitter: "#"
	}
])

const team = ref({
	title: 'The Leaders',
	members: members.value
})

</script>

<template>
	<main>
		<BookMark :page-name="page" />
		<HeroContent :content="content" />
		<AboutContent :content="content2" />
		<TeamContent :team="team" />
	</main>
</template>