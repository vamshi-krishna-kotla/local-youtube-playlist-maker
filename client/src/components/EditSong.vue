<template>
	<div 
		class="edit-song-comp" 
		v-if="display"
	>
		<h1>{{ this.songToEdit.song }}</h1>
		<span 
			class="close"
			@click ="closeEditOverlay"
		>
			Close &#x2715;
		</span>
	</div>
</template>

<script>
export default {
	name: 'edit-song',
	data() {
		return {
			name: "EditSong Component",
		}
	},
	props: {
		display: {
			type: Boolean,
			default: false
		},
		songToEdit: {
			type: Object,
			default: () => {return {};}
		}
	},
	methods: {
		closeEditOverlay() {
			this.$parent.displayEditTab = !this.$parent.displayEditTab;
		}
	}
}
</script>

<style lang="scss" scoped>
.edit-song-comp {
	background: rgba(0, 0, 0, 0.6);
	height: -webkit-fill-available;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
	z-index: 2;

	.close {
		border: 0.75px solid #fff;
		border-radius: 1rem;
		color: #fff;
		cursor: pointer;
		font-family: monospace;
		font-size: 1.75rem;
		padding: 0.25rem 1rem;
		position: absolute;
		top: 2rem;
		right: 2rem;
	}
}
</style>