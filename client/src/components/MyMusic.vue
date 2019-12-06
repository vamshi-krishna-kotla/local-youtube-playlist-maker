<template>
	<div class="myMusic">
		<h1>{{this.name}}</h1>
		<ul class="song-list">
			<li v-for="(song,index) in songs" v-bind:key="index">{{song.toUpperCase()}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'my-music',
	data() {
		return {
			name: 'MyMusic Component',
			songs: []
		}
	},
	mounted() {
		var _this = this;
		this.$store.state.songs.forEach(song => {
			_this.songs.push(song.song);
		});
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/myMusic.scss';
</style>