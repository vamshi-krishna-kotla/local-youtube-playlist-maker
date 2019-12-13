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
		<div class="song-options">
			<button
				:class="['edit-button']"
				@click="displayEditTab=true"
			>
				Edit
			</button>
			<button
				:class="['delete-button']"
			>
				Delete
			</button>
		</div>
		
		<EditSong :display="displayEditTab" :songToEdit="song" />
	</div>
</template>

<script>
import EditSong from './EditSong';

export default {
	data() {
		return {
			name: 'Song Component',
			displayEditTab: false
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
	},
	components: {
		EditSong,
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/songComponent.scss';
</style>