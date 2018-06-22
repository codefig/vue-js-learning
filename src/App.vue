<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h1>Filters and Mixins </h1>
               <p> {{text | toUpperCase|to-lowercase }}</p>
               <input type="text" v-model="filterText">
               <hr>
               <ul>
               	 <li v-for="fruit in filteredFruits">{{fruit}}</li>
               </ul>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
        	return {
        		text : "Hello world",
        		fruits : ['Apple', 'Mango', 'banana'],
        		filterText : ''
        	}
        }, filters :{
        	toUpperCase(value) {
        		return value.toUpperCase();
        	}
        },computed: {
        	// value will only be precomputed if it matches the function 
        	filteredFruits(){
        		return this.fruits.filter((element) => {
        			return element.match(this.filterText);
        		})
        	}
        }
    }
</script>

<style>
</style>
