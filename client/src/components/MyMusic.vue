<template>
	<div class="myMusic">
		<h1>{{this.name}}</h1>
		<ul class="song-list">
			<li v-for="(song,index) in songs" v-bind:key="index">{{song.toUpperCase()}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'my-music',
	data() {
		return {
			name: 'MyMusic Component',
			songs: []
		}
	},
	mounted() {
		var _this = this;
		this.$store.state.songs.forEach(song => {
			_this.songs.push(song.song);
		});
	}
}
</script>

<style lang="scss" scoped>
.myMusic {
	ul {
		font-family: cursive;
		list-style-type: none;
		li {
			border: 1px solid black;
			border-radius: 5px;
			margin: 1rem;
			padding: 0.4rem;
			text-align: center;

			&:hover {
				background: rgba(1, 2, 3, 0.4);
				cursor: pointer;
			}
		}
	}
}
</style>