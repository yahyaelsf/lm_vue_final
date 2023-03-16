

<script setup>
import {onMounted, ref} from 'vue'
import { useUserStore } from "../stores/user";
import router from '../router';
import toastr from "toastr";
const user = useUserStore();
const lang = ref("")
const logout = ()=>{
    user.setUser(null);
    toastr.success("logout Successfully")
    router.push('/login')
}
const chanegLang = (e) =>{
lang.value = e.$i18n.locale
user.setLang(e.$i18n.locale)
localStorage.setItem("locale",e.$i18n.locale)
}
onMounted( e=> {
    lang.value =user.lang
})

</script>
<template>
    <div>
        <header class="py-4 shadow-sm bg-white">
            <div class="container flex items-center justify-between">
                <a href="index.html">
                    <img src="../assets/images/logo.svg" alt="Logo" class="w-32">
                </a>

                <div class="w-full max-w-xl relative flex">
                    <span class="absolute left-4 top-3 text-lg text-gray-400">
                        <i class="fa-solid fa-magnifying-glass"></i>
                    </span>
                    <input type="text" name="search" id="search"
                        class="w-full border border-primary border-r-0 pl-12 py-3 pr-3 rounded-l-md focus:outline-none"
                        placeholder="search">
                    <button
                        class="bg-primary border border-primary text-white px-8 rounded-r-md hover:bg-transparent hover:text-primary transition">Search</button>
                </div>

                <div class="flex items-center space-x-4">
                    <router-link to="/wishlist" class="text-center text-gray-700 hover:text-primary transition relative">
                        <div class="text-2xl">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                        <div class="text-xs leading-3">Wishlist</div>
                        <div
                            class="absolute right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            8</div>
                    </router-link>
                    <router-link to="/cart" class="text-center text-gray-700 hover:text-primary transition relative">
                        <div class="text-2xl">
                            <i class="fa-solid fa-bag-shopping"></i>
                        </div>
                        <div class="text-xs leading-3">Cart</div>
                        <div
                            class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">
                            {{ user.cart.length ?? 0 }}
                            </div>
                    </router-link>
                    <router-link to="/account" class="text-center text-gray-700 hover:text-primary transition relative">
                        <div class="text-2xl">
                            <i class="fa-regular fa-user"></i>
                        </div>
                        <div class="text-xs leading-3">Account</div>
                    </router-link>
                </div>
            </div>
        </header>
        <!-- ./header -->

        <!-- navbar -->
        <nav class="bg-gray-800">
            <div class="container flex">
                <div class="px-8 py-4 bg-primary flex items-center cursor-pointer relative group">
                    <span class="text-white">
                        <i class="fa-solid fa-bars"></i>
                    </span>
                    <span class="capitalize ml-2 text-white">{{ $t('all-category') }}</span>

                    <!-- dropdown -->
                    <div
                        class="absolute w-full left-0 top-full bg-white shadow-md py-3 divide-y divide-gray-300 divide-dashed opacity-0 group-hover:opacity-100 transition duration-300 invisible group-hover:visible">
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/sofa.svg" alt="sofa" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Sofa</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/terrace.svg" alt="terrace" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Terarce</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/bed.svg" alt="bed" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Bed</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/office.svg" alt="office" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">office</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/outdoor-cafe.svg" alt="outdoor" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Outdoor</span>
                        </a>
                        <a href="#" class="flex items-center px-6 py-3 hover:bg-gray-100 transition">
                            <img src="../assets/images/icons/bed-2.svg" alt="Mattress" class="w-5 h-5 object-contain">
                            <span class="ml-6 text-gray-600 text-sm">Mattress</span>
                        </a>
                    </div>
                </div>

                <div class="flex items-center justify-between flex-grow pl-12">
                    <div class="flex items-center space-x-6 capitalize">
                        <router-link to="/" class="text-gray-200 hover:text-white transition">{{ $t('home') }}</router-link>
                        <router-link to="/shop" class="text-gray-200 hover:text-white transition">{{ $t('shop') }}</router-link>
                        <a href="#" class="text-gray-200 hover:text-white transition">{{ $t('about-us') }}</a>
                        <a href="#" class="text-gray-200 hover:text-white transition">{{ $t('contact-us') }}</a>
                    </div>
                    <div>
                        
                        <select v-model="$i18n.locale" @change="chanegLang(this)">
                            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{ locale }}</option>
                        </select>
                         <template v-if="user.user">
                            <a @click.prevent="logout()" href="/logout" class="text-gray-200 hover:text-white transition">logout</a>
                        </template>
                        <div v-else>
                            <router-link to="/login" class="text-gray-200 hover:text-white transition">Login</router-link>/
                            <router-link to="/register" class="text-gray-200 hover:text-white transition">register</router-link>
                        </div>
                    </div>
                   
                </div>
            </div>
        </nav>
        <!-- ./navbar -->

    </div>
</template>



<style>

</style>