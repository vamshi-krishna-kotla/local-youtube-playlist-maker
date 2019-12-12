<template>
	<div class="playlist-comp">
		<ul class="playlists">
			<li 
				:class = "['playlist-item']"
				v-for="(item, index) of this.playlists" 
				:key="index"
			>
				<div 
					class = "playlist-title" 
					@click =" displayPlaylist = index "
				>
					<span class="title">{{item.title.toUpperCase()}}</span>
				</div>
				<div 
					class="playlist-content" 
					v-if="displayPlaylist == index"
				>
					{{item.songs}}
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'PlaylistComponent',
	data() {
		return {
			displayPlaylist: -1,
		}
	},
	computed: {
		playlists() {
			return this.$store.state.playlists;
		}
	},
	components: {
	},
	mounted() {
	}
}
</script>

<style lang="scss" scoped>
.playlists {
	display: flex;
	flex-direction: column;
	list-style-type: none;
	text-align: center;

	.playlist-item {
		border: 0.5px solid rgba($color: #09139e, $alpha: 0.5);
		cursor: pointer;
		margin: 0.5rem 1rem;
		padding: 1rem;

		&:hover {
			box-shadow: 0 0.2rem 0.2rem rgba($color: #09139e, $alpha: 0.5);
		}

		.title {
			font-size: 1.25rem;
		}
	}
}
</style>
