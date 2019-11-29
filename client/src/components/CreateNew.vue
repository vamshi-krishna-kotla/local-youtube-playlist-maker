<template>
	<div class="createNew">
		<h1>{{this.name}}</h1>
			<table class="newSongTable">
				<thead>
				</thead>
			<tbody>
				<tr>
					<td>
						<input placeholder="Name" type="text" v-model="songName"/>
					</td>
				</tr>
				<tr>
					<td>
						<input placeholder="URL" type="text" v-model="songURL"/>
					</td>
				</tr>
				<tr>
					<td colspan=2><button class="addButton" @click="addNewSong">Add song</button></td>
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
		margin: 3.5rem auto;
		padding: 2.5rem;
		width: 50%;

		tr {
			width: 100%;
			td {
				position: relative;
				text-align: center;

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
					background: rgba($color: #09139e, $alpha: 0.5);
					border: 0.5px #ced4da solid;
					border-radius: 0.75rem;
					color: #fff;
					font-size: 1.25rem;
					padding: 1rem;
					width: 65%;
				}
			}
		}
	}
}
</style>