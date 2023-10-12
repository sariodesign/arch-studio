<script setup>
import { ref, onMounted } from 'vue';

let slideCounter = ref(0);

const controlsRef = ref([])

const slides = ref([
	{
		image: './image-hero-paramour.jpg',
		responsive: {
			tablet: './tablet/image-hero-paramour.jpg',
			desktop: './desktop/image-hero-paramour.jpg'
		},
		title: 'Project Paramour',
		description: 'Project made for an art museum near Southwest London. Project Paramour is a statement of bold, modern architecture.',
		current: true
	},
	{
		image: './image-hero-seraph.jpg',
		responsive: {
			tablet: './tablet/image-hero-seraph.jpg',
			desktop: './desktop/image-hero-seraph.jpg'
		},
		title: 'Seraph Station',
		description: 'The Seraph Station project challenged us to design a unique station that would transport people through time. The result is a fresh and futuristic model inspired by space stations.',
		current: false
	},
	{
		image: './image-hero-federal.jpg',
		title: 'Federal II Tower',
		responsive: {
			tablet: './tablet/image-hero-federal.jpg',
			desktop: './desktop/image-hero-federal.jpg'
		},
		description: 'A sequel theme project for a tower originally built in the 1800s. We achieved this with a striking look of brutal minimalism with modern touches.',
		current: false
	},
	{
		image: './image-hero-trinity.jpg',
		title: 'Trinity Bank Tower',
		responsive: {
			tablet: './tablet/image-hero-trinity.jpg',
			desktop: './desktop/image-hero-trinity.jpg'
		},
		description: 'Trinity Bank challenged us to make a concept for a 84 story building located in the middle of a city with a high earthquake frequency. For this project we used curves to blend design and stability to meet our objectives.',
		current: false
	}
])

function setAutoSlide() {
	slides.value[slideCounter.value].current = false;
  slideCounter.value = (slideCounter.value + 1) % slides.value.length;
  slides.value[slideCounter.value].current = true;
}

function setCurrentSlide(idx){
	slides.value.forEach(slide => slide.current = false);
	slides.value[idx].current = true;
	controlsRef.value.forEach(control => control.classList.remove('active'));
	controlsRef.value[idx].classList.add('active');
}

onMounted(() => {
	let mql = window.matchMedia("(max-width: 767px)");
	if(mql.matches){
		setInterval(setAutoSlide, 5000)
	};
})

</script>

<template>
	<section class="hero-slider">
		<TransitionGroup name="slide" tag="ul">
			<template v-for="(slide, index) in slides" :key="slide.title" :data-index="index">
				<li class="hero-slide" v-if="slide.current">
					<figure class="hero-image">
						<picture>
							<source :srcset="slide.responsive.desktop" media="(min-width: 1024px)" />
							<source :srcset="slide.responsive.tablet" media="(min-width: 768px)" />
							<img :src="slide.image" :alt="slide.title" />
						</picture>
					</figure>
					<div class="hero-slide-content">
						<h2 class="hero-slide-title">{{ slide.title }}</h2>
						<p class="hero-slide-description">{{ slide.description }}</p>
						<NuxtLink class="btn-link" to="/portfolio">
							<span>See Our Portfolio</span>
							<img src="/icon-arrow.svg" alt="arrow icon" />
						</NuxtLink>
					</div>
				</li>
			</template>
		</TransitionGroup>
		<div class="hero-slider-controller">
			<div class="hero-control" ref="controlsRef" :class="{active: index === 0}" @click="() => setCurrentSlide(index)" v-for="(slide, index) in slides" :key="slide.title">0{{ index + 1 }}</div>
		</div>
	</section>
</template>

<style lang="scss">
	.hero-slider {
		height: 560px;
		overflow: hidden;
		margin: 0 0 72px;
		max-width: 100%;
		position: relative;

		@media screen and (min-width: 768px) {
			height: 720px;
			margin: 0 0 90px;
		}

		@media screen and (min-width: 1024px) {
			margin-bottom: 195px;
			overflow: visible;
		}
	}

	.hero-slider ul {
		display: flex;
		height: 100%;
		margin: 0;
		padding: 0;

		&:after {
			background-color: rgba(0,0,0,.35);
			content: '';
			left: 0;
			height: 100%;
			position: absolute;
			top: 0;
			width: 100%;
		}
	}

	.hero-slide {
		box-sizing: border-box;
		color: var(--white);
		flex: none;
		height: 100%;
		position: relative;
		width: 100%;

		&:before {
			animation: loadingLine 5s linear;
			background-color: var(--light-grey);
			content: '';
			height: 6px;
			left: 0;
			position: absolute;
			top: 0;
			z-index: 3;
		}
	}

	.hero-image {
		height: 100%;
		left: 0;
		margin: 0;
		max-width: 100%;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 0;
	}

	.hero-slide-content {
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		margin: 0 auto;
		padding: 0 32px;
		max-width: 100%;
		position: relative;
		z-index: 1;

		@media screen and (min-width: 768px) {
			padding: 0 58px;
		}

		@media screen and (min-width: 1024px) {
			padding: 0 190px;
		}
	}

	.hero-slide-title {
		font-size: 48px;
		letter-spacing: -1.2px;
		margin: 0 0 10px;

		@media screen and (min-width: 768px) {
			font-size: 96px;
			line-height: 80px;
			width: 544px;
		}
	}

	.hero-slide-description {
		font-size: 18px;
		line-height: 24px;
		margin: 0 0 48px;

		@media screen and (min-width: 768px) {
			margin: 0 0 40px;
			width: 445px;
		}
	}

	.hero-slider-controller {
		display: none;

		@media screen and (min-width: 1024px) {
			bottom: 0;
			display: flex;
			left: -80px;
			position: absolute;
			z-index: 1;
		}
	}

	.hero-control {
		align-items: center;
		background-color: var(--white);
		color: var(--medium-grey);
		cursor: pointer;
		display: flex;
		font-size: 18px;
		font-weight: 700;
		line-height: 1;
		height: 80px;
		justify-content: center;
		width: 80px;

		&:hover {
			background-color: var(--very-light-grey);
		}

		&.active {
			background-color: var(--very-dark-blue);
			color: var(--white);
		}
	}

	.slide-move,
	.slide-enter-active,
	.slide-enter-active .hero-slide-content,
	.slide-leave-active,
	.slide-leave-active .hero-slide-content {
		transition: all .75s ease-in-out;
	}

	.slide-enter-from,
	.slide-leave-to {
		opacity: .3;
	}

	.slide-enter-from .hero-slide-content,
	.slide-leave-to .hero-slide-content {
		opacity: .3;
		transform: scale(.95);
		transform-origin: center;
	}

	.slide-leave-active {
  	position: absolute;
	}

	@keyframes loadingLine {
		0% {
			opacity: .75;
			width: 0%;
		}

		100% {
			opacity: 1;
			width: 100%;
		}
		
	}
</style>