<template>
	<div class="col-sm-12 col-xs-6">
		<h1> User page </h1>
		<hr>
		<p>Loaded id : {{ id }} </p>
		<button @click="navigateToHome" class="btn btn-primary">Go to Home </button>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				id : this.$route.params.id
			}
		}, 
		methods : {
			navigateToHome: function(){
					this.$router.push('/');
			}
		}
	}
</script>