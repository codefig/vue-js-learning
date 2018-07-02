<template>
	<div class="navbar">
		<div class="container-fluid">
			<a class="navbar-brand" href="#">Title</a>
			<ul class="nav navbar-nav">
				<router-link to="/" tag="li" active-class="active"><a>Home</a></router-link>
				<router-link to="/user/1" tag="li" active-class="active"><a> Users 1</a> </router-link> 
				<router-link to="/user/2" tag="li" active-class="active"><a> Users 2</a> </router-link> 
			</ul>
		</div>
	</div>
</template>