<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
               <h1> Routing </h1>
               <hr>
               <app-header></app-header>
               <router-view></router-view>
            </div>
        </div>
    </div>
</template>

<script>
	import Header from './components/Header.vue';
    export default {
        components : {
        	appHeader : Header,
        }
    }
</script>

<style>
</style>
