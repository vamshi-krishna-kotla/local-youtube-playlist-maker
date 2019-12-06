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
.createNew {
	display: block;

	.newSongTable {
		border: 2px solid rgba($color: #09139e, $alpha: 0.7);
		border-radius: 5px;
		margin: 2.5rem auto 0;
		padding: 2.5rem;
		width: 60%;

		tr {
			width: 100%;
			td {
				position: relative;
				text-align: center;

				&.genre-list {
					.genre {
						border: 0.5px solid rgba($color: #09139e, $alpha: 0.5);
						border-radius: 0.75rem;
						display: inline-block;
						font-size: 1.2rem;
						margin: 0.35rem;
						padding: 0.3rem;

						&:hover {
							background: rgba(10, 100, 200, 0.8);;
							color: #fff;
						}

						&.isSelected {
							background: rgba($color: #09139e, $alpha: 0.6);
							color: #fff;
						}
					}
					
					.reset-genres {
						border-radius: 0.75rem;
						display: block;
						margin: 1rem auto 0;
						padding: 0.5rem;
						width: 35%;

						&:focus {
							outline: none;
						}
					}
				}

				input {
					border: 1px solid #ced4da;
					border-radius: .25rem;
					color: #495057;
					display: block;
					font-size: 1rem;
					line-height: 1.5;
					margin: 0.5rem auto;
					padding: .375rem .75rem;
					transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
					width: 90%;
				}

				.addButton {
					background: rgba($color: #09139e, $alpha: 0.8);
					border: 0.5px #ced4da solid;
					border-radius: 0.75rem;
					color: #fff;
					font-size: 1.25rem;
					margin-top: 1.5rem;
					padding: 1rem;
					width: 55%;
				}
			}
		}
	}
}
</style>