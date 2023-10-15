<script setup>

defineProps({
	team: {
		title: String,
		members: Array
	}
})

</script>

<template>
	<section class="team">
		<h2 class="team-title">{{ team.title }}</h2>
		<div class="team-group">
			<div class="team-person" v-for="person in team.members" :key="person.name">
				<figure class="team-photo">
					<img :src="person.photo" :alt="person.name">
					<figcaption class="team-photo-overlay">
						<a :href="person.linkedin" >
							<img src="/icon-linkedin.svg" alt="Linkedin logo" />
						</a>
						<a :href="person.twitter" >
							<img src="/icon-twitter.svg" alt="Twitter logo" />
						</a>
					</figcaption>
				</figure>
				<h3 class="team-name">{{ person.name }}</h3>
				<span class="team-role">{{ person.role }}</span>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.team {
		color: var(--vary-dark-blue);
		padding: 0 32px;

		@media screen and (min-width: 768px) {
			margin-bottom: 240px;
			padding: 0;
		}

		@media screen and (min-width: 1024px) {
			display: flex;
			justify-content: space-between;
			margin-bottom: 160px;
		}
	}

	.team-group {
		@media screen and (min-width: 768px) {
			column-gap: 10px;
			display: flex;
			flex-wrap: wrap;
			row-gap: 100px;
		}

		@media screen and (min-width: 1024px) {
			column-gap: 30px;
			max-width: 730px;
		}
	}
	.team-title {
		font-size: 48px;
		line-height: 52px;
		overflow-wrap: anywhere;
		margin: 0 0 55px;
    max-width: 250px;

		@media screen and (min-width: 768px) {
			font-size: 72px;
			line-height: 64px;
		}
	}		
	.team-person {
		margin-bottom: 80px;

		@media screen and (min-width: 768px) {
			max-width: calc(50% - 5px);
			margin-bottom: 0;
		}

		@media screen and (min-width: 1024px) {
			max-width: calc(50% - 15px);
		}
	}
	.team-photo {
		margin-bottom: 15px;
		position: relative;

		@media screen and (hover:hover) {
			cursor: pointer;

			&:hover {
				.team-photo-overlay {
					opacity: 1;
					visibility: visible;
				}
			}
		} 
	}

	.team-photo-overlay {
		align-items: center;
		background-color: rgba(0,0,0,.35);
		column-gap: 32px;
		display: flex;
		height: 100%;
		justify-content: center;
		left: 0;
		opacity: 0;
		position: absolute;
		top: 0;
		transition: all .25s ease-in-out;
		visibility: hidden;
		width: 100%
	}

	.team-name {
		font-size: 32px;
		line-height: 40px;
		margin: 0;
	}
	.team-role {
		font-size: 18px;
		line-height: 24px;
		font-weight: 500;
	}
</style>