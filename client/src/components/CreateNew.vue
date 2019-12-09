<template>
	<div class="createNew">
			<table class="newSongTable">
				<thead>
				</thead>
			<tbody>
				<tr>
					<td colspan="2">
						<input placeholder="Name" type="text" v-model="songName"/>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<input placeholder="URL" type="text" v-model="songURL"/>
					</td>
				</tr>
				<tr>
					<td colspan="2">
						<input placeholder="Artist" type="text" v-model="songArtist"/>
					</td>
				</tr>
				<tr>
					<td class="genre-list" colspan="2">
						<span
							v-for="(genre,index) in genreList"
							@click="genre.isSelected = !genre.isSelected"
							:class="[genre.isSelected?'isSelected':'' , 'genre']"
							:key="index"
						>
							{{genre.name}}
						</span>
						<button :class="['reset-genres']" @click="resetAllGenres">Reset</button>
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
export default {
	name: 'create-new',
	data() {
		return {
			name: 'CreateNew Component',
			genreList: [],
			songArtist:'',
			songGenre: [],
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
	methods: {
		addNewSong() {
			this.$store.commit('addNewSong',{
				'song':this.songName,
				'yUrl':this.songURL
			});
		},
		resetAllGenres() {
			this.genreList.forEach(genre => {
				genre.isSelected = false;
			});
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/createNew.scss';
</style>