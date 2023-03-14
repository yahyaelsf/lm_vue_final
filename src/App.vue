<script setup>
import { onBeforeMount, onMounted, ref } from 'vue';
import {RouterView} from 'vue-router'
import { useUserStore } from './stores/user';
const lang = ref("")
onBeforeMount(e => {
    getLocale()
})

const getLocale = () => {
    lang.value = localStorage.getItem("locale")
}
 
</script>

<template>
   <div :class="{ rtl : lang == 'ar'}">
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
