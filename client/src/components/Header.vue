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
	@import '../assets/header.scss';
</style>