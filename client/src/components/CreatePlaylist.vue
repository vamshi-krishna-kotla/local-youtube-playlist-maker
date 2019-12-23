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
				<h3 
					:class="['available-song']"
					v-for="(availableItem) in availableSongs"
					:key="availableItem.song"
				>
					{{`${availableItem.song.toUpperCase()} by ${availableItem.artist}`}}
				</h3>
			</div>
			<div class="selected-song-list">
				<h1>selectedsongs</h1>
			</div>
		</div>
		<div class="done-btn-container">
			<button
				class="done-button"
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
			name: 'Create Playlist Component'
		}
	},
	methods: {
		exit() {
			this.$parent.createPlaylist = false;
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
.create-playlist-container {
	border: 1px solid rgba($color: #09139e, $alpha: 1);
	border-radius: 0.3rem;
	margin: 1rem;
	padding: 0 0 1rem 0;
	position: relative;

	.exit-button {
		border-radius: 50%;
		font-size: 1rem;
		position: absolute;
		right: 0rem;
		top: -2rem;

		&:focus {
			outline: none;
		}
	}

	.song-lists {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		margin: auto;
		position: relative;
		width: 90%;

		.available-song-list, .selected-song-list {
			border: 1px solid rgba($color: #00064e, $alpha: 0.6);
			display: inline-block;
			margin: 1rem;
			padding: 1rem;
			position: relative;
			width: 45%;
		}

		.available-song-list .title{
			color: rgba($color: #09139e, $alpha: 1);
		}
		.available-song-list .available-song {
			border-bottom: 1px solid rgba($color: #000, $alpha: 0.6);
		}
	}

	.done-btn-container {
		display: block;
		padding: 0.65rem 0 0.35rem;
		text-align: center;

		.done-button{
			font-family: monospace;
			font-size: 1.5rem;
			padding: 0 1rem;
		}
	}
}
</style>
