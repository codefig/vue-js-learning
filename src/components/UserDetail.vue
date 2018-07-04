<template>
	<div class="container" id="major">
		<p> This is the User detail component </p>
		<p> Loaded id  : {{ $route.params.id}} </p>

		<hr>
		<p> Edit User </p>
		<router-link 
		:to="{name: 'userEdit', params: {id: $route.params.id}, query : {locale: 'en', ans: '100'}, hash:'#data'}" 
		class="btn btn-info">Edit User</router-link>

	
	</div>
</template>
