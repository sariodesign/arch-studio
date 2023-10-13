<script setup>
import { ref } from 'vue';

const portfolio = ref([
	{
		name: "Seraph Station",
  	date: "September 2019",
		image: "image-seraph.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-seraph.jpg",
			tablet: "/portfolio/tablet/image-seraph.jpg"
		}
	},
  {
		name: "Eebox Building",
  	date: "August 2017",
		image: "image-eebox.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-eebox.jpg",
			tablet: "/portfolio/tablet/image-eebox.jpg"
		}
	},
  {
		name: "Federal II Tower",
  	date: "March 201",
		image: "image-federal.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-federal.jpg",
			tablet: "/portfolio/tablet/image-federal.jpg"
		}
	},
  {
		name: "Project Del Sol",
  	date: "January 2016",
		image: "image-del-sol.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-del-sol.jpg",
			tablet: "/portfolio/tablet/image-del-sol.jpg"
		}
	},
  {
		name: "Le Prototype",
  	date: "October 2015",
		image: "image-prototype.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-prototype.jpg",
			tablet: "/portfolio/tablet/image-prototype.jpg"
		}
	},
  {
		name: "228B Tower",
  	date: "April 2015",
		image: "image-228b.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-228b.jpg",
			tablet: "/portfolio/tablet/image-228b.jpg"
		}
	},
  {
		name: "Grand Edelweiss Hotel",
  	date: "December 2013",
		image: "image-edelweiss.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-edelweiss.jpg",
			tablet: "/portfolio/tablet/image-edelweiss.jpg"
		}
	},
  {
		name: "Netcry Tower",
  	date: "August 2012",
		image: "image-netcry.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-netcry.jpg",
			tablet: "/portfolio/tablet/image-netcry.jpg"
		}
	},
  {
		name: "Hypers",
  	date: "January 2012",
		image: "image-hypers.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-hypers.jpg",
			tablet: "/portfolio/tablet/image-hypers.jpg"
		}
	},
  {
		name: "SXIV Tower",
  	date: "March 2011",
		image: "image-sxiv.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-sxiv.jpg",
			tablet: "/portfolio/tablet/image-sxiv.jpg"
		}
	},
  {
		name:"Trinity Bank Tower",
  	date: "September 2010",
		image: "image-trinity.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-trinity.jpg",
			tablet: "/portfolio/tablet/image-trinity.jpg"
		}
	},
  {
		name: "Project Paramour",
  	date: "February 2008",
		image: "image-paramour.jpg",
		responsive: {
			desktop: "/portfolio/desktop/image-paramour.jpg",
			tablet: "/portfolio/tablet/image-paramour.jpg"
		}
	}
])

</script>

<template>
	<main>
		<section class="portfolio-list">
			<PortfolioItem v-for="item in portfolio" :key="item.name" :portfolio="item" />
		</section>
	</main>
</template>

<style lang="scss">
	.portfolio-list {
		display: flex;
		flex-direction: column;
		margin-bottom: 132px;	
		row-gap: 24px;

		@media screen and (min-width: 1024px) {
			column-gap: 30px;
			flex-direction: row;
			flex-wrap: wrap;
			margin-bottom: 160px;
			row-gap: 32px;
		}
	}
</style>