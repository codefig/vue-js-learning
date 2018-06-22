<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h1>Filters and Mixins from List </h1>
               <p> {{text }}</p>
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
    import {FruitMixin} from './Mixin.js';
    export default {
      mixins: [FruitMixin]
    }
</script>

<style>
</style>
