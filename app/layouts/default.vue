<template>
	<div class="container">
		<Header :menu-mobile-visible="false" />
		<slot />
		<Footer />
	</div>
</template>

<style lang="scss">

.container {
	max-width: 1110px;
	margin: 0 auto;
	padding-top: 32px;

	@media screen and (min-width: 1024px) {
		padding-top: 56px;
	}
}

</style>