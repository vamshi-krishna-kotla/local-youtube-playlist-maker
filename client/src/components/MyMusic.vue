<template>
	<div class="myMusic">
		<h1>{{this.name}}</h1>
		<ul class="song-list">
			<li v-for="(item,index) in songs" v-bind:key="index">{{item.song.toUpperCase()}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'my-music',
	data() {
		return {
			name: 'MyMusic Component',
		}
	},
	computed: {
		songs() {
			return this.$store.state.songs;
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/myMusic.scss';
</style>