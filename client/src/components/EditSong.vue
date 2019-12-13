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
			<input type="text" v-model="songToEdit.song"/>
			<input type="text" v-model="songToEdit.link"/>
			<input type="text" v-model="songToEdit.artist"/>
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
			<button>Done</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'edit-song',
	data() {
		return {
			name: "EditSong Component",
			genreList: []
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
	},
	methods: {
		closeEditOverlay() {
			this.$parent.displayEditTab = !this.$parent.displayEditTab;
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
.edit-song-comp {
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	height: -webkit-fill-available;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 2;

	.edit-song {
		background: #fff;
		border-radius: 1rem;
		display: inline-flex;
		flex-direction: column;
		margin: auto;
		padding: 2rem;
		position: relative;
		width: 50%;

		input {
			margin: 1rem auto;
			width: 85%;
		}

		.genre-list {
			position: relative;
			text-align: center;
			
			.genre {
				border: 0.5px solid rgba(9, 19, 158, 0.5);
				border-radius: 0.75rem;
				cursor: pointer;
				display: inline-block;
				font-size: 1rem;
				margin: 0.25rem;
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
		}
			
		.close {
			color: #fff;
			cursor: pointer;
			font-size: 1.75rem;
			position: absolute;
			top: -3rem;
			right: 0;
		}
	}
}
</style>