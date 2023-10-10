<template>
	<section class="about-block">
		<figure class="about-block-figure">
			<img src="/image-small-team.jpg" alt="" />
		</figure>
		<div class="about-block-content">
			<h2 class="about-block-title">Small Team, big idea</h2>
			<NuxtLink class="btn-link" to="/about">
				<span>About us</span>
				<img src="/icon-arrow.svg" alt="arrow icon" />
			</NuxtLink>
		</div>
	</section>
</template>

<style lang="scss" scoped>

	.about-block {
		height: 560px;
		margin: 0 0 72px;
		position: relative;
	}

	.about-block-title {
		color: var(--white);
		font-size: 48px;
		line-height: 52px;
	}
	.about-block-figure {
		height: 100%;
		left: 0;
		margin: 0;
		max-width: 100%;
		position: absolute;
		top: 0;
		width: 100%;
		z-index: 0;
	}

	.about-block-content {
		background-color: rgba(0,0,0,.35);
		display: flex;
		flex-direction: column;
		height: 100%;
		justify-content: center;
		margin: 0 auto;
		padding: 0 32px;
		max-width: 100%;
		position: relative;
		z-index: 1;
	}
</style>