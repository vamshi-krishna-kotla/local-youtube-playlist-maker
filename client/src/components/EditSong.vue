<template>
	<div 
		class="edit-song-comp" 
		v-if="display"
	>
		<div class="edit-song">
			<span 
				class="close"
				@click ="closeEditOverlay"
			>
				&#x2715;
			</span>
			<input type="text" v-model="editedSongTitle" />
			<input type="text" v-model="editedSongLink" />
			<input type="text" v-model="editedSongArtist" />
			<div class="genre-list">
				<span
					v-for="(genre,index) in genreList"
					@click="genre.isSelected = !genre.isSelected"
					:class="['genre', genre.isSelected?'isSelected':'']"
					:key="index"
				>
					{{ genre.name }}
				</span>
			</div>
			<div class="edit-button-container">
				<button 
					class="edit-button"
					@click ="putEditedSong"
				>
					Done
				</button>
				<span class="edit-warning"><b>NOTE: </b>Changes will be saved in the backend</span>
			</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'edit-song',
	data() {
		return {
			name: "EditSong Component",
			genreList: [],
			editedSongTitle: this.songToEdit.song,
			editedSongArtist: this.songToEdit.artist,
			editedSongLink: this.songToEdit.link,
		}
	},
	props: {
		display: {
			type: Boolean,
			default: false
		},
		songToEdit: {
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
		editedSong() {
			return {
				"artist": this.editedSongArtist,
				"genre": this.editedSongGenre,
				"link": this.editedSongLink,
				"song": this.editedSongTitle
			}
		},
		editedSongGenre() {
			var list = [];
			this.genreList.forEach( element => {
				element.isSelected === true ? list.push(element.name) : '';
			});
			return list;
		}
	},
	methods: {
		closeEditOverlay() {
			this.$parent.displayEditTab = !this.$parent.displayEditTab;
		},
		putEditedSong () {
			var _this = this;
			axios.patch(`http://localhost:5000/songs/${_this.songToEdit.song}`, _this.editedSong).then( (response) => {
				if(typeof response.data === "object") {
					_this.$store.dispatch('putEditedSong', { song: response.data, key:_this.songToEdit.song });
				}
				else {
					window.console.log(response.data);
				}
				_this.closeEditOverlay();
			});
		}
	},
	mounted() {
		var _this = this;
		this.$store.state.genres.forEach( genre => {
			_this.genreList.push({name: genre,isSelected: false});
		});

		this.genreList.forEach( element => {
			_this.songToEdit.genre.indexOf(element.name) > -1 
				? _this.genreList[_this.genreList.indexOf(element)].isSelected = true
				: ''
		});
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/editSong.scss';
</style>