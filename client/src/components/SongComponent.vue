<template>
	<div class="song-container">
		<h3 class="song-title">{{song.song.toUpperCase()}}</h3>
		<hr />
		<div  class="video-container">
			<iframe :src="song.link" allow="fullscreen"></iframe>
		</div>
		<div class="genre-container">
			<span
				v-for="genre in genres"
				:key="genre"
				:class="['song-genre', (song.genre.indexOf(genre) > -1) ? 'isSelected' :'']"
			>
				{{genre}}
			</span>
		</div>
		<div class="edit-song">
			<button
				:class="['edit-button']"
			>
				Edit
			</button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			name: 'Song Component',
		}
	},
	props: {
		song: {
			type: Object,
			default: () => {
				return {
					"artist":"",
					"genre":[],
					"link":"",
					"song":""
				}	
			}
		}
	},
	computed: {
		genres() {
			return this.$store.state.genres;
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/songComponent.scss';
</style>