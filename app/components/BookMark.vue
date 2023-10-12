<script setup>
defineProps({
  pageName: String
})
</script>

<template>
	<div>{{ pageName }}</div>
</template>

<style lang="scss" scoped>
	div {
		display: none;
		color: var(--light-grey);
		font-size: 18px;
		left: -52px;
		letter-spacing: 18px;
		position: absolute;
		text-transform: uppercase;
		writing-mode: vertical-lr;

		@media screen and (min-width: 768px) {
    	align-items: center;
			column-gap: 52px;
			display: flex;
    	justify-content: center;
			top: -156px;

			&:before {
				background-color: var(--light-grey);
				content: '';
				height: 104px;
				width: 1px;
			}
		}

		@media screen and (min-width: 1024px) {
			left: -88px
		}
	}
</style>