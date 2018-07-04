<template>
	<div class="container" id="major">
		This is User edit component
		<p>Locale : {{ $route.query.locale}} </p>
		<p> answer : {{ $route.query.ans}} </p>

		<div class='container'>
		<div class="well well-sm">
			Testing if you are allowed to leave 
			<button class="btn btn-primary">Confirm</button>
		</div>
	</div>
	</div>
</template>

<style>
	#major {
		height:750px;
	}
</style>

<script>
	
</script>