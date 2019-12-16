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
			<div class="edit-button-container">
				<button class="edit-button">Done</button>
				<span class="edit-warning"><b>NOTE: </b>Changes will be saved in the backend as well</span>
			</div>
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
	@import '../assets/editSong.scss';
</style>