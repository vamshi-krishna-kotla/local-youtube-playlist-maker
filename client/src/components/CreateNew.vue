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
			genreList: [
				{name:'Classic',isSelected:false},
				{name:'Rock',isSelected:false},
				{name:'Pop',isSelected:false},
				{name:'‎Heavy metal',isSelected:false},
				{name:'Dance',isSelected:false},
				{name:'Electronic',isSelected:false},
				{name:'Arena',isSelected:false},
				{name:'Reggae',isSelected:false},
				{name:'Jazz',isSelected:false},
				{name:'Folk',isSelected:false},
				{name:'Blues',isSelected:false},
				{name:'Rap',isSelected:false}
			],
			songArtist:'',
			songGenre: [],
			songName: '',
			songURL: '',
		}
	},
	methods: {
		addNewSong() {
			//methos to add a new song to state.songs
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