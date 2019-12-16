<template>
	<div class="createNew">
		<table class="newSongTable">
			<thead>
			</thead>
			<tbody>
				<tr>
					<td colspan="2">
						<input 
							placeholder="Song Title" 
							type="text" 
							v-model="songName"
						/>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<input 
							placeholder="Please use embed URL" 
							type="text" 
							v-model="songURL"
						/>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<input 
							placeholder="Artist" 
							type="text" 
							v-model="songArtist"
						/>
					</td>
				</tr>
				<tr>
					<td class="genre-list" colspan="2">
						<h1>Genres</h1>
						<span
							v-for="(genre,index) in genreList"
							@click="genre.isSelected = !genre.isSelected"
							:class="[genre.isSelected?'isSelected':'' , 'genre']"
							:key="index"
						>
							{{genre.name}}
						</span>
						<button 
							:class="['reset-genres']" 
							@click="resetAllGenres"
						>
							Reset
						</button>
					</td>
				</tr>
				<tr>
					<td colspan=2>
						<button
							class="addButton"
							@click="addNewSong"
						>
							Add song
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'create-new',
	data() {
		return {
			name: 'CreateNew Component',
			genreList: [],
			songArtist:'',
			songName: '',
			songURL: '',
		}
	},
	mounted() {
		var _this = this;
		this.$store.state.genres.forEach( genre => {
			_this.genreList.push({name: genre,isSelected: false});
		});
	},
	computed: {
		songGenre() {
			var list = [];
			this.genreList.forEach( element => {
				element.isSelected === true ? list.push(element.name) : '';
			});
			return list;
		}
	},
	methods: {
		resetAllGenres() {
			this.genreList.forEach(genre => {
				genre.isSelected = false;
			});
		},
		addNewSong() {
			var newSong = {
				"artist": this.songArtist,
				"genre": this.songGenre,
				"link": this.songURL,
				"song": this.songName
			}
			var _this = this;
			axios.post(`http://localhost:5000/songs`, newSong).then( (response) => {
				if( typeof response.data === 'object') {
					/**
					 * data = { new song } for mongo-server(5000)
					 * data = { entire updated list } for file-server(3000)
					 */
					_this.$store.commit('putNewSong', { 'song': response.data } );
				}
				else {
					window.console.log(response.data);
				}
				_this.resetAllValues();
			})
		},
		resetAllValues() {
			this.songArtist = '';
			this.songName = '';
			this.songURL = '';
			this.resetAllGenres();
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/createNew.scss';
</style>