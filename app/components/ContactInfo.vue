<script setup>
defineProps({
	contactInfo: {
		title: String,
		info: Array
	}
})
</script>

<template>
	<section class="contact-info">
		<h2>{{ contactInfo.title }}</h2>
		<div class="contact-content" v-for="item in contactInfo.info" :key="item.office">
			<h3>{{ item.office }}</h3>
			<div class="contact-text">
				<ul>
					<li>Mail: {{ item.mail }}</li>
					<li>Address: {{ item.address }}</li>
					<li>Phone: {{ item.phone }}</li>
				</ul>
				<a :href="item.link">
					<span>View on Map</span>
					<img src="/icon-arrow-black.svg" alt="icon arrow" />
				</a>
			</div>
		</div>
	</section>
</template>

<style lang="scss" scoped>
.contact-info {
	margin-bottom: 70px;
	padding: 0 32px;

	@media screen and (min-width: 768px) {
		margin-bottom: 226px;
		padding: 0;
	}
	
	@media screen and (min-width: 1024px) {
		column-gap: 30px;
		display: flex;
		margin-bottom: 200px;
	}

	h2 {
		font-size: 48px;
		line-height: 52px;
		margin: 0 0 40px;
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

		@media screen and (min-width: 1024px) {
			padding-top: 80px;

			&:before {
				top: -80px;
			}
		}
	}

	h3 {
		color: var(--dark-grey);
		font-size: 18px;
		line-height: 35px;
		margin: 0 0 14px;
	}

	ul {
		margin-bottom: 42px;

		@media screen and (min-width: 768px) {
			margin: 0;
		}

		@media screen and (min-width: 768px) {
			margin-bottom: 59px;
		}
	}

	li {
		color: var(--dark-grey);
		font-size: 18px;
		line-height: 24px;
	}

	a {
		align-items: center;
		color: var(--very-dark-blue);
		column-gap: 24px;
		display: flex;
		font-size: 18px;
		font-weight: 700;
		text-decoration: none;
	}
}

.contact-content {
	margin-bottom: 40px;

	@media screen and (min-width: 1024px) {
		padding-top: 49px;
	}

	@media screen and (min-width: 1024px) {
		padding-top: 80px;
		width: 350px;
	}
}

.contact-text {

	@media screen and (min-width: 768px) {
		display: flex;
		justify-content: space-between;
	}

	@media screen and (min-width: 1024px) {
		flex-direction: column;
	}
}

</style>