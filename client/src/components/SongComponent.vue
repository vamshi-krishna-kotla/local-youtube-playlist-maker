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
				@click="displayDeleteConf = true"
			>
				Delete
			</button>
		</div>
		
		<transition name="fade">
			<EditSong :display="displayEditTab" :songToEdit="song" />
		</transition>
		
		<transition name="bounce">
			<div
				class="delete-confirmation"
				v-if="displayDeleteConf"
			>
				<div
					class="delete-conf-content"
					@click="displayDeleteConf = false"
				>
					<span class="delete-warning">Delete {{this.song.song}}?</span>
					<div class="delete-btn-group">
						<button
							class="delete-yes"
							@click="deleteCurrentSong"
						>
							Yes
						</button>
						<button
							class="delete-no"
							@click="displayDeleteConf = false"
						>
							No
						</button>
					</div>
				</div>
			</div>
		</transition>
	</div>
</template>

<script>
import axios from 'axios';

import EditSong from './EditSong';

export default {
	data() {
		return {
			name: 'Song Component',
			displayEditTab: false,
			displayDeleteConf: false
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
	},
	methods: {
		deleteCurrentSong() {
			var _this = this;
			axios.delete(`http://localhost:5000/songs/${_this.song.song}`).then( (response) => {
				if(typeof response.data === "object") {
					_this.$store.dispatch('deleteSong', { song: _this.song.song });
				}
				else {
					window.console.log(response.data);
				}
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/songComponent.scss';
</style>