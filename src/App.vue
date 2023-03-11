<script setup>
import {RouterView} from 'vue-router'
import { useUserStore } from './stores/user';

</script>

<template>
    <header-tag/>
    <router-view></router-view>
   <footer-tag/>
</template>

<style scoped>


</style>
