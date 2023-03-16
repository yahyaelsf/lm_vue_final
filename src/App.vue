<script setup>
import {onMounted, ref } from 'vue';
import {RouterView} from 'vue-router'
import { useUserStore } from './stores/user';
const user = useUserStore()

</script>

<template>
   <div :class="{ rtl : user.lang == 'ar'}">
     <header-tag/>
        <router-view></router-view>
       <footer-tag/>
   </div>
</template>

<style>
body .rtl {
    direction: rtl;
}

</style>
