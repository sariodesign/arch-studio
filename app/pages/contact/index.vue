<script setup>
import { ref } from 'vue';

useHead({
	title: 'Contact',
	meta: [
		{ name: 'description', content: 'Arch Studio Contact' }
	],
	htmlAttrs: {
		lang: 'en'
	}
})

const page = "Contact"

const content = ref({
	title: 'Tell us about your project',
	text: 'We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!',
	image: '/image-hero-contact.jpg',
	responsive: {
		desktop: '/desktop/image-hero-contact.jpg',
		tablet: '/tablet/image-hero-contact.jpg'
	},
	extraClass: "contact"
})

const contacts = ref({
	title: "Contact Details",
	info: [
		{
			office: "Main Office",
			mail: "archone@mail.com",
			address: "1892  Chenoweth Drive TN",
			phone: "123-456-3451",
			link: ""
		},
		{
			office: "Office II",
			mail: "archtwo@mail.com",
			address: "3399  Wines Lane TX",
			phone: "832-123-4321",
			link: ""
		}
	]

})

const zoom = ref(6)

</script>

<template>
	<main>
		<BookMark :page-name="page" />
		<HeroContent :content="content" />
		<ContactInfo :contactInfo="contacts"/>
		<ContactMap />
		<ContactForm />
	</main>
</template>