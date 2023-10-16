<script setup>
import { ref } from 'vue';
const zoom = ref(4)
const markers = ref([
	{
		lat: 35.8305894,
		lng: -85.9786955,
		icon:	{
        iconUrl: '/icon-marker.svg',
        iconSize: [40, 48]
		},
	},
	{
		lat: 31.1466942,
		lng: -102.716056,
		icon:	{
        iconUrl: '/icon-marker.svg',
        iconSize: [40, 48]
		},
	}
])
</script>

<template>
	<section class="contact-map">
		<LMap
			ref="map"
			:zoom="zoom"
			:center="[33.4886418, -94.3473757]"
		>
			<LTileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				layer-type="base"
				name="OpenStreetMap"
			/>
			<LMarker v-for="marker in markers" :lat-lng="[marker.lat, marker.lng]">
				<LIcon :iconSize="marker.icon.iconSize" :iconUrl="marker.icon.iconUrl"/>
			</LMarker>
		</LMap>
	</section>
</template>

<style lang="scss">
.contact-map {
	height: 367px;
	margin-bottom: 72px;
	max-width: 100%;
	width: 100%;

	@media screen and (min-width: 768px) {
		height: 560px;
		margin-bottom: 160px;
	}

	@media screen and (min-width: 1024px) {
		margin-bottom: 160px;
	}
}

</style>