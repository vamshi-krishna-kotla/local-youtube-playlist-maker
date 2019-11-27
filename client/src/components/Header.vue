<template>
	<div id="header-nav">
		<router-link to='/'>Home</router-link>
		<router-link to='/myMusic'>My music</router-link>
		<router-link to='/createNew'>Create New</router-link>
	</div>
</template>

<script>
export default {
	name: 'header-nav',
	data() {
		return {
			name: 'Header Component',
		}
	}
}
</script>

<style lang="scss" scoped>
#header-nav {
	background: rgba($color: #abc, $alpha: 0.3);
	border-radius: 7px;
	display: flex;
	flex-direction: row;
	font-family: 'Trebuchet MS';
	justify-content: space-around;
	margin: auto;
	padding: 1rem;
	width: 90%;

	a {
		background: rgba($color: #abc, $alpha: 0.9);
		border-radius: 5px;
		color: #fff;
		font-size: 1.3rem;
		text-decoration: none;
		padding: 0.5rem;
	}

	.router-link-exact-active {
		background: rgba($color: #09139e, $alpha: 0.5);
		color: #000;
	}
}
</style>