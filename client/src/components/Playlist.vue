<template>
	<div class="playlist-comp">
		<ul class="playlists">
			<li 
				class = "playlist-item"
				v-for="(item, index) of this.playlists" 
				@click =" displayPlaylist = index "
				:key="index"
			>
				<div class = "playlist-title" >
					<span class="title">{{item.title.toUpperCase()}}</span>
					<span 
						class="remove-playlist"
						@click="removePlaylist(index)"
					>
						&#x2796;
					</span>
				</div>
				<div 
					class="playlist-content" 
					v-show="displayPlaylist == index"
				>
					<div 
						v-for ="songItem in item.songs"
						:key ="songItem"
						class = "playlist-content-song"
					>
						<iframe :src ="findSong(songItem).link" ></iframe>
					</div>
				</div>
			</li>
		</ul>
		<h1 
			v-if="displayNoPlaylists"
			class = "playlists-none"
		>
			No Playlists!!
		</h1>
		<div class="playlist-create-new">
			<button 
				class = "create-new"
				@click ="createNew"
			>
				Create New Playlist
			</button>
		</div>
		<CreatePlaylist v-if="createPlaylist" />
	</div>
</template>

<script>
import CreatePlaylist from './CreatePlaylist';

export default {
	name: 'playlist',
	data() {
		return {
			name: 'Playlist Component',
			displayPlaylist: 0,
			createPlaylist: false
		}
	},
	computed: {
		playlists() {
			return this.$store.state.playlists;
		},
		displayNoPlaylists() {
			if(this.playlists.length == 0) {
				return true;
			}
			return false;
		}
	},
	components: {
		CreatePlaylist,
	},
	mounted() {
	},
	methods: {
		findSong(songItem) {
			if (this.$store.state.songs.length > 0) {
				return this.$store.state.songs.find( element => element.song == songItem)
			}
			else {
				return { link: '' }
			}
		},
		createNew() {
			this.createPlaylist = true;
		},
		removePlaylist( playlistIndex ) {
			this.$store.dispatch('removePlaylist', { index: playlistIndex });
		}
	}
}
</script>

<style lang="scss" scoped>
	@import '../assets/playlistComp.scss';
</style>
