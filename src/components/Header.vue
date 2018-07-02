<template>
	<div class="navbar">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Title</a>
			<ul class="nav navbar-nav">
				<router-link to="/" tag="li" active-class="active">Home</router-link>
				<router-link to="/user" tag="li" active-class="active"> Users </router-link> 
			</ul>
		</div>
	</div>
</template>