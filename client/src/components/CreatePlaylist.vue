<template>
	<div class="create-playlist-container">
		<button
			class="exit-button"
			@click="exit"
		>
			&#x2716;
		</button>
		<div class="song-lists">
			<div class="available-song-list">
				<h2 class="title">Available songs</h2>
				<hr />
				<h3 
					:class="['available-song']"
					v-for="(availableItem) in availableSongs"
					:key="availableItem.song"
				>
					<span class="song-title">{{availableItem.song.toUpperCase()}}</span>
					-
					<span class="song-artist">{{availableItem.artist}}</span>
					<span 
						class="add-song"
						@click="addToPlaylist(availableItem.song)"
					>
						&#x271A;
					</span>
				</h3>
			</div>
			<div class="selected-song-list">
				<h2 class="title">Selected songs</h2>
				<hr />
				<h3 
					:class="['selected-song']"
					v-for="(selectedItem) in selectedSongs"
					:key="selectedItem.song"
				>
					<span class="song-title">{{selectedItem}}</span>
					<span 
						class="remove-song"
						@click="removeFromPlaylist(selectedItem)"
					>
						-
					</span>
				</h3>
			</div>
		</div>
		<div class="done-container">
			<input type="text" v-model="newPlaylistName" placeholder="Enter the title of the playlist"/>
			<button
				class="done-button"
				@click="createNewPlaylist"
			>
				Done
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'create-playlist',
	data() {
		return {
			name: 'Create Playlist Component',
			newPlaylistName: '',
			selectedSongs: []
		}
	},
	methods: {
		exit() {
			this.$parent.createPlaylist = false;
		},
		addToPlaylist( song ) {
			if( !this.selectedSongs.find( i => i==song) ) {
				this.selectedSongs.push(song);
			}
		},
		removeFromPlaylist( song ) {
			this.selectedSongs = this.selectedSongs.filter( s => s!==song);
		},
		createNewPlaylist() {
			if( this.selectedSongs.length == 0 ) {
				window.alert('Please select songs to add to playlist');
			}
			else if( this.newPlaylistName.length == 0 ) {
				window.alert('Please select a valid title for the playlist');
			}
			else {	
				var newPlaylist = {
					'title': this.newPlaylistName,
					'songs': this.selectedSongs
				}
				this.$store.dispatch('addNewPlaylist',newPlaylist);

				this.exit();
			}
		}
	},
	computed: {
		availableSongs() {
			return this.$store.state.songs;
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/createNewPlaylist.scss';
</style>
