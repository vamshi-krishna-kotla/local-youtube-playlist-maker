<template>
	<div>
		<p>
			<router-link to='/'>Home</router-link> <br />
			<router-link to='/myMusic'>My music</router-link> <br />
			<router-link to='/createNew'>Create New</router-link> <br />
		</p>
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