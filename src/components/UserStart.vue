<template>
	<div class="container">
		This is the user start component
		<ul class="list-group">
			<router-link 
			tag="li"
			to = "/user/1"
			class="list-group-item"
			style="cursor: pointer">Item 1</router-link>

			<router-link 
			tag="li" 
			to = "/user/2"
			class="list-group-item"
			style="cursor: pointer">Item 2</router-link>

			<router-link 
			tag="li" 
			to = "/user/3"
			class="list-group-item"
			style="cursor: pointer">Item 3</router-link>
			
		</ul> 
	</div>
</template>


<script>
	
</script>