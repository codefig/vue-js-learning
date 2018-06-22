<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h1>Filters and Mixins </h1>
               <p> {{text | toUpperCase|to-lowercase }}</p>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
        	return {
        		text : "Hello world",
        	}
        }, filters :{
        	toUpperCase(value) {
        		return value.toUpperCase();
        	} 
        }
    }
</script>

<style>
</style>
