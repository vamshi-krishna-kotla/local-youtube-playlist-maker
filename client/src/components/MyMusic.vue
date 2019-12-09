<template>
	<div class="myMusic">
		<ul class="song-list">
			<li 
				v-for="(item,index) in songs" 
				:key="index"
			>
				<Song :song=item />
			</li>
		</ul>
	</div>
</template>

<script>
import Song from './SongComponent.vue';

export default {
	name: 'my-music',
	data() {
		return {
			name: 'MyMusic Component',
		}
	},
	components:{
		Song,
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